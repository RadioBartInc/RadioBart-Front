import * as universal from '../entries/pages/review/_id_/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/review/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/review/[id]/+page.js";
export const imports = ["_app/immutable/nodes/11.C2E9cjMQ.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/Review.BwtD2Axs.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/limits.C1Ngrwk2.js"];
export const stylesheets = ["_app/immutable/assets/11.BX5u_J_q.css","_app/immutable/assets/Navbar.m2R8L35c.css","_app/immutable/assets/Review.JTP8kwl6.css"];
export const fonts = [];
