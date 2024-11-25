import * as universal from '../entries/pages/album/_id_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/album/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/album/[id]/+page.js";
export const imports = ["_app/immutable/nodes/4.OreUDA0f.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/entry.XM5ONYRv.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/limits.C1Ngrwk2.js"];
export const stylesheets = ["_app/immutable/assets/4.FcOHvFAu.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
export const fonts = [];
