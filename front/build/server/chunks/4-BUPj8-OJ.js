import { e as error } from './index-CvuFLVuQ.js';

function load({ params }) {
  if (params.id) {
    return {
      id: params.id
    };
  }
  error(404, "Not found");
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C3_xcF8f.js')).default;
const universal_id = "src/routes/album/[id]/+page.js";
const imports = ["_app/immutable/nodes/4.OreUDA0f.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/entry.XM5ONYRv.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/limits.C1Ngrwk2.js"];
const stylesheets = ["_app/immutable/assets/4.FcOHvFAu.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-BUPj8-OJ.js.map
