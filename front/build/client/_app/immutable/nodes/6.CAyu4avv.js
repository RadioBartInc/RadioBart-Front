import{e as re}from"../chunks/index.CzR0xuCU.js";import{s as G,n as O,o as ae,d as j}from"../chunks/scheduler.Cz3TSd7V.js";import{S as V,i as J,e as v,c as b,d as I,g,j as N,s as w,b as R,v as q,h as S,f as $,o as _,k as d,l as y,A as z,u as le,m as M,n as U,p as D,t as P,a as H,r as L}from"../chunks/index.DKOtY3uX.js";import{e as X,N as ie}from"../chunks/Navbar.CYHUjA86.js";import{U as ne,d as se,v as oe,w as fe,f as ce}from"../chunks/APIAdapter.CWbTadu6.js";import{g as B}from"../chunks/misc.B4lJbiPP.js";function ue({params:l}){if(l.id)return{id:l.id};re(404,"Not found")}const we=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function Y(l){let a,e,t,s,f,n=l[0].name+"",h,r,m,A,p,C,i,o=l[2]&&l[2].role&&Z(l);return{c(){a=v("div"),e=v("img"),s=w(),f=v("h3"),h=R(n),r=w(),m=v("p"),A=R(l[1]),C=w(),o&&o.c(),i=q(),this.h()},l(c){a=b(c,"DIV",{class:!0});var u=I(a);e=b(u,"IMG",{src:!0,alt:!0,class:!0}),s=S(u),f=b(u,"H3",{class:!0});var T=I(f);h=$(T,n),T.forEach(g),r=S(u),m=b(u,"P",{class:!0});var E=I(m);A=$(E,l[1]),E.forEach(g),u.forEach(g),C=S(c),o&&o.l(c),i=q(),this.h()},h(){j(e.src,t=l[0].foto||"https://via.placeholder.com/150")||_(e,"src",t),_(e,"alt","artista_foto"),_(e,"class","artista_foto svelte-qj1g6"),_(f,"class","artista_nombre svelte-qj1g6"),_(m,"class",p="rating "+B(l[1])+" svelte-qj1g6"),_(a,"class","artista svelte-qj1g6")},m(c,u){N(c,a,u),d(a,e),d(a,s),d(a,f),d(f,h),d(a,r),d(a,m),d(m,A),N(c,C,u),o&&o.m(c,u),N(c,i,u)},p(c,u){u&1&&!j(e.src,t=c[0].foto||"https://via.placeholder.com/150")&&_(e,"src",t),u&1&&n!==(n=c[0].name+"")&&y(h,n),u&2&&y(A,c[1]),u&2&&p!==(p="rating "+B(c[1])+" svelte-qj1g6")&&_(m,"class",p),c[2]&&c[2].role?o?o.p(c,u):(o=Z(c),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(c){c&&(g(a),g(C),g(i)),o&&o.d(c)}}}function Z(l){let a,e,t,s,f="Agregar Album",n,h,r,m,A,p="Borrar Arista",C;return{c(){a=v("ul"),e=v("li"),t=v("a"),s=v("button"),s.textContent=f,h=w(),r=v("li"),m=v("a"),A=v("button"),A.textContent=p,this.h()},l(i){a=b(i,"UL",{id:!0});var o=I(a);e=b(o,"LI",{});var c=I(e);t=b(c,"A",{href:!0});var u=I(t);s=b(u,"BUTTON",{"data-svelte-h":!0}),z(s)!=="svelte-1fzuexo"&&(s.textContent=f),u.forEach(g),c.forEach(g),h=S(o),r=b(o,"LI",{});var T=I(r);m=b(T,"A",{href:!0});var E=I(m);A=b(E,"BUTTON",{"data-svelte-h":!0}),z(A)!=="svelte-vahtii"&&(A.textContent=p),E.forEach(g),T.forEach(g),o.forEach(g),this.h()},h(){_(t,"href",n=l[0].id+"/addAlbum"),_(m,"href",C=l[0].id+"/borrarArtista"),_(a,"id","lista_nav")},m(i,o){N(i,a,o),d(a,e),d(e,t),d(t,s),d(a,h),d(a,r),d(r,m),d(m,A)},p(i,o){o&1&&n!==(n=i[0].id+"/addAlbum")&&_(t,"href",n),o&1&&C!==(C=i[0].id+"/borrarArtista")&&_(m,"href",C)},d(i){i&&g(a)}}}function he(l){let a,e=l[0]&&Y(l);return{c(){a=v("section"),e&&e.c()},l(t){a=b(t,"SECTION",{});var s=I(a);e&&e.l(s),s.forEach(g)},m(t,s){N(t,a,s),e&&e.m(a,null)},p(t,[s]){t[0]?e?e.p(t,s):(e=Y(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&g(a),e&&e.d()}}}function me(l,a,e){let{id:t}=a,s=null,f=0,n,h;return ae(async()=>{try{if(n=localStorage.getItem("token"),e(2,h=ne.fromObject(JSON.parse(localStorage.getItem("user")||""))),e(0,s=await se(t)),s){const r=await oe(s.id);e(1,f=r||0)}}catch(r){console.error("Error getting artist",r)}}),l.$$set=r=>{"id"in r&&e(3,t=r.id)},[s,f,h,t]}class _e extends V{constructor(a){super(),J(this,a,me,he,G,{id:3})}}function x(l,a,e){const t=l.slice();return t[5]=a[e],t}function ee(l){let a,e=X(l[0]),t=[];for(let s=0;s<e.length;s+=1)t[s]=te(x(l,e,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();a=q()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);a=q()},m(s,f){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(s,f);N(s,a,f)},p(s,f){if(f&3){e=X(s[0]);let n;for(n=0;n<e.length;n+=1){const h=x(s,e,n);t[n]?t[n].p(h,f):(t[n]=te(h),t[n].c(),t[n].m(a.parentNode,a))}for(;n<t.length;n+=1)t[n].d(1);t.length=e.length}},d(s){s&&g(a),le(t,s)}}}function te(l){let a,e,t,s,f,n,h,r,m=l[5].title+"",A,p,C,i,o=l[1][l[5].id]+"",c,u,T;return{c(){a=v("div"),e=v("a"),t=v("img"),n=w(),h=v("h3"),r=v("a"),A=R(m),C=w(),i=v("p"),c=R(o),T=w(),this.h()},l(E){a=b(E,"DIV",{class:!0});var k=I(a);e=b(k,"A",{href:!0});var F=I(e);t=b(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(g),n=S(k),h=b(k,"H3",{class:!0});var K=I(h);r=b(K,"A",{href:!0});var Q=I(r);A=$(Q,m),Q.forEach(g),K.forEach(g),C=S(k),i=b(k,"P",{class:!0});var W=I(i);c=$(W,o),W.forEach(g),T=S(k),k.forEach(g),this.h()},h(){j(t.src,s=l[5].cover||"https://via.placeholder.com/150")||_(t,"src",s),_(t,"alt","album_cover"),_(t,"class","portada hover-image"),_(e,"href",f=`/album/${l[5].id}`),_(r,"href",p=`/album/${l[5].id}`),_(h,"class","nombre_album svelte-8ui4dp"),_(i,"class",u="rating "+B(l[1][l[5].id])+" svelte-8ui4dp"),_(a,"class","album svelte-8ui4dp")},m(E,k){N(E,a,k),d(a,e),d(e,t),d(a,n),d(a,h),d(h,r),d(r,A),d(a,C),d(a,i),d(i,c),d(a,T)},p(E,k){k&1&&!j(t.src,s=E[5].cover||"https://via.placeholder.com/150")&&_(t,"src",s),k&1&&f!==(f=`/album/${E[5].id}`)&&_(e,"href",f),k&1&&m!==(m=E[5].title+"")&&y(A,m),k&1&&p!==(p=`/album/${E[5].id}`)&&_(r,"href",p),k&3&&o!==(o=E[1][E[5].id]+"")&&y(c,o),k&3&&u!==(u="rating "+B(E[1][E[5].id])+" svelte-8ui4dp")&&_(i,"class",u)},d(E){E&&g(a)}}}function de(l){let a,e=l[2]&&ee(l);return{c(){a=v("section"),e&&e.c(),this.h()},l(t){a=b(t,"SECTION",{class:!0});var s=I(a);e&&e.l(s),s.forEach(g),this.h()},h(){_(a,"class","svelte-8ui4dp")},m(t,s){N(t,a,s),e&&e.m(a,null)},p(t,[s]){t[2]?e?e.p(t,s):(e=ee(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&g(a),e&&e.d()}}}function ge(l,a,e){let{id:t}=a,s=null,{albums:f=[]}=a,{avgRatings:n={}}=a;ae(async()=>{try{if(console.log(s),e(2,s=await se(t)),s){e(0,f=await fe(s.albums)),f.sort((r,m)=>new Date(m.fecha).getTime()-new Date(r.fecha).getTime());for(const r of f)r.id in n||e(1,n[r.id]=await h(r.id),n)}}catch(r){console.error("Error getting artist",r)}});async function h(r){try{const m=await ce(r);return m||0}catch(m){return console.error(`Error fetching average rating for album ${r}:`,m),0}}return l.$$set=r=>{"id"in r&&e(3,t=r.id),"albums"in r&&e(0,f=r.albums),"avgRatings"in r&&e(1,n=r.avgRatings)},[f,n,s,t]}class ve extends V{constructor(a){super(),J(this,a,ge,de,G,{id:3,albums:0,avgRatings:1})}}function be(l){let a,e,t,s,f,n,h,r,m="Albumes",A,p,C;return a=new ie({}),f=new _e({props:{id:l[0].id}}),p=new ve({props:{id:l[0].id}}),{c(){M(a.$$.fragment),e=w(),t=v("main"),s=v("section"),M(f.$$.fragment),n=w(),h=v("section"),r=v("h2"),r.textContent=m,A=w(),M(p.$$.fragment),this.h()},l(i){U(a.$$.fragment,i),e=S(i),t=b(i,"MAIN",{class:!0});var o=I(t);s=b(o,"SECTION",{class:!0});var c=I(s);U(f.$$.fragment,c),c.forEach(g),n=S(o),h=b(o,"SECTION",{class:!0});var u=I(h);r=b(u,"H2",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-sxqgn0"&&(r.textContent=m),A=S(u),U(p.$$.fragment,u),u.forEach(g),o.forEach(g),this.h()},h(){_(s,"class","section-body"),_(r,"class","section-title"),_(h,"class","section-body"),_(t,"class","svelte-1go1nic")},m(i,o){D(a,i,o),N(i,e,o),N(i,t,o),d(t,s),D(f,s,null),d(t,n),d(t,h),d(h,r),d(h,A),D(p,h,null),C=!0},p(i,[o]){const c={};o&1&&(c.id=i[0].id),f.$set(c);const u={};o&1&&(u.id=i[0].id),p.$set(u)},i(i){C||(P(a.$$.fragment,i),P(f.$$.fragment,i),P(p.$$.fragment,i),C=!0)},o(i){H(a.$$.fragment,i),H(f.$$.fragment,i),H(p.$$.fragment,i),C=!1},d(i){i&&(g(e),g(t)),L(a,i),L(f),L(p)}}}function pe(l,a,e){let{data:t}=a;return l.$$set=s=>{"data"in s&&e(0,t=s.data)},[t]}class Se extends V{constructor(a){super(),J(this,a,pe,be,G,{data:0})}}export{Se as component,we as universal};