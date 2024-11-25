

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/addArtist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.C5erZSeA.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js"];
export const stylesheets = ["_app/immutable/assets/3.BvOe8e8S.css"];
export const fonts = [];
