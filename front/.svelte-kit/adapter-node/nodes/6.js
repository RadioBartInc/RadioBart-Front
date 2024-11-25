import * as universal from '../entries/pages/artista/_id_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artista/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/artista/[id]/+page.js";
export const imports = ["_app/immutable/nodes/6.DCp_qfuS.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/entry.XM5ONYRv.js"];
export const stylesheets = ["_app/immutable/assets/6.zYJ_JhZ7.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
export const fonts = [];
