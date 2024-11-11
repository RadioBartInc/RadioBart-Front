

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/albums/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ChBKNKvu.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
export const stylesheets = ["_app/immutable/assets/5.CfBucpTO.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
export const fonts = [];
