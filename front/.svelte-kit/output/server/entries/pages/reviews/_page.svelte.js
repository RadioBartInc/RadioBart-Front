import { c as create_ssr_component, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import { R as Review } from "../../../chunks/Review.js";
const css = {
  code: "section.svelte-5qmi3x{display:flex;flex-direction:column;align-items:center;padding:3rem}.review-divider.svelte-5qmi3x{margin:2rem 0;border-top:0.05rem solid var(--elem-bg);width:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { getAllReviews } from \\"@src/api/APIAdapter\\";\\nimport Navbar from \\"@src/components/navbar/Navbar.svelte\\";\\nimport Review from \\"@src/components/review/Review.svelte\\";\\nlet reviews = [];\\nasync function fetchAllReviews() {\\n  try {\\n    reviews = await getAllReviews();\\n  } catch (error) {\\n    console.error(\\"Failed to fetch all reviews:\\", error);\\n  }\\n}\\nonMount(fetchAllReviews);\\n<\/script>\\n\\n<Navbar/>\\n\\n<section>\\n    {#each reviews as review, i}\\n      <Review id={review.id} showMoreButton={true} />\\n  \\n      {#if i < reviews.length - 1}\\n        <div class=\\"review-divider\\"></div>\\n      {/if}\\n    {/each}\\n</section>\\n\\n<style>section{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding: 3rem;\\n}\\n\\n.review-divider {\\n    margin: 2rem 0;\\n    border-top: 0.05rem solid var(--elem-bg);\\n    width: 100%;\\n}\\n</style>\\n"],"names":[],"mappings":"AA2BO,qBAAO,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACb,CAEA,6BAAgB,CACZ,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,OAAO,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CACxC,KAAK,CAAE,IACX"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let reviews = [];
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section class="svelte-5qmi3x">${each(reviews, (review, i) => {
    return `${validate_component(Review, "Review").$$render($$result, { id: review.id, showMoreButton: true }, {}, {})} ${i < reviews.length - 1 ? `<div class="review-divider svelte-5qmi3x"></div>` : ``}`;
  })} </section>`;
});
export {
  Page as default
};
