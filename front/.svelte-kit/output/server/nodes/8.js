

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artistas/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.CP-p5J7v.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js"];
export const stylesheets = ["_app/immutable/assets/8.b4qQqi9P.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
export const fonts = [];
