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
const component = async () => component_cache ??= (await import('./_page.svelte-BZ7Y3Nfn.js')).default;
const universal_id = "src/routes/artista/[id]/+page.js";
const imports = ["_app/immutable/nodes/6.CAyu4avv.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
const stylesheets = ["_app/immutable/assets/6.DPHOZHNG.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-Cbuu_RiW.js.map
