import { useEffect, useRef, useState } from 'react'
import owlSrc from '../assets/img/owl-head-eyes.webp'
import { prefersReducedMotion } from '../motion'

const VERT = /* glsl */ `
  attribute vec3 aColor; attribute vec3 aScatter; attribute float aSeed;
  uniform float uMorph, uTime, uSize, uPixel; uniform vec2 uMouse;
  varying vec3 vColor; varying float vAlpha;
  void main() {
    float m = smoothstep(0.0, 1.0, clamp(uMorph * 1.25 - aSeed * 0.25, 0.0, 1.0));
    vec3 p = mix(position, aScatter, m);
    p += 0.012 * vec3(sin(uTime * 1.3 + aSeed * 40.0), cos(uTime * 1.1 + aSeed * 30.0), sin(uTime + aSeed * 20.0)) * (1.0 + m * 6.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec2 ndc = clip.xy / clip.w;
    float d = distance(ndc, uMouse);
    vec2 push = normalize(ndc - uMouse + 0.0001) * smoothstep(0.22, 0.0, d) * 0.06;
    clip.xy += push * clip.w;
    gl_Position = clip;
    gl_PointSize = uSize * uPixel * (1.0 + m * 0.8) / -mv.z;
    vColor = mix(aColor, vec3(0.45, 0.85, 1.0), m * 0.6);
    vAlpha = 1.0 - m * 0.35;
  }`
const FRAG = /* glsl */ `
  varying vec3 vColor; varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5; float r = length(c);
    if (r > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, r);
    gl_FragColor = vec4(vColor * (1.55 + glow * 0.6), vAlpha * glow);
  }`

/** Sample the owl artwork into a point cloud: x/y from pixels, depth from brightness, colour from the pixel. */
function sampleOwl(img, step) {
  const w = img.naturalWidth, h = img.naturalHeight
  const c = document.createElement('canvas'); c.width = w; c.height = h
  const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0)
  const data = ctx.getImageData(0, 0, w, h).data
  const pos = [], col = [], sc = [], seed = []
  let s = 9
  const rnd = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646
  for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) {
    const i = (y * w + x) * 4
    if (data[i + 3] < 140) continue
    const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255, lum = 0.3 * r + 0.59 * g + 0.11 * b
    const nx = (x / w - 0.5) * 2, ny = -(y / h - 0.5) * 2
    const dome = Math.sqrt(Math.max(0, 1 - nx * nx * 0.8 - ny * ny * 0.5)) * 0.45
    const eye = g > 0.55 && b > 0.6 && r < 0.45 ? 0.18 : 0
    pos.push(nx, ny, dome + lum * 0.25 + eye + (rnd() - 0.5) * 0.02)
    col.push(r, g, b)
    const th = rnd() * Math.PI * 2, ph = Math.acos(2 * rnd() - 1), R = 1.6 + rnd() * 2.2
    sc.push(R * Math.sin(ph) * Math.cos(th), R * Math.sin(ph) * Math.sin(th), R * Math.cos(ph) * 0.8)
    seed.push(rnd())
  }
  return { pos, col, sc, seed }
}

/**
 * The Virelix owl as live 3D particles. Drag to spin it; `progress` (0..1 through the section) assembles it in the
 * middle of the section and scatters it at the edges. Falls back to the flat artwork without WebGL or with reduced motion.
 */
export default function Owl3D({ progress, onCount }) {
  const host = useRef(null)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) { setFallback(true); return }
    let disposed = false, cleanup = () => {}
    ;(async () => {
      const THREE = await import('three')
      const img = new Image(); img.src = owlSrc
      await img.decode().catch(() => {})
      if (disposed) return
      let renderer
      try { renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' }) } catch { setFallback(true); return }
      const el = host.current
      const dpr = Math.min(devicePixelRatio || 1, 1.75)
      renderer.setPixelRatio(dpr)
      el.appendChild(renderer.domElement)
      const scene = new THREE.Scene()
      const cam = new THREE.PerspectiveCamera(35, 1, 0.1, 50); cam.position.set(0, 0, 4.4)
      const small = innerWidth < 760
      const { pos, col, sc, seed } = sampleOwl(img, small ? 5 : 3)
      onCount?.(pos.length / 3)
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
      geo.setAttribute('aColor', new THREE.Float32BufferAttribute(col, 3))
      geo.setAttribute('aScatter', new THREE.Float32BufferAttribute(sc, 3))
      geo.setAttribute('aSeed', new THREE.Float32BufferAttribute(seed, 1))
      const mat = new THREE.ShaderMaterial({
        vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: { uMorph: { value: 1 }, uTime: { value: 0 }, uSize: { value: small ? 11 : 8.5 }, uPixel: { value: dpr }, uMouse: { value: new THREE.Vector2(9, 9) } },
      })
      const points = new THREE.Points(geo, mat)
      scene.add(points)

      const size = () => { const r = el.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); cam.aspect = r.width / r.height; cam.updateProjectionMatrix() }
      size()
      const ro = new ResizeObserver(size); ro.observe(el)

      // Drag to spin (with inertia); hover tilts and pushes particles away from the cursor.
      let rotY = -0.35, rotX = 0, vel = 0.0025, drag = null, tiltX = 0, tiltY = 0
      const down = (e) => { drag = { x: e.clientX, y: e.clientY }; el.setPointerCapture?.(e.pointerId) }
      const move = (e) => {
        const r = el.getBoundingClientRect()
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = -(((e.clientY - r.top) / r.height) * 2 - 1)
        mat.uniforms.uMouse.value.set(nx, ny); tiltX = ny * 0.25; tiltY = nx * 0.35
        if (drag) { vel = (e.clientX - drag.x) * 0.0009; rotX += (e.clientY - drag.y) * 0.002; drag = { x: e.clientX, y: e.clientY } }
      }
      const up = () => { drag = null }
      const leave = () => { mat.uniforms.uMouse.value.set(9, 9); tiltX = tiltY = 0 }
      el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move); addEventListener('pointerup', up); el.addEventListener('pointerleave', leave)

      let raf, visible = true, t0 = performance.now()
      const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop() }, { rootMargin: '100px' })
      io.observe(el)
      function loop() {
        cancelAnimationFrame(raf)
        if (!visible) return
        const t = (performance.now() - t0) / 1000
        const p = progress.current ?? 0.5
        // assembled between 30% and 70% of the section, scattered at the edges
        const target = p < 0.3 ? (0.3 - p) / 0.3 : p > 0.7 ? (p - 0.7) / 0.3 : 0
        mat.uniforms.uMorph.value += (Math.min(1, target) - mat.uniforms.uMorph.value) * 0.08
        mat.uniforms.uTime.value = t
        rotY += vel; vel += (0.0025 - vel) * 0.02
        rotX *= 0.95
        points.rotation.y = rotY + Math.sin(t * 0.3) * 0.1 + tiltY
        points.rotation.x = rotX + tiltX
        renderer.render(scene, cam)
        raf = requestAnimationFrame(loop)
      }
      loop()
      cleanup = () => {
        cancelAnimationFrame(raf); io.disconnect(); ro.disconnect()
        el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); removeEventListener('pointerup', up); el.removeEventListener('pointerleave', leave)
        geo.dispose(); mat.dispose(); renderer.dispose(); renderer.domElement.remove()
      }
    })()
    return () => { disposed = true; cleanup() }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={'owl3d' + (fallback ? ' is-flat' : '')} ref={host} data-cursor="Drag">
      {fallback && <img src={owlSrc} alt="" />}
    </div>
  )
}
