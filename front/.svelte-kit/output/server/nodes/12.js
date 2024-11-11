

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reviews/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.CyKo5YKB.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/Review.BwtD2Axs.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
export const stylesheets = ["_app/immutable/assets/12.DAzpPk3g.css","_app/immutable/assets/Navbar.m2R8L35c.css","_app/immutable/assets/Review.JTP8kwl6.css"];
export const fonts = [];
