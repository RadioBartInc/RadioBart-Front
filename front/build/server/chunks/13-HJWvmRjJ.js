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
const component = async () => component_cache ??= (await import('./_page.svelte-CVCNjp3H.js')).default;
const universal_id = "src/routes/usuario/[id]/+page.js";
const imports = ["_app/immutable/nodes/13.JA44_g51.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/limits.C1Ngrwk2.js","_app/immutable/chunks/misc.B4lJbiPP.js"];
const stylesheets = ["_app/immutable/assets/13.CawAoG6t.css","_app/immutable/assets/Navbar.m2R8L35c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-HJWvmRjJ.js.map
