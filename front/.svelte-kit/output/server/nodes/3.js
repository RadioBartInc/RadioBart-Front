

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/addArtist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CS4BSPsk.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js"];
export const stylesheets = ["_app/immutable/assets/3.D5LXvmXx.css"];
export const fonts = [];
