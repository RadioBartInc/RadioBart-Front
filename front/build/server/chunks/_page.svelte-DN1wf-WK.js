import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute } from './ssr-DHpF3kMw.js';
import { N as Navbar } from './Navbar-CB5nCaSV.js';
import { R as Review } from './Review-Ca-cH2n2.js';

const css$1 = {
  code: ".info_usuario.svelte-1qalp6p{display:flex;align-items:center;flex-direction:row}.avatar.svelte-1qalp6p{aspect-ratio:1/1;width:100%;height:100%;max-width:3rem;max-height:3rem;border-radius:100vw;margin-right:1rem}.texto.svelte-1qalp6p{margin-top:.5rem;margin-left:.5rem}.comentario.svelte-1qalp6p{margin-bottom:1rem}form.svelte-1qalp6p{display:flex;flex-direction:column;background-color:var(--form-review-bg);border-radius:.5rem;padding:.5rem;margin-bottom:2rem}.comment-input.svelte-1qalp6p{border-radius:.25rem;-moz-appearance:textfield;-webkit-appearance:none;appearance:none;background-color:var(--form-review-field-bg);border:none;outline:none;color:var(--font-color);font-size:1rem;margin:0.5rem 0;padding:0.1rem;height:100%}.comment-input.svelte-1qalp6p::-webkit-inner-spin-button,.comment-input.svelte-1qalp6p::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.submit-btn.svelte-1qalp6p{-moz-appearance:textfield;-webkit-appearance:none;appearance:none;border:none;outline:none;color:var(--font-color);font-size:1rem;width:50%;margin:0 auto;background-color:var(--form-submit-bg);color:var(--font-color);cursor:pointer;transition:ease 0.3s;border-radius:100vw}.submit-btn.svelte-1qalp6p::-webkit-inner-spin-button,.submit-btn.svelte-1qalp6p::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.submit-btn.svelte-1qalp6p:hover{box-shadow:0 0 4px var(--form-review-field-bg);background-color:var(--form-review-field-bg)}",
  map: '{"version":3,"file":"ReviewComentarios.svelte","sources":["ReviewComentarios.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fetchComentariosById, getReviewById, getUserById, postComentario } from \\"@src/api/APIAdapter\\";\\nimport { MAX_COMMENT_LENGTH } from \\"@src/consts/limits\\";\\nimport { Comentario } from \\"@src/models/ComentarioClass\\";\\nimport { User } from \\"@src/models/UserClass\\";\\nimport { onMount } from \\"svelte\\";\\nexport let id;\\nlet comentarios = [];\\nlet review = null;\\nlet comentarioUser = {};\\nlet token;\\nlet user;\\nlet userId;\\nonMount(async () => {\\n  try {\\n    token = localStorage.getItem(\\"token\\");\\n    if (token) {\\n      const userObject = JSON.parse(localStorage.getItem(\\"user\\") || \\"\\");\\n      user = userObject ? User.fromObject(userObject) : null;\\n      if (user) {\\n        userId = user.id;\\n      }\\n    }\\n    review = await getReviewById(id);\\n    if (review) {\\n      comentarios = await fetchComentariosById(review.comentarios);\\n      if (comentarios) {\\n        for (const comentario of comentarios) {\\n          if (!comentarioUser[comentario.id]) {\\n            let user2 = await fetchUser(comentario.user);\\n            if (user2) {\\n              comentarioUser[comentario.id] = user2;\\n            }\\n          }\\n        }\\n      }\\n    }\\n  } catch (error) {\\n    console.error(\\"Failed to fetch review data:\\", error);\\n  }\\n});\\nasync function fetchUser(userId2) {\\n  try {\\n    return await getUserById(userId2);\\n  } catch (error) {\\n    console.error(`Error fetching user ${userId2}:`, error);\\n    return null;\\n  }\\n}\\nlet newComment = \\"\\";\\nlet submitedComment;\\nexport let messageColor = \\"red\\";\\nexport let message = \\"\\";\\nasync function submitComment() {\\n  try {\\n    newComment = newComment.trim();\\n    if (review && userId && token && (newComment.length > 0 || newComment.length < MAX_COMMENT_LENGTH)) {\\n      submitedComment = new Comentario(\\"\\", newComment, userId, new Date(Date.now()), review.id);\\n      newComment = \\"\\";\\n    } else {\\n      messageColor = \\"red\\";\\n      message = \\"Please enter a valid comment.\\";\\n      return;\\n    }\\n    const response = await postComentario(submitedComment, token);\\n    if (response) {\\n      messageColor = \\"green\\";\\n      message = \\"Comment submitted successfully!\\";\\n      newComment = \\"\\";\\n    }\\n  } catch (error) {\\n    console.error(\\"Error submitting review:\\", error);\\n    messageColor = \\"red\\";\\n    message = \\"An error occurred while submitting the review.\\";\\n  }\\n}\\n<\/script>\\n\\n<section>\\n    <form on:submit|preventDefault={submitComment}>\\n        {#if message}\\n          <p class=\\"submission-message\\" style=\\"color: {messageColor}\\">{message}</p>\\n        {/if}\\n\\t\\t<textarea bind:value={newComment} placeholder=\\"Write a comment...\\" rows=\\"3\\" class=\\"comment-input\\"></textarea>\\n\\t\\t<button type=\\"submit\\" class=\\"submit-btn\\">Submit Comment</button>\\n\\t</form>\\n    {#each comentarios as comentario}\\n        <div class=\\"comentario\\">\\n            <div class=\\"usuario\\">\\n                <div class=\\"info_usuario\\">\\n                    <a href=\\"/usuario/{comentarioUser[comentario.id]?.id}\\">\\n                        <img src={comentarioUser[comentario.id]?.profile_picture || \'https://via.placeholder.com/150\'} alt=\\"Avatar\\" class=\\"avatar\\">\\n                    </a>\\n                    <p><a href=\\"./{comentarioUser[comentario.id]?.id}\\">{comentarioUser[comentario.id]?.name}</a></p>\\n                </div>\\n            </div>\\n            <p class=\\"texto\\">{comentario.content}</p>\\n        </div>\\n    {/each}\\n</section>\\n<style>.info_usuario{\\n    display: flex;\\n    align-items: center;\\n    flex-direction: row;\\n}\\n\\n.avatar{\\n    aspect-ratio: 1/1;\\n    width: 100%;\\n    height: 100%;\\n    max-width: 3rem;\\n    max-height: 3rem;\\n    border-radius: 100vw;\\n    margin-right: 1rem;\\n}\\n\\n.texto{\\n    margin-top: .5rem;\\n    margin-left: .5rem;\\n}\\n\\n.comentario{\\n    margin-bottom: 1rem;\\n}\\n\\nform{\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--form-review-bg);\\n    border-radius: .5rem;\\n    padding: .5rem;\\n    margin-bottom: 2rem;\\n}\\n\\n.comment-input {\\n    border-radius: .25rem;\\n    -moz-appearance: textfield; \\n    -webkit-appearance: none;  \\n    appearance: none;         \\n    background-color: var(--form-review-field-bg); \\n    border: none;        \\n    outline: none;  \\n    color: var(--font-color);\\n    font-size: 1rem;\\n    margin: 0.5rem 0;\\n    padding: 0.1rem;\\n    height: 100%;\\n}\\n\\n.comment-input::-webkit-inner-spin-button,\\n.comment-input::-webkit-outer-spin-button {\\n    -webkit-appearance: none;  \\n    margin: 0;\\n}\\n\\n.submit-btn{\\n    -moz-appearance: textfield; \\n    -webkit-appearance: none;  \\n    appearance: none;          \\n    border: none;        \\n    outline: none;  \\n    color: var(--font-color);\\n    font-size: 1rem;\\n    width: 50%;\\n    margin: 0 auto;\\n    background-color: var(--form-submit-bg);\\n    color: var(--font-color);\\n    cursor: pointer;\\n    transition: ease 0.3s;\\n    border-radius: 100vw;\\n}\\n\\n.submit-btn::-webkit-inner-spin-button,\\n.submit-btn::-webkit-outer-spin-button {\\n    -webkit-appearance: none;  \\n    margin: 0;\\n}\\n\\n.submit-btn:hover{\\n    box-shadow: 0 0 4px var(--form-review-field-bg);\\n    background-color: var(--form-review-field-bg);\\n}\\n</style>"],"names":[],"mappings":"AAmGO,4BAAa,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,GACpB,CAEA,sBAAO,CACH,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,KAAK,CACpB,YAAY,CAAE,IAClB,CAEA,qBAAM,CACF,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,KACjB,CAEA,0BAAW,CACP,aAAa,CAAE,IACnB,CAEA,mBAAI,CACA,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,gBAAgB,CAAE,IAAI,gBAAgB,CAAC,CACvC,aAAa,CAAE,KAAK,CACpB,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,IACnB,CAEA,6BAAe,CACX,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,SAAS,CAC1B,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,IAAI,sBAAsB,CAAC,CAC7C,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,MAAM,CAAC,CAAC,CAChB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,IACZ,CAEA,6BAAc,2BAA2B,CACzC,6BAAc,2BAA4B,CACtC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACZ,CAEA,0BAAW,CACP,eAAe,CAAE,SAAS,CAC1B,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,gBAAgB,CAAE,IAAI,gBAAgB,CAAC,CACvC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,aAAa,CAAE,KACnB,CAEA,0BAAW,2BAA2B,CACtC,0BAAW,2BAA4B,CACnC,kBAAkB,CAAE,IAAI,CACxB,MAAM,CAAE,CACZ,CAEA,0BAAW,MAAM,CACb,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,sBAAsB,CAAC,CAC/C,gBAAgB,CAAE,IAAI,sBAAsB,CAChD"}'
};
const ReviewComentarios = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let comentarios = [];
  let comentarioUser = {};
  let { messageColor = "red" } = $$props;
  let { message = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.messageColor === void 0 && $$bindings.messageColor && messageColor !== void 0) $$bindings.messageColor(messageColor);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  $$result.css.add(css$1);
  return `<section><form class="svelte-1qalp6p">${message ? `<p class="submission-message" style="${"color: " + escape(messageColor, true)}">${escape(message)}</p>` : ``} <textarea placeholder="Write a comment..." rows="3" class="comment-input svelte-1qalp6p">${escape("")}</textarea> <button type="submit" class="submit-btn svelte-1qalp6p" data-svelte-h="svelte-1yb9p2g">Submit Comment</button></form> ${each(comentarios, (comentario) => {
    return `<div class="comentario svelte-1qalp6p"><div class="usuario"><div class="info_usuario svelte-1qalp6p"><a href="${"/usuario/" + escape(comentarioUser[comentario.id]?.id, true)}"><img${add_attribute("src", comentarioUser[comentario.id]?.profile_picture || "https://via.placeholder.com/150", 0)} alt="Avatar" class="avatar svelte-1qalp6p"></a> <p><a href="${"./" + escape(comentarioUser[comentario.id]?.id, true)}">${escape(comentarioUser[comentario.id]?.name)}</a></p> </div></div> <p class="texto svelte-1qalp6p">${escape(comentario.content)}</p> </div>`;
  })} </section>`;
});
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');:root{--elem-bg:#5a5a5a;--light-elem-bg:#7a7a7a;--hover-buttong-bg:#6a6a6a;--page-bg:#3b3b3b;--font-color:#fff;--shadow-color:rgba(0, 0, 0, 0.3);--bad-rating-bg:#ff5353;--good-rating-bg:#98ff98;--regular-rating-bg:#ffff79;--fecha-color:rgb(134, 134, 134);--primero-color:rgb(229, 228, 226);--segundo-color:rgb(255,215,0);--tercero-color:rgb(192,192,192);--cuarto-color:rgb(205, 127, 50);--primero-size:3rem;--segundo-size:2.75rem;--tercero-size:2.5rem;--cuarto-size:2.25rem;--a-glow:rgba(255, 255, 255, 0.4);--form-review-bg:rgb(114, 114, 114);--form-review-field-bg:rgb(70, 70, 70);--form-submit-bg:rgb(97, 97, 97)}*{box-sizing:border-box;padding:0;margin:0}body{margin:0;padding:0;background-color:var(--page-bg);color:var(--font-color);font-family:"Fira Sans", sans-serif;font-weight:400;font-style:normal}a{text-decoration:none;cursor:pointer;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;transition:.25s}a:hover{text-shadow:0 0 8px var(--a-glow)}.good_rating{background-color:var(--good-rating-bg)}.bad_rating{background-color:var(--bad-rating-bg)}.regular_rating{background-color:var(--regular-rating-bg)}.hover-image{transition:transform 0.3s ease, z-index 0s;z-index:1;max-width:150px;max-height:150px;object-fit:cover;object-position:center}.hover-image:hover{transform:scale(1.075) translateZ(0);z-index:2}.section-body{display:flex;flex-direction:column;margin:3rem}.section-title{font-size:2rem;margin-bottom:1rem;border-bottom:1px solid var(--light-elem-bg);box-shadow:0 3px 2px -3px var(--light-elem-bg)}.red{color:var(--bad-rating-bg)}.green{color:var(--good-rating-bg)}main.svelte-1go1nic{padding:3rem}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Navbar from '@src/components/navbar/Navbar.svelte';\\n\\timport Review from '@src/components/review/Review.svelte';\\n\\timport ReviewComentarios from '@src/components/reviewcomentarios/ReviewComentarios.svelte';\\n\\n    export let data\\n<\/script>\\n\\n<style>@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\n\\n:global(:root) {\\n    --elem-bg: #5a5a5a;\\n    --light-elem-bg: #7a7a7a;\\n    --hover-buttong-bg: #6a6a6a;\\n\\n    --page-bg: #3b3b3b;\\n\\n    --font-color: #fff;\\n    --shadow-color: rgba(0, 0, 0, 0.3);\\n\\n    --bad-rating-bg: #ff5353;\\n    --good-rating-bg: #98ff98;\\n    --regular-rating-bg: #ffff79;\\n\\n    --fecha-color: rgb(134, 134, 134);\\n\\n    --primero-color: rgb(229, 228, 226);\\n    --segundo-color: rgb(255,215,0);\\n    --tercero-color: rgb(192,192,192);\\n    --cuarto-color:  rgb(205, 127, 50);\\n    --primero-size: 3rem;\\n    --segundo-size: 2.75rem;\\n    --tercero-size: 2.5rem;\\n    --cuarto-size: 2.25rem;\\n\\n    --a-glow: rgba(255, 255, 255, 0.4);\\n\\n    --form-review-bg: rgb(114, 114, 114);\\n    --form-review-field-bg: rgb(70, 70, 70);\\n    --form-submit-bg: rgb(97, 97, 97);\\n}\\n\\n:global(*) {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:global(body){\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--page-bg);\\n    color: var(--font-color);\\n    font-family: \\"Fira Sans\\", sans-serif;\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n:global(a){\\n    text-decoration: none;\\n    cursor: pointer;\\n    color: inherit;\\n    font-family: inherit;\\n    font-size: inherit;\\n    font-weight: inherit;\\n    transition: .25s;\\n}\\n\\n:global(a:hover){\\n    text-shadow: 0 0 8px var(--a-glow);\\n}\\n\\n:global(.good_rating){\\n    background-color: var(--good-rating-bg);\\n}\\n\\n:global(.bad_rating){\\n    background-color: var(--bad-rating-bg);\\n}\\n\\n:global(.regular_rating){\\n    background-color: var(--regular-rating-bg);\\n}\\n\\n:global(.hover-image) {\\n    transition: transform 0.3s ease, z-index 0s; \\n    z-index: 1; \\n    max-width: 150px;\\n    max-height: 150px;\\n    object-fit: cover;\\n    object-position: center; \\n}\\n\\n:global(.hover-image:hover) {\\n    transform: scale(1.075) translateZ(0); \\n    z-index: 2; \\n}\\n\\n:global(.section-body) {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 3rem;\\n}\\n\\n:global(.section-title){\\n    font-size: 2rem;\\n    margin-bottom: 1rem;\\n    border-bottom: 1px solid var(--light-elem-bg);\\n    box-shadow: 0 3px 2px -3px var(--light-elem-bg);\\n}\\n\\n:global(.red){\\n    color: var(--bad-rating-bg);\\n}\\n\\n:global(.green){\\n    color: var(--good-rating-bg);\\n}\\n\\nmain{\\n    padding: 3rem;\\n}\\n</style>\\n\\n<Navbar/>\\n\\n<main>\\n    <section class=\\"section-body\\" id=\\"albums-recientes\\">\\n        <Review id={data.id}/>\\n    </section>\\n    <section class=\\"section-body\\" id=\\"albums-populares\\">\\n        <h2 class=\\"section-title\\">Comentarios</h2>\\n        <ReviewComentarios id={data.id}/>\\n    </section>\\n</main>"],"names":[],"mappings":"AAQO,QAAQ,4LAA4L,CAEnM,KAAO,CACX,SAAS,CAAE,OAAO,CAClB,eAAe,CAAE,OAAO,CACxB,kBAAkB,CAAE,OAAO,CAE3B,SAAS,CAAE,OAAO,CAElB,YAAY,CAAE,IAAI,CAClB,cAAc,CAAE,kBAAkB,CAElC,eAAe,CAAE,OAAO,CACxB,gBAAgB,CAAE,OAAO,CACzB,mBAAmB,CAAE,OAAO,CAE5B,aAAa,CAAE,kBAAkB,CAEjC,eAAe,CAAE,kBAAkB,CACnC,eAAe,CAAE,cAAc,CAC/B,eAAe,CAAE,gBAAgB,CACjC,cAAc,CAAG,iBAAiB,CAClC,cAAc,CAAE,IAAI,CACpB,cAAc,CAAE,OAAO,CACvB,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,OAAO,CAEtB,QAAQ,CAAE,wBAAwB,CAElC,gBAAgB,CAAE,kBAAkB,CACpC,sBAAsB,CAAE,eAAe,CACvC,gBAAgB,CAAE,eACtB,CAEQ,CAAG,CACP,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACZ,CAEQ,IAAK,CACT,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAChB,CAEQ,CAAE,CACN,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,OAAO,CACpB,UAAU,CAAE,IAChB,CAEQ,OAAQ,CACZ,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IAAI,QAAQ,CACrC,CAEQ,YAAa,CACjB,gBAAgB,CAAE,IAAI,gBAAgB,CAC1C,CAEQ,WAAY,CAChB,gBAAgB,CAAE,IAAI,eAAe,CACzC,CAEQ,eAAgB,CACpB,gBAAgB,CAAE,IAAI,mBAAmB,CAC7C,CAEQ,YAAc,CAClB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,EAAE,CAC3C,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,MACrB,CAEQ,kBAAoB,CACxB,SAAS,CAAE,MAAM,KAAK,CAAC,CAAC,WAAW,CAAC,CAAC,CACrC,OAAO,CAAE,CACb,CAEQ,aAAe,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACZ,CAEQ,cAAe,CACnB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,eAAe,CAAC,CAC7C,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,eAAe,CAClD,CAEQ,IAAK,CACT,KAAK,CAAE,IAAI,eAAe,CAC9B,CAEQ,MAAO,CACX,KAAK,CAAE,IAAI,gBAAgB,CAC/B,CAEA,mBAAI,CACA,OAAO,CAAE,IACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="svelte-1go1nic"><section class="section-body" id="albums-recientes">${validate_component(Review, "Review").$$render($$result, { id: data.id }, {}, {})}</section> <section class="section-body" id="albums-populares"><h2 class="section-title" data-svelte-h="svelte-2iqkaf">Comentarios</h2> ${validate_component(ReviewComentarios, "ReviewComentarios").$$render($$result, { id: data.id }, {}, {})}</section></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DN1wf-WK.js.map