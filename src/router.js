export const HASH_ROUTER = import.meta.env.VITE_HASH_ROUTER === '1'
export const routeHref = (path) => (HASH_ROUTER ? '#' + path : path)

// Files in /public: absolute on the real site (nested routes), relative in the file:// single-file build.
export const publicUrl = (p) => (HASH_ROUTER ? p : import.meta.env.BASE_URL + p)
