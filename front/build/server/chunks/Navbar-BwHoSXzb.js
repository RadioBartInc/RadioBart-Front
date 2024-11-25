import { c as create_ssr_component } from './ssr-DHpF3kMw.js';

const css = {
  code: "#logo.svelte-pweovg.svelte-pweovg{background-color:transparent;color:none;border:none;cursor:pointer}nav.svelte-pweovg.svelte-pweovg{background-color:var(--elem-bg);box-shadow:0 2px 4px var(--shadow-color);color:var(--font-color);padding:1rem 0;display:flex;justify-content:space-between;align-items:center;padding:0 2rem;height:3rem}.perfil.svelte-pweovg.svelte-pweovg{display:flex;justify-content:center;align-items:center}.avatar.svelte-pweovg.svelte-pweovg{aspect-ratio:1/1;width:100%;height:100%;max-width:25px;max-height:25px;border-radius:100vw}#lista_nav.svelte-pweovg.svelte-pweovg{display:flex;list-style:none;width:auto;height:100%;justify-content:space-between}#lista_nav.svelte-pweovg li button.svelte-pweovg{background-color:var(--elem--bg);color:var(--font-color);height:100%;border:none;cursor:pointer;padding:0 1rem;transition:ease 0.3s}#lista_nav.svelte-pweovg li button.svelte-pweovg:hover{box-shadow:0 0 4px var(--shadow-color);background-color:var(--hover-buttong-bg)}.logout.svelte-pweovg.svelte-pweovg{color:var(--bad-rating-bg) !important}.register.svelte-pweovg.svelte-pweovg,.login.svelte-pweovg.svelte-pweovg{color:var(--good-rating-bg) !important}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { User } from \\"@src/models/UserClass\\";\\nimport { onMount } from \\"svelte\\";\\nlet token;\\nlet user;\\nonMount(() => {\\n  token = localStorage.getItem(\\"token\\");\\n  user = User.fromObject(JSON.parse(localStorage.getItem(\\"user\\") || \\"\\"));\\n});\\nfunction handleLogout() {\\n  localStorage.removeItem(\\"token\\");\\n  localStorage.removeItem(\\"user\\");\\n  window.location.href = \\"/\\";\\n}\\n<\/script>\\n\\n<nav>\\n    <a href=\\"/\\"><button id=\\"logo\\">\\n        <img src=\\"https://via.placeholder.com/50\\" alt=\\"logo\\">\\n    </button></a>\\n    <ul id=\\"lista_nav\\">\\n        <li>\\n            <a href=\\"/albums\\"><button>Albums</button></a>\\n        </li>\\n        <li>\\n            <a href=\\"/artistas\\"><button>Artistas</button></a>\\n        </li>\\n        <li>\\n            <a href=\\"/reviews\\"><button>Reviews</button></a>\\n        </li>\\n        {#if token && user}\\n            <li>\\n                <a href=\\"/usuario/{user.id}\\"><button class=\\"perfil\\">\\n                    <img class=\\"avatar\\" src=\\"{user.profile_picture || 'https://via.placeholder.com/50'}\\" alt=\\"Profile\\">\\n                </button></a>\\n            </li>\\n            <li>\\n                <button class=\\"logout\\" on:click={handleLogout}>Logout</button>\\n            </li>\\n        {:else}\\n            <li>\\n                <a class=\\"login\\" href=\\"/login\\"><button>Login</button></a>\\n            </li>\\n            <li>\\n                <a class=\\"register\\" href=\\"/register\\"><button>Register</button></a>\\n            </li>\\n        {/if}\\n    </ul>\\n</nav>\\n\\n<style>#logo{\\n    background-color: transparent;\\n    color: none;\\n    border: none;\\n    cursor: pointer;\\n}\\n\\nnav{\\n    background-color: var(--elem-bg);\\n    box-shadow: 0 2px 4px var(--shadow-color);\\n    color: var(--font-color);\\n    padding: 1rem 0;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 2rem;\\n    height: 3rem;\\n}\\n\\n.perfil{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.avatar{\\n    aspect-ratio: 1/1;\\n    width: 100%;\\n    height: 100%;\\n    max-width: 25px;\\n    max-height: 25px;\\n    border-radius: 100vw;\\n}\\n\\n#lista_nav{\\n    display: flex;\\n    list-style: none;\\n    width: auto;\\n    height: 100%;\\n    justify-content: space-between;\\n}\\n\\n#lista_nav li button{\\n    background-color: var(--elem--bg);\\n    color: var(--font-color);\\n    height: 100%;\\n    border: none;\\n    cursor: pointer;\\n    padding: 0 1rem;\\n    transition: ease 0.3s;\\n}\\n\\n#lista_nav li button:hover{\\n    box-shadow: 0 0 4px var(--shadow-color);\\n    background-color: var(--hover-buttong-bg);\\n}\\n\\n.logout{\\n    color: var(--bad-rating-bg) !important; \\n}\\n\\n.register, .login{\\n    color: var(--good-rating-bg) !important;\\n}\\n</style>\\n"],"names":[],"mappings":"AAiDO,iCAAK,CACR,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OACZ,CAEA,+BAAG,CACC,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,cAAc,CAAC,CACzC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,IACZ,CAEA,mCAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB,CAEA,mCAAO,CACH,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,KACnB,CAEA,sCAAU,CACN,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,aACrB,CAEA,wBAAU,CAAC,EAAE,CAAC,oBAAM,CAChB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,UAAU,CAAE,IAAI,CAAC,IACrB,CAEA,wBAAU,CAAC,EAAE,CAAC,oBAAM,MAAM,CACtB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,cAAc,CAAC,CACvC,gBAAgB,CAAE,IAAI,kBAAkB,CAC5C,CAEA,mCAAO,CACH,KAAK,CAAE,IAAI,eAAe,CAAC,CAAC,UAChC,CAEA,qCAAS,CAAE,kCAAM,CACb,KAAK,CAAE,IAAI,gBAAgB,CAAC,CAAC,UACjC"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-pweovg"><a href="/" data-svelte-h="svelte-615e9x"><button id="logo" class="svelte-pweovg"><img src="https://via.placeholder.com/50" alt="logo"></button></a> <ul id="lista_nav" class="svelte-pweovg"><li data-svelte-h="svelte-mkzpfz"><a href="/albums"><button class="svelte-pweovg">Albums</button></a></li> <li data-svelte-h="svelte-hurhvb"><a href="/artistas"><button class="svelte-pweovg">Artistas</button></a></li> <li data-svelte-h="svelte-of3c81"><a href="/reviews"><button class="svelte-pweovg">Reviews</button></a></li> ${`<li data-svelte-h="svelte-1he1klb"><a class="login svelte-pweovg" href="/login"><button class="svelte-pweovg">Login</button></a></li> <li data-svelte-h="svelte-wltqyd"><a class="register svelte-pweovg" href="/register"><button class="svelte-pweovg">Register</button></a></li>`}</ul> </nav>`;
});

export { Navbar as N };
//# sourceMappingURL=Navbar-BwHoSXzb.js.map
