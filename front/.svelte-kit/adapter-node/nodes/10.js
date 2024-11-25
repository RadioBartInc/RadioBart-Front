

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CNkzH1bD.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js"];
export const stylesheets = ["_app/immutable/assets/10.B4PMNLcD.css"];
export const fonts = [];
