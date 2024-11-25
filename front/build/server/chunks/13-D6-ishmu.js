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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CfpmvoNV.js')).default;
const universal_id = "src/routes/usuario/[id]/+page.js";
const imports = ["_app/immutable/nodes/13.BZrak56P.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/limits.C1Ngrwk2.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
const stylesheets = ["_app/immutable/assets/13.DO5hSxB5.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-D6-ishmu.js.map
