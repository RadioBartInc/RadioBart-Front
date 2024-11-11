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
const component = async () => component_cache ??= (await import('./_page.svelte-DN1wf-WK.js')).default;
const universal_id = "src/routes/review/[id]/+page.js";
const imports = ["_app/immutable/nodes/11.C2E9cjMQ.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/Navbar.CYHUjA86.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js","_app/immutable/chunks/Review.BwtD2Axs.js","_app/immutable/chunks/misc.B4lJbiPP.js","_app/immutable/chunks/limits.C1Ngrwk2.js"];
const stylesheets = ["_app/immutable/assets/11.BX5u_J_q.css","_app/immutable/assets/Navbar.m2R8L35c.css","_app/immutable/assets/Review.JTP8kwl6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=11-COixgOsB.js.map
