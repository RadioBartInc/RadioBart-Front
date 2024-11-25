import { c as create_ssr_component } from './ssr-DHpF3kMw.js';
import './client-BUusD8wq.js';

const css = {
  code: "section.svelte-d1mgxb.svelte-d1mgxb{display:grid;grid-template-columns:1fr 7fr}.info_usuario.svelte-d1mgxb.svelte-d1mgxb{display:flex;align-items:center;flex-direction:row}.review-texto.svelte-d1mgxb.svelte-d1mgxb{margin-top:1rem}.avatar.svelte-d1mgxb.svelte-d1mgxb{aspect-ratio:1/1;width:100%;height:100%;max-width:3rem;max-height:3rem;border-radius:100vw;margin-right:.5rem;object-fit:cover}.fecha.svelte-d1mgxb.svelte-d1mgxb{grid-area:fecha;color:var(--fecha-color);font-size:0.8rem;margin:.3rem 0}.rating.svelte-d1mgxb.svelte-d1mgxb{display:flex;justify-content:center;align-items:center;grid-area:rating;color:var(--page-bg);border-radius:100vw;padding:.3rem 0;height:3rem;width:4rem}.review.svelte-d1mgxb.svelte-d1mgxb{margin-bottom:1rem;margin-left:1rem}.likes.svelte-d1mgxb.svelte-d1mgxb{display:flex;flex-direction:row;align-items:center}.heart.svelte-d1mgxb.svelte-d1mgxb{max-width:2rem;max-height:2rem;margin-right:.5rem;margin-left:1rem}.likes-no.svelte-d1mgxb.svelte-d1mgxb{text-align:center}.rating-wrapper.svelte-d1mgxb.svelte-d1mgxb{width:100%;display:flex;justify-content:center}.info.svelte-d1mgxb.svelte-d1mgxb{display:flex;flex-direction:column;align-items:center}.artista.svelte-d1mgxb.svelte-d1mgxb{margin-bottom:.25rem;text-align:center}.album.svelte-d1mgxb.svelte-d1mgxb{margin-bottom:.5rem;text-align:center;font-size:1rem}.portada.svelte-d1mgxb.svelte-d1mgxb{aspect-ratio:1/1;width:100%;margin-bottom:.5rem}.more_review.svelte-d1mgxb.svelte-d1mgxb{margin-left:1rem}.more_review.svelte-d1mgxb button.svelte-d1mgxb{background:none;cursor:pointer;border:0\n}.more_review.svelte-d1mgxb button img.svelte-d1mgxb{max-width:2rem;max-height:2rem;height:100%}.like-button.svelte-d1mgxb.svelte-d1mgxb{border:none;background:none;cursor:pointer}.like-button.svelte-d1mgxb svg.heart.svelte-d1mgxb{transition:fill 0.3s ease-in-out}",
  map: '{"version":3,"file":"Review.svelte","sources":["Review.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { getReviewById, getUserById, getAlbumById, getArtistById, updateReviewLikes, deleteReview } from \\"@src/api/APIAdapter\\";\\nimport { User } from \\"@src/models/UserClass\\";\\nimport { getRatingClass } from \\"@src/utils/misc\\";\\nimport { Artista } from \\"@src/models/ArtistaClass\\";\\nimport { putReviewLikes, updateReviewLike } from \\"@src/api/APIClient\\";\\nexport let id;\\nexport let showMoreButton = false;\\nlet review = null;\\nlet user = null;\\nlet album = null;\\nlet artist = null;\\nlet likeCount = 0;\\nlet likedByUser = false;\\nlet currentUser;\\nlet token = \\"\\";\\nasync function fetchData() {\\n  try {\\n    token = localStorage.getItem(\\"token\\");\\n    const userObject = JSON.parse(localStorage.getItem(\\"user\\") || \\"{}\\");\\n    currentUser = userObject ? User.fromObject(userObject) : null;\\n    review = await getReviewById(id);\\n    if (review) {\\n      user = await getUserById(review.userId);\\n      album = await getAlbumById(review.albumId);\\n      if (album) {\\n        artist = await getArtistById(album.artist);\\n      }\\n      likeCount = review.likes;\\n      likedByUser = false;\\n    }\\n  } catch (error) {\\n    console.error(\\"Failed to fetch review data:\\", error);\\n  }\\n}\\nonMount(fetchData);\\nasync function toggleLike() {\\n  if (review && user && token) {\\n    try {\\n      const response = await updateReviewLikes(review.id, token, likeCount + (likedByUser ? -1 : 1), user.id);\\n      if (response) {\\n        likeCount += likedByUser ? -1 : 1;\\n        likedByUser = !likedByUser;\\n      }\\n    } catch (error) {\\n      console.error(\\"Failed to update like status:\\", error);\\n    }\\n  }\\n}\\nasync function callDeleteReview() {\\n  if (review) {\\n    await deleteReview(review.id ?? \\"\\", token ?? \\"\\");\\n  }\\n  goto(\\"/\\");\\n}\\n<\/script>\\n\\n<section>\\n  {#if review && album && user && artist}\\n    <div class=\\"info\\">\\n      <a href=\\"{`/album/${album.id}`}\\">\\n        <img src={album.cover} alt=\\"Album Cover\\" class=\\"portada hover-image\\">\\n      </a>\\n      <h3 class=\\"artista\\"><a href={`/artista/${artist.id}`}>{artist.name}</a></h3>\\n      <h3 class=\\"album\\"><a href={`/album/${album.id}`}>{album.title}</a></h3>\\n      <div class=\\"rating-wrapper\\">\\n        <p class=\\"rating {getRatingClass(review.ratingScore)}\\">{review.ratingScore}</p>\\n      </div>\\n      <p class=\\"fecha\\">{review.fecha.toLocaleDateString(\'es-ES\')}</p>\\n      {#if currentUser && currentUser.role}\\n        <button on:click={callDeleteReview} class=\\"admin-button bg-red\\">Borrar Review</button>\\n      {/if}\\n    </div>\\n\\n    <div class=\\"review\\">\\n      <div class=\\"usuario\\">\\n        <div class=\\"info_usuario\\">\\n          <a href=\\"{`/usuario/${user.id}`}\\">\\n            <img src={user.profile_picture || \'https://via.placeholder.com/50\'} alt=\\"User Avatar\\" class=\\"avatar\\">\\n          </a>\\n          <p><a href={`/usuario/${user.id}`}>{user.name}</a></p>\\n          <div class=\\"likes\\">\\n            <button class=\\"like-button\\" on:click={toggleLike}>\\n              <svg class=\\"heart\\" height=\\"20px\\" fill=\\"{likedByUser ? \'#ff6666\' : \'#222\'}\\" viewBox=\\"0 -30 511.99938 511\\" width=\\"20px\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n                <path d=\\"m248.367188 448.496094c2.359374 1.394531 4.996093 2.082031 7.632812 2.082031s5.273438-.6875 7.632812-2.082031c10.398438-6.152344 255.613282-152.242188 248.203126-309.316406-3.632813-77.175782-63.378907-138.078126-134.769532-138.648438-61.941406-1.390625-100.558594 42.121094-121.066406 80.53125-20.40625-38.191406-59.363281-80.53125-120.042969-80.53125-.351562 0-.6875 0-1.023437 0-71.390625.574219-131.136719 61.472656-134.769532 138.648438-7.410156 157.074218 237.800782 303.164062 248.203126 309.316406zm0 0\\"/>\\n              </svg>\\n            </button>\\n            <p class=\\"likes-no\\">{likeCount}</p>\\n            {#if showMoreButton}\\n              <a class=\\"more_review\\" href={`/review/${review.id}`}>\\n                <button>\\n                  <img src=\\"https://via.placeholder.com/50\\" alt=\\"More Review\\">\\n                </button>\\n              </a>\\n            {/if} <!-- Only render the button if the prop is true -->\\n          </div>\\n        </div>\\n      </div>\\n      <p class=\\"review-texto\\">{review.content}</p>\\n    </div>\\n  {/if}\\n</section>\\n\\n<style>section{\\n    display: grid;\\n    grid-template-columns: 1fr 7fr;\\n}\\n\\n.info_usuario{\\n    display: flex;\\n    align-items: center;\\n    flex-direction: row;\\n}\\n\\n.review-texto{\\n    margin-top: 1rem;\\n}\\n\\n.avatar{\\n    aspect-ratio: 1/1;\\n    width: 100%;\\n    height: 100%;\\n    max-width: 3rem;\\n    max-height: 3rem;\\n    border-radius: 100vw;\\n    margin-right: .5rem;\\n    object-fit: cover;\\n}\\n\\n.fecha{\\n    grid-area: fecha;\\n    color: var(--fecha-color);\\n    font-size: 0.8rem;\\n    margin: .3rem 0;\\n}\\n\\n.rating{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    grid-area: rating;\\n    color: var(--page-bg);\\n    border-radius: 100vw;\\n    padding: .3rem 0;\\n    height: 3rem;\\n    width: 4rem;\\n}\\n\\n.review{\\n    margin-bottom: 1rem;\\n    margin-left: 1rem;\\n}\\n\\n.likes{\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n}\\n\\n.heart{\\n    max-width: 2rem;\\n    max-height: 2rem;\\n    margin-right: .5rem;\\n    margin-left: 1rem;\\n}\\n\\n.likes-no{\\n    text-align: center;\\n}\\n\\n.rating-wrapper{\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.info{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.artista{\\n    margin-bottom: .25rem;\\n    text-align: center;\\n}\\n\\n.album{\\n    margin-bottom: .5rem;\\n    text-align: center;\\n    font-size: 1rem;\\n}\\n\\n.portada{\\n    aspect-ratio: 1/1;\\n    width: 100%;\\n    margin-bottom: .5rem;\\n}\\n\\n.more_review {\\n    margin-left: 1rem;\\n}\\n\\n.more_review button{\\n    background: none;\\n    cursor: pointer;\\n    border: 0\\n}\\n\\n.more_review button img{\\n    max-width: 2rem;\\n    max-height: 2rem;\\n    height: 100%;\\n}\\n\\n.like-button {\\n    border: none;\\n    background: none;\\n    cursor: pointer;\\n  }\\n\\n.like-button svg.heart {\\n    transition: fill 0.3s ease-in-out;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwGO,mCAAO,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAC/B,CAEA,yCAAa,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACpB,CAEA,yCAAa,CACT,UAAU,CAAE,IAChB,CAEA,mCAAO,CACH,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,KAAK,CACpB,YAAY,CAAE,KAAK,CACnB,UAAU,CAAE,KAChB,CAEA,kCAAM,CACF,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,KAAK,CAAC,CAClB,CAEA,mCAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,aAAa,CAAE,KAAK,CACpB,OAAO,CAAE,KAAK,CAAC,CAAC,CAChB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACX,CAEA,mCAAO,CACH,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,IACjB,CAEA,kCAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MACjB,CAEA,kCAAM,CACF,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,KAAK,CACnB,WAAW,CAAE,IACjB,CAEA,qCAAS,CACL,UAAU,CAAE,MAChB,CAEA,2CAAe,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB,CAEA,iCAAK,CACD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACjB,CAEA,oCAAQ,CACJ,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,MAChB,CAEA,kCAAM,CACF,aAAa,CAAE,KAAK,CACpB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IACf,CAEA,oCAAQ,CACJ,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,KACnB,CAEA,wCAAa,CACT,WAAW,CAAE,IACjB,CAEA,0BAAY,CAAC,oBAAM,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,CAAC;AACb,CAEA,0BAAY,CAAC,MAAM,CAAC,iBAAG,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IACZ,CAEA,wCAAa,CACT,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OACV,CAEF,0BAAY,CAAC,GAAG,oBAAO,CACnB,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,WACxB"}'
};
const Review = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { showMoreButton = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.showMoreButton === void 0 && $$bindings.showMoreButton && showMoreButton !== void 0) $$bindings.showMoreButton(showMoreButton);
  $$result.css.add(css);
  return `<section class="svelte-d1mgxb">${``} </section>`;
});

export { Review as R };
//# sourceMappingURL=Review-CcTWDzsC.js.map