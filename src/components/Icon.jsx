/** Line icons (24×24, stroke = currentColor). */
const P = {
  code: <><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
  cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m12 8 1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5L12 8z" /></>,
  lens: <><rect x="3" y="6" width="18" height="13" rx="3" /><circle cx="12" cy="12.5" r="3.5" /><path d="M8 6l1.5-2.5h5L16 6" /></>,
  ai: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>,
  orbit: <><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="10" ry="4.5" /><circle cx="20" cy="9" r="1" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>,
  rise: <><path d="M3 20h18" /><path d="m4 15 5-5 4 3 7-7" /><path d="M15 6h5v5" /></>,
  rocket: <><path d="M12 15c4-3 6.5-7 7-12-5 .5-9 3-12 7l5 5z" /><path d="m7 10-3 1 2 4M14 17l-1 3-4-2" /><circle cx="14.5" cy="9.5" r="1.5" /></>,
  team: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.8c1.7.8 2.8 2.6 3 5.2" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  whatsapp: <><path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8 19z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1c-1.2-.5-2.5-1.8-3-3l1-1-1-2L9 8.5z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>,
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 4.6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></>,
}

export default function Icon({ name, className = '' }) {
  return <svg className={'ic ' + className} viewBox="0 0 24 24" aria-hidden="true">{P[name] || P.spark}</svg>
}
