# VIRELIX — See. Analyze. Dominate. 🦉

Modular Vite + React build of the VIRELIX brand experience.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  main.jsx            entry
  App.jsx             phases (loading → intro → ready), reveals, final flight
  index.css           full design system (tokens, components, motion)
  lib/motion.js       gsap + ScrollTrigger + reduced-motion flags
  components/
    Loader.jsx        boot sequence ("Initializing VIRELIX…")
    Intro.jsx         twin owl eyes → VIRELIX logo reveal
    Background.jsx    binary rain + particles + neural grid canvas
    Cursor.jsx        custom cursor, ripple, magnetic buttons, card spotlight
    Bird.jsx          the living owl mascot (scroll flight, eye tracking, trail)
    Navbar / Hero / About / Services / Process / Tech /
    Portfolio / Stats / Testimonials / Contact / Footer / EndOverlay
```

## Notes

- Contact form validates client-side; wire `Contact.jsx` submit to a real
  endpoint (Next.js API route / Resend / Nodemailer) for production.
- All animation respects `prefers-reduced-motion`.
- Brand tokens live at the top of `src/index.css` (colors, type, spacing).
