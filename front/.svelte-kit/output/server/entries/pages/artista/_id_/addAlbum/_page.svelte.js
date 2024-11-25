import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
const css$1 = {
  code: "form.svelte-1v6ys91{display:flex;flex-direction:column;padding:1rem;border-radius:1rem;background-color:rgb(75, 75, 75)}.text-input.svelte-1v6ys91{width:100%;padding:1rem;margin:1rem 0;border:none;border-bottom:0.2rem solid #ccc;background:transparent;outline:none;transition:border-color 0.3s ease, box-shadow 0.3s ease}.text-input.svelte-1v6ys91:focus{border-bottom-color:white}label.svelte-1v6ys91{font-weight:bold;margin-top:1rem;display:block}h2.svelte-1v6ys91{margin-bottom:1rem}.wrapper.svelte-1v6ys91{display:flex;justify-content:center;margin-top:1rem}.submit.svelte-1v6ys91{width:50%;padding:.3rem .5rem;background-color:var(--elem-bg);color:white;border:none;border-radius:100vw;cursor:pointer;transition:background-color 0.3s ease, box-shadow 0.3s ease}.submit.svelte-1v6ys91:hover{background-color:rgb(68, 68, 68);box-shadow:0 0 .25rem .05rem rgb(92, 92, 92)}",
  map: '{"version":3,"file":"AddAlbum.svelte","sources":["AddAlbum.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { postAlbum } from \\"@src/api/APIAdapter\\";\\nimport { Album } from \\"@src/models/AlbumClass\\";\\nimport { User } from \\"@src/models/UserClass\\";\\nimport { onMount } from \\"svelte\\";\\nexport let artist = \\"\\";\\nlet title = \\"\\";\\nlet genre = \\"\\";\\nlet releaseDate = \\"\\";\\nlet coverUrl = \\"\\";\\nlet reviews = [];\\nlet message = \\"\\";\\nlet messageColor = \\"red\\";\\nlet token;\\nlet user;\\nonMount(() => {\\n  token = localStorage.getItem(\\"token\\");\\n  user = User.fromObject(JSON.parse(localStorage.getItem(\\"user\\") || \\"\\"));\\n});\\nasync function handleAddAlbum(event) {\\n  event.preventDefault();\\n  const album = new Album(\\n    \\"\\",\\n    title,\\n    artist,\\n    new Date(releaseDate),\\n    genre,\\n    reviews,\\n    coverUrl || \\"https://via.placeholder.com/150\\"\\n  );\\n  try {\\n    const success = await postAlbum(album, token ?? \\"\\", user?.admin_secret ?? \\"\\", user?.id ?? \\"\\");\\n    if (success) {\\n      messageColor = \\"green\\";\\n      message = \\"\\\\xC1lbum agregado correctamente\\";\\n      setTimeout(() => {\\n        window.location.href = \\"/\\";\\n      }, 1e3);\\n    } else {\\n      messageColor = \\"red\\";\\n      message = \\"Error interno del servidor, intenta de nuevo\\";\\n    }\\n  } catch (error) {\\n    console.error(\\"Error al agregar el \\\\xE1lbum:\\", error);\\n    message = \\"Ocurri\\\\xF3 un error durante el proceso\\";\\n  }\\n}\\n<\/script>\\n\\n<form on:submit={handleAddAlbum}>\\n    <h2>Agregar Álbum</h2>\\n  \\n    <label for=\\"title\\">Título:</label>\\n    <input type=\\"text\\" id=\\"title\\" bind:value={title} class=\\"text-input\\" required />\\n\\n    <label for=\\"genre\\">Género:</label>\\n    <input type=\\"text\\" id=\\"genre\\" bind:value={genre} class=\\"text-input\\" required />\\n\\n    <label for=\\"release-date\\">Fecha de Lanzamiento:</label>\\n    <input type=\\"date\\" id=\\"release-date\\" bind:value={releaseDate} class=\\"text-input\\" required />\\n\\n    <label for=\\"cover-url\\">URL de la Portada:</label>\\n    <input type=\\"text\\" id=\\"cover-url\\" bind:value={coverUrl} class=\\"text-input\\" />\\n\\n    {#if message}\\n        <p class=\\"{messageColor}\\">{message}</p>\\n    {/if}\\n  \\n    <div class=\\"wrapper\\">\\n        <input class=\\"submit\\" type=\\"submit\\" value=\\"Agregar Álbum\\" />\\n    </div>\\n</form>\\n\\n<style>form{\\n    display: flex;\\n    flex-direction: column;\\n    padding: 1rem;\\n    border-radius: 1rem;\\n    background-color: rgb(75, 75, 75);\\n}\\n\\n.text-input {\\n    width: 100%;\\n    padding: 1rem;\\n    margin: 1rem 0;\\n    border: none;\\n    border-bottom: 0.2rem solid #ccc;\\n    background: transparent;\\n    outline: none;\\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\\n}\\n\\n/* Focus effect: glowing bottom line */\\n\\n.text-input:focus {\\n    border-bottom-color: white; /* Adjust this for your glow color */\\n}\\n\\n/* Label styles for a cleaner look */\\n\\nlabel {\\n    font-weight: bold;\\n    margin-top: 1rem;\\n    display: block;\\n}\\n\\nh2{\\n    margin-bottom: 1rem;\\n}\\n\\n.wrapper{\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 1rem;\\n}\\n\\n.submit {\\n    width: 50%;\\n    padding: .3rem .5rem;\\n    background-color: var(--elem-bg); /* Default button color */\\n    color: white;\\n    border: none;\\n    border-radius: 100vw; /* Rounded corners */\\n    cursor: pointer;\\n    transition: background-color 0.3s ease, box-shadow 0.3s ease;\\n}\\n\\n/* Hover effect: darken and glow */\\n\\n.submit:hover {\\n    background-color: rgb(68, 68, 68); /* Darker color on hover */\\n    box-shadow: 0 0 .25rem .05rem rgb(92, 92, 92); /* Soft glowing effect */\\n}\\n</style>\\n"],"names":[],"mappings":"AAwEO,mBAAI,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CACpC,CAEA,0BAAY,CACR,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,MAAM,CAAC,KAAK,CAAC,IAAI,CAChC,UAAU,CAAE,WAAW,CACvB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,YAAY,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,IACxD,CAIA,0BAAW,MAAO,CACd,mBAAmB,CAAE,KACzB,CAIA,oBAAM,CACF,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,KACb,CAEA,iBAAE,CACE,aAAa,CAAE,IACnB,CAEA,uBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAChB,CAEA,sBAAQ,CACJ,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,gBAAgB,CAAE,IAAI,SAAS,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,IAAI,CAAC,IAC5D,CAIA,sBAAO,MAAO,CACV,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAChD"}'
};
const AddAlbum = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { artist = "" } = $$props;
  let title = "";
  let genre = "";
  let releaseDate = "";
  let coverUrl = "";
  if ($$props.artist === void 0 && $$bindings.artist && artist !== void 0) $$bindings.artist(artist);
  $$result.css.add(css$1);
  return `<form class="svelte-1v6ys91"><h2 class="svelte-1v6ys91" data-svelte-h="svelte-rbva3g">Agregar Álbum</h2> <label for="title" class="svelte-1v6ys91" data-svelte-h="svelte-m2l0d9">Título:</label> <input type="text" id="title" class="text-input svelte-1v6ys91" required${add_attribute("value", title, 0)}> <label for="genre" class="svelte-1v6ys91" data-svelte-h="svelte-1pr5u87">Género:</label> <input type="text" id="genre" class="text-input svelte-1v6ys91" required${add_attribute("value", genre, 0)}> <label for="release-date" class="svelte-1v6ys91" data-svelte-h="svelte-6ux9ya">Fecha de Lanzamiento:</label> <input type="date" id="release-date" class="text-input svelte-1v6ys91" required${add_attribute("value", releaseDate, 0)}> <label for="cover-url" class="svelte-1v6ys91" data-svelte-h="svelte-a0513r">URL de la Portada:</label> <input type="text" id="cover-url" class="text-input svelte-1v6ys91"${add_attribute("value", coverUrl, 0)}> ${``} <div class="wrapper svelte-1v6ys91" data-svelte-h="svelte-wv38xn"><input class="submit svelte-1v6ys91" type="submit" value="Agregar Álbum"></div> </form>`;
});
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');:root{--elem-bg:#5a5a5a;--light-elem-bg:#7a7a7a;--hover-buttong-bg:#6a6a6a;--page-bg:#3b3b3b;--font-color:#fff;--shadow-color:rgba(0, 0, 0, 0.3);--bad-rating-bg:#ff5353;--good-rating-bg:#98ff98;--regular-rating-bg:#ffff79;--fecha-color:rgb(134, 134, 134);--primero-color:rgb(229, 228, 226);--segundo-color:rgb(255,215,0);--tercero-color:rgb(192,192,192);--cuarto-color:rgb(205, 127, 50);--primero-size:3rem;--segundo-size:2.75rem;--tercero-size:2.5rem;--cuarto-size:2.25rem;--a-glow:rgba(255, 255, 255, 0.4);--form-review-bg:rgb(114, 114, 114);--form-review-field-bg:rgb(70, 70, 70);--form-submit-bg:rgb(97, 97, 97)}*{box-sizing:border-box;padding:0;margin:0}body{margin:0;padding:0;background-color:var(--page-bg);color:var(--font-color);font-family:"Fira Sans", sans-serif;font-weight:400;font-style:normal}a{text-decoration:none;cursor:pointer;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;transition:.25s}a:hover{text-shadow:0 0 8px var(--a-glow)}.good_rating{background-color:var(--good-rating-bg)}.bad_rating{background-color:var(--bad-rating-bg)}.regular_rating{background-color:var(--regular-rating-bg)}.hover-image{transition:transform 0.3s ease, z-index 0s;z-index:1;max-width:150px;max-height:150px;object-fit:cover;object-position:center}.hover-image:hover{transform:scale(1.075) translateZ(0);z-index:2}.section-body{display:flex;flex-direction:column;margin:3rem}.section-title{font-size:2rem;margin-bottom:1rem;border-bottom:1px solid var(--light-elem-bg);box-shadow:0 3px 2px -3px var(--light-elem-bg)}.red{color:var(--bad-rating-bg)}.green{color:var(--good-rating-bg)}.admin-button{display:inline-block;padding:0.75rem 1.5rem;font-size:1rem;font-weight:bold;text-align:center;text-transform:uppercase;color:#ffffff;background-color:#4CAF50;border:none;border-radius:0.5rem;cursor:pointer;transition:background-color 0.3s ease, transform 0.2s ease}.admin-button:hover{background-color:#45a049;transform:translateY(-0.125rem)}.admin-button:active{background-color:#3e8e41;transform:translateY(0.0625rem)}.admin-button:focus{outline:0.2rem solid rgba(72, 180, 97, 0.5)}.admin-button:disabled{background-color:#cccccc;color:#666666;cursor:not-allowed;transform:none}@media(max-width: 37.5rem){.admin-button{width:100%;padding:0.75rem;font-size:0.875rem}}.bg-red{background-color:var(--bad-rating-bg)}.bg-red:hover{background-color:red
}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import AddAlbum from '@src/components/addalbum/AddAlbum.svelte';\\n\\n    export let data\\n<\/script>\\n\\n<style>@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\n\\n:global(:root) {\\n    --elem-bg: #5a5a5a;\\n    --light-elem-bg: #7a7a7a;\\n    --hover-buttong-bg: #6a6a6a;\\n\\n    --page-bg: #3b3b3b;\\n\\n    --font-color: #fff;\\n    --shadow-color: rgba(0, 0, 0, 0.3);\\n\\n    --bad-rating-bg: #ff5353;\\n    --good-rating-bg: #98ff98;\\n    --regular-rating-bg: #ffff79;\\n\\n    --fecha-color: rgb(134, 134, 134);\\n\\n    --primero-color: rgb(229, 228, 226);\\n    --segundo-color: rgb(255,215,0);\\n    --tercero-color: rgb(192,192,192);\\n    --cuarto-color:  rgb(205, 127, 50);\\n    --primero-size: 3rem;\\n    --segundo-size: 2.75rem;\\n    --tercero-size: 2.5rem;\\n    --cuarto-size: 2.25rem;\\n\\n    --a-glow: rgba(255, 255, 255, 0.4);\\n\\n    --form-review-bg: rgb(114, 114, 114);\\n    --form-review-field-bg: rgb(70, 70, 70);\\n    --form-submit-bg: rgb(97, 97, 97);\\n}\\n\\n:global(*) {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:global(body){\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--page-bg);\\n    color: var(--font-color);\\n    font-family: \\"Fira Sans\\", sans-serif;\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n:global(a){\\n    text-decoration: none;\\n    cursor: pointer;\\n    color: inherit;\\n    font-family: inherit;\\n    font-size: inherit;\\n    font-weight: inherit;\\n    transition: .25s;\\n}\\n\\n:global(a:hover){\\n    text-shadow: 0 0 8px var(--a-glow);\\n}\\n\\n:global(.good_rating){\\n    background-color: var(--good-rating-bg);\\n}\\n\\n:global(.bad_rating){\\n    background-color: var(--bad-rating-bg);\\n}\\n\\n:global(.regular_rating){\\n    background-color: var(--regular-rating-bg);\\n}\\n\\n:global(.hover-image) {\\n    transition: transform 0.3s ease, z-index 0s; \\n    z-index: 1; \\n    max-width: 150px;\\n    max-height: 150px;\\n    object-fit: cover;\\n    object-position: center; \\n}\\n\\n:global(.hover-image:hover) {\\n    transform: scale(1.075) translateZ(0); \\n    z-index: 2; \\n}\\n\\n:global(.section-body) {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 3rem;\\n}\\n\\n:global(.section-title){\\n    font-size: 2rem;\\n    margin-bottom: 1rem;\\n    border-bottom: 1px solid var(--light-elem-bg);\\n    box-shadow: 0 3px 2px -3px var(--light-elem-bg);\\n}\\n\\n:global(.red){\\n    color: var(--bad-rating-bg);\\n}\\n\\n:global(.green){\\n    color: var(--good-rating-bg);\\n}\\n\\n/* Global Admin Button Styles */\\n\\n:global(.admin-button) {\\n    display: inline-block;\\n    padding: 0.75rem 1.5rem;          /* Comfortable padding (12px vertical, 24px horizontal) */\\n    font-size: 1rem;                  /* Base font size (16px) */\\n    font-weight: bold;                /* Make the text stand out */\\n    text-align: center;               /* Center-align text */\\n    text-transform: uppercase;        /* Capitalize letters for emphasis */\\n    color: #ffffff;                   /* White text color */\\n    background-color: #4CAF50;        /* Primary admin color (green) */\\n    border: none;                     /* Remove default border */\\n    border-radius: 0.5rem;            /* Rounded corners (8px) */\\n    cursor: pointer;                  /* Pointer cursor on hover */\\n    transition: background-color 0.3s ease, transform 0.2s ease;\\n}\\n\\n/* Hover and Active States */\\n\\n:global(.admin-button:hover) {\\n    background-color: #45a049;        /* Darker shade for hover */\\n    transform: translateY(-0.125rem);  /* Slight raise effect on hover */\\n}\\n\\n:global(.admin-button:active) {\\n    background-color: #3e8e41;        /* Even darker on active click */\\n    transform: translateY(0.0625rem);  /* Slight press effect */\\n}\\n\\n/* Focus State for Accessibility */\\n\\n:global(.admin-button:focus) {\\n    outline: 0.2rem solid rgba(72, 180, 97, 0.5); /* Green focus outline (3px) */\\n}\\n\\n/* Disabled State */\\n\\n:global(.admin-button:disabled) {\\n    background-color: #cccccc;        /* Gray color for disabled state */\\n    color: #666666;                   /* Darker text color */\\n    cursor: not-allowed;              /* Not-allowed cursor */\\n    transform: none;                  /* Remove hover effect */\\n}\\n\\n/* Responsive Adjustments */\\n\\n@media (max-width: 37.5rem) {   /* 600px in rem units */\\n    :global(.admin-button) {\\n        width: 100%;                  /* Full width on small screens */\\n        padding: 0.75rem;             /* Adjust padding */\\n        font-size: 0.875rem;          /* Slightly smaller text (14px) */\\n    }\\n}\\n\\n:global(.bg-red){\\n    background-color: var(--bad-rating-bg);\\n}\\n\\n:global(.bg-red:hover){\\n    background-color: red\\n}\\n</style>\\n\\n<AddAlbum artist={data.id}/>"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(AddAlbum, "AddAlbum").$$render($$result, { artist: data.id }, {}, {})}`;
});
export {
  Page as default
};
