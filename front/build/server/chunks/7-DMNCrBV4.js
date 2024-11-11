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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ckg4YJVk.js')).default;
const universal_id = "src/routes/artista/[id]/addAlbum/+page.js";
const imports = ["_app/immutable/nodes/7.Bf9Ig_0W.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.Cz3TSd7V.js","_app/immutable/chunks/index.DKOtY3uX.js","_app/immutable/chunks/APIAdapter.CWbTadu6.js"];
const stylesheets = ["_app/immutable/assets/7.ByFXuhqF.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-DMNCrBV4.js.map
