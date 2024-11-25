

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reviews/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.CgKkFUIg.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/Review.Die6Q31A.js","_app/immutable/chunks/entry.XM5ONYRv.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
export const stylesheets = ["_app/immutable/assets/12.DAzpPk3g.css","_app/immutable/assets/Navbar.m2R8L35c.css","_app/immutable/assets/Review.Cc08Ip7Q.css"];
export const fonts = [];
