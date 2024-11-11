import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { g as getRatingClass } from "../../../chunks/misc.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const css$1 = {
  code: "section.svelte-v74z6n{display:grid;grid-template-columns:repeat(4, 1fr)}.artista.svelte-v74z6n{font-size:1.2rem;margin-top:.3rem}.nombre_album.svelte-v74z6n{font-size:1.0rem;margin-bottom:.3rem 0}.rating.svelte-v74z6n{grid-area:rating;text-align:center;color:var(--page-bg);border-radius:100vw;padding:.3rem 0;margin:.3rem 0;width:4rem}.album.svelte-v74z6n{margin-bottom:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 2rem}",
  map: '{"version":3,"file":"Albums.svelte","sources":["Albums.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { getArtistById, getAllAlbums, getAlbumAvgRating } from \\"@src/api/APIAdapter\\";\\nimport { getRatingClass } from \\"@src/utils/misc\\";\\nexport let albums = [];\\nexport let artists = {};\\nexport let avgRatings = {};\\nonMount(async () => {\\n  albums = await getAllAlbums();\\n  for (const album of albums) {\\n    if (!artists[album.artist]) {\\n      artists[album.artist] = await fetchArtist(album.artist);\\n    }\\n    if (!(album.id in avgRatings)) {\\n      avgRatings[album.id] = await fetchAlbumAvgRating(album.id);\\n    }\\n  }\\n});\\nasync function fetchArtist(artistId) {\\n  try {\\n    return await getArtistById(artistId);\\n  } catch (error) {\\n    console.error(`Error fetching artist ${artistId}:`, error);\\n    return null;\\n  }\\n}\\nasync function fetchAlbumAvgRating(albumId) {\\n  try {\\n    const rating = await getAlbumAvgRating(albumId);\\n    if (rating) {\\n      return rating;\\n    }\\n    return 0;\\n  } catch (error) {\\n    console.error(`Error fetching average rating for album ${albumId}:`, error);\\n    return 0;\\n  }\\n}\\n<\/script>\\n\\n<section>\\n  {#each albums as album}\\n    <div class=\\"album\\">\\n      <a href=\\"{`/album/${album.id}`}\\">\\n        <img src={album.cover || \'https://via.placeholder.com/150\'} alt=\\"album_cover\\" class=\\"portada hover-image\\">\\n      </a>\\n      <h3 class=\\"artista\\">\\n        <a href={`/artista/${album.artist}`}>{artists[album.artist]?.name}</a>\\n      </h3>\\n      <h3 class=\\"nombre_album\\"><a href={`/album/${album.id}`}>{album.title}</a></h3>\\n      <p class=\\"rating {getRatingClass(avgRatings[album.id])}\\">{avgRatings[album.id]}</p>\\n    </div>\\n  {/each}\\n</section>\\n\\n<style>section{\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n}\\n\\n.artista{\\n    font-size: 1.2rem;\\n    margin-top: .3rem;\\n}\\n\\n.nombre_album{\\n    font-size: 1.0rem;\\n    margin-bottom: .3rem 0;\\n}\\n\\n.rating{\\n    grid-area: rating;\\n    text-align: center;\\n    color: var(--page-bg);\\n    border-radius: 100vw;\\n    padding: .3rem 0;\\n    margin: .3rem 0;\\n    width: 4rem;\\n}\\n\\n.album{\\n    margin-bottom: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 0 2rem;\\n}\\n</style>\\n"],"names":[],"mappings":"AAsDO,qBAAO,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACxC,CAEA,sBAAQ,CACJ,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,KAChB,CAEA,2BAAa,CACT,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,KAAK,CAAC,CACzB,CAEA,qBAAO,CACH,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,aAAa,CAAE,KAAK,CACpB,OAAO,CAAE,KAAK,CAAC,CAAC,CAChB,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,KAAK,CAAE,IACX,CAEA,oBAAM,CACF,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,IACf"}'
};
const Albums = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { albums = [] } = $$props;
  let { artists = {} } = $$props;
  let { avgRatings = {} } = $$props;
  if ($$props.albums === void 0 && $$bindings.albums && albums !== void 0) $$bindings.albums(albums);
  if ($$props.artists === void 0 && $$bindings.artists && artists !== void 0) $$bindings.artists(artists);
  if ($$props.avgRatings === void 0 && $$bindings.avgRatings && avgRatings !== void 0) $$bindings.avgRatings(avgRatings);
  $$result.css.add(css$1);
  return `<section class="svelte-v74z6n">${each(albums, (album) => {
    return `<div class="album svelte-v74z6n"><a${add_attribute("href", `/album/${album.id}`, 0)}><img${add_attribute("src", album.cover || "https://via.placeholder.com/150", 0)} alt="album_cover" class="portada hover-image"></a> <h3 class="artista svelte-v74z6n"><a${add_attribute("href", `/artista/${album.artist}`, 0)}>${escape(artists[album.artist]?.name)}</a></h3> <h3 class="nombre_album svelte-v74z6n"><a${add_attribute("href", `/album/${album.id}`, 0)}>${escape(album.title)}</a></h3> <p class="${"rating " + escape(getRatingClass(avgRatings[album.id]), true) + " svelte-v74z6n"}">${escape(avgRatings[album.id])}</p> </div>`;
  })} </section>`;
});
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');:root{--elem-bg:#5a5a5a;--light-elem-bg:#7a7a7a;--hover-buttong-bg:#6a6a6a;--page-bg:#3b3b3b;--font-color:#fff;--shadow-color:rgba(0, 0, 0, 0.3);--bad-rating-bg:#ff5353;--good-rating-bg:#98ff98;--regular-rating-bg:#ffff79;--fecha-color:rgb(134, 134, 134);--primero-color:rgb(229, 228, 226);--segundo-color:rgb(255,215,0);--tercero-color:rgb(192,192,192);--cuarto-color:rgb(205, 127, 50);--primero-size:3rem;--segundo-size:2.75rem;--tercero-size:2.5rem;--cuarto-size:2.25rem;--a-glow:rgba(255, 255, 255, 0.4);--form-review-bg:rgb(114, 114, 114);--form-review-field-bg:rgb(70, 70, 70);--form-submit-bg:rgb(97, 97, 97)}*{box-sizing:border-box;padding:0;margin:0}body{margin:0;padding:0;background-color:var(--page-bg);color:var(--font-color);font-family:"Fira Sans", sans-serif;font-weight:400;font-style:normal}a{text-decoration:none;cursor:pointer;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;transition:.25s}a:hover{text-shadow:0 0 8px var(--a-glow)}.good_rating{background-color:var(--good-rating-bg)}.bad_rating{background-color:var(--bad-rating-bg)}.regular_rating{background-color:var(--regular-rating-bg)}.hover-image{transition:transform 0.3s ease, z-index 0s;z-index:1;max-width:150px;max-height:150px;object-fit:cover;object-position:center}.hover-image:hover{transform:scale(1.075) translateZ(0);z-index:2}.section-body{display:flex;flex-direction:column;margin:3rem}.section-title{font-size:2rem;margin-bottom:1rem;border-bottom:1px solid var(--light-elem-bg);box-shadow:0 3px 2px -3px var(--light-elem-bg)}.red{color:var(--bad-rating-bg)}.green{color:var(--good-rating-bg)}main.svelte-1sgenlr{padding:5rem
}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Albums from '@src/components/albums/Albums.svelte';\\n    import Navbar from '@src/components/navbar/Navbar.svelte';\\n\\n    // TODO: Add a way to look up albums using words using a specific navbar with a search text field for albums\\n<\/script>\\n\\n<style>@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\n\\n:global(:root) {\\n    --elem-bg: #5a5a5a;\\n    --light-elem-bg: #7a7a7a;\\n    --hover-buttong-bg: #6a6a6a;\\n\\n    --page-bg: #3b3b3b;\\n\\n    --font-color: #fff;\\n    --shadow-color: rgba(0, 0, 0, 0.3);\\n\\n    --bad-rating-bg: #ff5353;\\n    --good-rating-bg: #98ff98;\\n    --regular-rating-bg: #ffff79;\\n\\n    --fecha-color: rgb(134, 134, 134);\\n\\n    --primero-color: rgb(229, 228, 226);\\n    --segundo-color: rgb(255,215,0);\\n    --tercero-color: rgb(192,192,192);\\n    --cuarto-color:  rgb(205, 127, 50);\\n    --primero-size: 3rem;\\n    --segundo-size: 2.75rem;\\n    --tercero-size: 2.5rem;\\n    --cuarto-size: 2.25rem;\\n\\n    --a-glow: rgba(255, 255, 255, 0.4);\\n\\n    --form-review-bg: rgb(114, 114, 114);\\n    --form-review-field-bg: rgb(70, 70, 70);\\n    --form-submit-bg: rgb(97, 97, 97);\\n}\\n\\n:global(*) {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:global(body){\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--page-bg);\\n    color: var(--font-color);\\n    font-family: \\"Fira Sans\\", sans-serif;\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n:global(a){\\n    text-decoration: none;\\n    cursor: pointer;\\n    color: inherit;\\n    font-family: inherit;\\n    font-size: inherit;\\n    font-weight: inherit;\\n    transition: .25s;\\n}\\n\\n:global(a:hover){\\n    text-shadow: 0 0 8px var(--a-glow);\\n}\\n\\n:global(.good_rating){\\n    background-color: var(--good-rating-bg);\\n}\\n\\n:global(.bad_rating){\\n    background-color: var(--bad-rating-bg);\\n}\\n\\n:global(.regular_rating){\\n    background-color: var(--regular-rating-bg);\\n}\\n\\n:global(.hover-image) {\\n    transition: transform 0.3s ease, z-index 0s; \\n    z-index: 1; \\n    max-width: 150px;\\n    max-height: 150px;\\n    object-fit: cover;\\n    object-position: center; \\n}\\n\\n:global(.hover-image:hover) {\\n    transform: scale(1.075) translateZ(0); \\n    z-index: 2; \\n}\\n\\n:global(.section-body) {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 3rem;\\n}\\n\\n:global(.section-title){\\n    font-size: 2rem;\\n    margin-bottom: 1rem;\\n    border-bottom: 1px solid var(--light-elem-bg);\\n    box-shadow: 0 3px 2px -3px var(--light-elem-bg);\\n}\\n\\n:global(.red){\\n    color: var(--bad-rating-bg);\\n}\\n\\n:global(.green){\\n    color: var(--good-rating-bg);\\n}\\n\\nmain{\\n    padding: 5rem\\n}\\n</style>\\n\\n<Navbar/>\\n\\n<main>\\n        <Albums/>\\n</main>"],"names":[],"mappings":"AAOO,QAAQ,4LAA4L,CAEnM,KAAO,CACX,SAAS,CAAE,OAAO,CAClB,eAAe,CAAE,OAAO,CACxB,kBAAkB,CAAE,OAAO,CAE3B,SAAS,CAAE,OAAO,CAElB,YAAY,CAAE,IAAI,CAClB,cAAc,CAAE,kBAAkB,CAElC,eAAe,CAAE,OAAO,CACxB,gBAAgB,CAAE,OAAO,CACzB,mBAAmB,CAAE,OAAO,CAE5B,aAAa,CAAE,kBAAkB,CAEjC,eAAe,CAAE,kBAAkB,CACnC,eAAe,CAAE,cAAc,CAC/B,eAAe,CAAE,gBAAgB,CACjC,cAAc,CAAG,iBAAiB,CAClC,cAAc,CAAE,IAAI,CACpB,cAAc,CAAE,OAAO,CACvB,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,OAAO,CAEtB,QAAQ,CAAE,wBAAwB,CAElC,gBAAgB,CAAE,kBAAkB,CACpC,sBAAsB,CAAE,eAAe,CACvC,gBAAgB,CAAE,eACtB,CAEQ,CAAG,CACP,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACZ,CAEQ,IAAK,CACT,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAChB,CAEQ,CAAE,CACN,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,OAAO,CACpB,UAAU,CAAE,IAChB,CAEQ,OAAQ,CACZ,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,QAAQ,CACrC,CAEQ,YAAa,CACjB,gBAAgB,CAAE,IAAI,gBAAgB,CAC1C,CAEQ,WAAY,CAChB,gBAAgB,CAAE,IAAI,eAAe,CACzC,CAEQ,eAAgB,CACpB,gBAAgB,CAAE,IAAI,mBAAmB,CAC7C,CAEQ,YAAc,CAClB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,EAAE,CAC3C,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,MACrB,CAEQ,kBAAoB,CACxB,SAAS,CAAE,MAAM,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,CACrC,OAAO,CAAE,CACb,CAEQ,aAAe,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACZ,CAEQ,cAAe,CACnB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,eAAe,CAAC,CAC7C,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,eAAe,CAClD,CAEQ,IAAK,CACT,KAAK,CAAE,IAAI,eAAe,CAC9B,CAEQ,MAAO,CACX,KAAK,CAAE,IAAI,gBAAgB,CAC/B,CAEA,mBAAI,CACA,OAAO,CAAE,IAAI;AACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="svelte-1sgenlr">${validate_component(Albums, "Albums").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};