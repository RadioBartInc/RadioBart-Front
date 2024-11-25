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

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-AO5PMUie.js')).default;
const universal_id = "src/routes/review/[id]/+page.js";
const imports = ["_app/immutable/nodes/11.BZtC8oST.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.DGiOEIBM.js","_app/immutable/chunks/APIAdapter.DEoGsArP.js","_app/immutable/chunks/Review.Die6Q31A.js","_app/immutable/chunks/entry.XM5ONYRv.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/limits.C1Ngrwk2.js"];
const stylesheets = ["_app/immutable/assets/11.D4B7mNoh.css","_app/immutable/assets/Navbar.m2R8L35c.css","_app/immutable/assets/Review.Cc08Ip7Q.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=11-CcPecq7v.js.map
