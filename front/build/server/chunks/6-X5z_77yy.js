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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CpPJJezJ.js')).default;
const universal_id = "src/routes/artista/[id]/+page.js";
const imports = ["_app/immutable/nodes/6.DCp_qfuS.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/entry.XM5ONYRv.js"];
const stylesheets = ["_app/immutable/assets/6.zYJ_JhZ7.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-X5z_77yy.js.map
