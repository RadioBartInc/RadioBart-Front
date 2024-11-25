import{e as le}from"../chunks/index.CzR0xuCU.js";import{s as G,n as O,o as ae,d as y}from"../chunks/scheduler.Cz3TSd7V.js";import{S as V,i as J,e as b,c as p,d as E,g,j as I,s as N,b as R,v as $,h as S,f as B,o as d,k as _,l as q,A as L,z as re,u as ie,m as M,n as U,p as j,t as P,a as z,r as H}from"../chunks/index.DKOtY3uX.js";import{e as X,N as ne}from"../chunks/Navbar.DGiOEIBM.js";import{U as oe,d as se,y as ce,z as fe,B as ue,h as he}from"../chunks/APIAdapter.DEoGsArP.js";import{g as D}from"../chunks/misc.B4lJbiPP.js";import{g as me}from"../chunks/entry.XM5ONYRv.js";function de({params:l}){if(l.id)return{id:l.id};le(404,"Not found")}const ye=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));function Y(l){let a,e,t,s,c,r=l[0].name+"",m,i,f,k,v,w,n,o=l[2]&&l[2].role&&Z(l);return{c(){a=b("div"),e=b("img"),s=N(),c=b("h3"),m=R(r),i=N(),f=b("p"),k=R(l[1]),w=N(),o&&o.c(),n=$(),this.h()},l(u){a=p(u,"DIV",{class:!0});var h=E(a);e=p(h,"IMG",{src:!0,alt:!0,class:!0}),s=S(h),c=p(h,"H3",{class:!0});var T=E(c);m=B(T,r),T.forEach(g),i=S(h),f=p(h,"P",{class:!0});var A=E(f);k=B(A,l[1]),A.forEach(g),h.forEach(g),w=S(u),o&&o.l(u),n=$(),this.h()},h(){y(e.src,t=l[0].foto||"https://via.placeholder.com/150")||d(e,"src",t),d(e,"alt","artista_foto"),d(e,"class","artista_foto svelte-hekvib"),d(c,"class","artista_nombre svelte-hekvib"),d(f,"class",v="rating "+D(l[1])+" svelte-hekvib"),d(a,"class","artista svelte-hekvib")},m(u,h){I(u,a,h),_(a,e),_(a,s),_(a,c),_(c,m),_(a,i),_(a,f),_(f,k),I(u,w,h),o&&o.m(u,h),I(u,n,h)},p(u,h){h&1&&!y(e.src,t=u[0].foto||"https://via.placeholder.com/150")&&d(e,"src",t),h&1&&r!==(r=u[0].name+"")&&q(m,r),h&2&&q(k,u[1]),h&2&&v!==(v="rating "+D(u[1])+" svelte-hekvib")&&d(f,"class",v),u[2]&&u[2].role?o?o.p(u,h):(o=Z(u),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(u){u&&(g(a),g(w),g(n)),o&&o.d(u)}}}function Z(l){let a,e,t,s,c="Agregar Album",r,m,i,f,k="Borrar Artista",v,w;return{c(){a=b("ul"),e=b("li"),t=b("a"),s=b("button"),s.textContent=c,m=N(),i=b("li"),f=b("button"),f.textContent=k,this.h()},l(n){a=p(n,"UL",{id:!0,class:!0});var o=E(a);e=p(o,"LI",{});var u=E(e);t=p(u,"A",{href:!0});var h=E(t);s=p(h,"BUTTON",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-phpntt"&&(s.textContent=c),h.forEach(g),u.forEach(g),m=S(o),i=p(o,"LI",{});var T=E(i);f=p(T,"BUTTON",{class:!0,"data-svelte-h":!0}),L(f)!=="svelte-1f4qxai"&&(f.textContent=k),T.forEach(g),o.forEach(g),this.h()},h(){d(s,"class","admin-button"),d(t,"href",r=l[0].id+"/addAlbum"),d(f,"class","admin-button bg-red"),d(a,"id","lista_nav"),d(a,"class","svelte-hekvib")},m(n,o){I(n,a,o),_(a,e),_(e,t),_(t,s),_(a,m),_(a,i),_(i,f),v||(w=re(f,"click",l[3]),v=!0)},p(n,o){o&1&&r!==(r=n[0].id+"/addAlbum")&&d(t,"href",r)},d(n){n&&g(a),v=!1,w()}}}function _e(l){let a,e=l[0]&&Y(l);return{c(){a=b("section"),e&&e.c()},l(t){a=p(t,"SECTION",{});var s=E(a);e&&e.l(s),s.forEach(g)},m(t,s){I(t,a,s),e&&e.m(a,null)},p(t,[s]){t[0]?e?e.p(t,s):(e=Y(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&g(a),e&&e.d()}}}function ge(l,a,e){let{id:t}=a,s=null,c=0,r,m;ae(async()=>{try{if(r=localStorage.getItem("token"),r&&e(2,m=oe.fromObject(JSON.parse(localStorage.getItem("user")||""))),e(0,s=await se(t)),s){const f=await ce(s.id);e(1,c=f||0)}}catch(f){console.error("Error getting artist",f)}});async function i(){s&&await fe(s.id??"",r??""),me("/")}return l.$$set=f=>{"id"in f&&e(4,t=f.id)},[s,c,m,i,t]}class ve extends V{constructor(a){super(),J(this,a,ge,_e,G,{id:4})}}function x(l,a,e){const t=l.slice();return t[5]=a[e],t}function ee(l){let a,e=X(l[0]),t=[];for(let s=0;s<e.length;s+=1)t[s]=te(x(l,e,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();a=$()},l(s){for(let c=0;c<t.length;c+=1)t[c].l(s);a=$()},m(s,c){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,c);I(s,a,c)},p(s,c){if(c&3){e=X(s[0]);let r;for(r=0;r<e.length;r+=1){const m=x(s,e,r);t[r]?t[r].p(m,c):(t[r]=te(m),t[r].c(),t[r].m(a.parentNode,a))}for(;r<t.length;r+=1)t[r].d(1);t.length=e.length}},d(s){s&&g(a),ie(t,s)}}}function te(l){let a,e,t,s,c,r,m,i,f=l[5].title+"",k,v,w,n,o=l[1][l[5].id]+"",u,h,T;return{c(){a=b("div"),e=b("a"),t=b("img"),r=N(),m=b("h3"),i=b("a"),k=R(f),w=N(),n=b("p"),u=R(o),T=N(),this.h()},l(A){a=p(A,"DIV",{class:!0});var C=E(a);e=p(C,"A",{href:!0});var F=E(e);t=p(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(g),r=S(C),m=p(C,"H3",{class:!0});var K=E(m);i=p(K,"A",{href:!0});var Q=E(i);k=B(Q,f),Q.forEach(g),K.forEach(g),w=S(C),n=p(C,"P",{class:!0});var W=E(n);u=B(W,o),W.forEach(g),T=S(C),C.forEach(g),this.h()},h(){y(t.src,s=l[5].cover||"https://via.placeholder.com/150")||d(t,"src",s),d(t,"alt","album_cover"),d(t,"class","portada hover-image svelte-1i1twg"),d(e,"href",c=`/album/${l[5].id}`),d(i,"href",v=`/album/${l[5].id}`),d(m,"class","nombre_album svelte-1i1twg"),d(n,"class",h="rating "+D(l[1][l[5].id])+" svelte-1i1twg"),d(a,"class","album svelte-1i1twg")},m(A,C){I(A,a,C),_(a,e),_(e,t),_(a,r),_(a,m),_(m,i),_(i,k),_(a,w),_(a,n),_(n,u),_(a,T)},p(A,C){C&1&&!y(t.src,s=A[5].cover||"https://via.placeholder.com/150")&&d(t,"src",s),C&1&&c!==(c=`/album/${A[5].id}`)&&d(e,"href",c),C&1&&f!==(f=A[5].title+"")&&q(k,f),C&1&&v!==(v=`/album/${A[5].id}`)&&d(i,"href",v),C&3&&o!==(o=A[1][A[5].id]+"")&&q(u,o),C&3&&h!==(h="rating "+D(A[1][A[5].id])+" svelte-1i1twg")&&d(n,"class",h)},d(A){A&&g(a)}}}function be(l){let a,e=l[2]&&ee(l);return{c(){a=b("section"),e&&e.c(),this.h()},l(t){a=p(t,"SECTION",{class:!0});var s=E(a);e&&e.l(s),s.forEach(g),this.h()},h(){d(a,"class","svelte-1i1twg")},m(t,s){I(t,a,s),e&&e.m(a,null)},p(t,[s]){t[2]?e?e.p(t,s):(e=ee(t),e.c(),e.m(a,null)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&g(a),e&&e.d()}}}function pe(l,a,e){let{id:t}=a,s=null,{albums:c=[]}=a,{avgRatings:r={}}=a;ae(async()=>{try{if(console.log(s),e(2,s=await se(t)),s){e(0,c=await ue(s.albums)),c.sort((i,f)=>new Date(f.fecha).getTime()-new Date(i.fecha).getTime());for(const i of c)i.id in r||e(1,r[i.id]=await m(i.id),r)}}catch(i){console.error("Error getting artist",i)}});async function m(i){try{const f=await he(i);return f||0}catch(f){return console.error(`Error fetching average rating for album ${i}:`,f),0}}return l.$$set=i=>{"id"in i&&e(3,t=i.id),"albums"in i&&e(0,c=i.albums),"avgRatings"in i&&e(1,r=i.avgRatings)},[c,r,s,t]}class Ae extends V{constructor(a){super(),J(this,a,pe,be,G,{id:3,albums:0,avgRatings:1})}}function Ee(l){let a,e,t,s,c,r,m,i,f="Albumes",k,v,w;return a=new ne({}),c=new ve({props:{id:l[0].id}}),v=new Ae({props:{id:l[0].id}}),{c(){M(a.$$.fragment),e=N(),t=b("main"),s=b("section"),M(c.$$.fragment),r=N(),m=b("section"),i=b("h2"),i.textContent=f,k=N(),M(v.$$.fragment),this.h()},l(n){U(a.$$.fragment,n),e=S(n),t=p(n,"MAIN",{class:!0});var o=E(t);s=p(o,"SECTION",{class:!0});var u=E(s);U(c.$$.fragment,u),u.forEach(g),r=S(o),m=p(o,"SECTION",{class:!0});var h=E(m);i=p(h,"H2",{class:!0,"data-svelte-h":!0}),L(i)!=="svelte-sxqgn0"&&(i.textContent=f),k=S(h),U(v.$$.fragment,h),h.forEach(g),o.forEach(g),this.h()},h(){d(s,"class","section-body"),d(i,"class","section-title"),d(m,"class","section-body"),d(t,"class","svelte-7qonsc")},m(n,o){j(a,n,o),I(n,e,o),I(n,t,o),_(t,s),j(c,s,null),_(t,r),_(t,m),_(m,i),_(m,k),j(v,m,null),w=!0},p(n,[o]){const u={};o&1&&(u.id=n[0].id),c.$set(u);const h={};o&1&&(h.id=n[0].id),v.$set(h)},i(n){w||(P(a.$$.fragment,n),P(c.$$.fragment,n),P(v.$$.fragment,n),w=!0)},o(n){z(a.$$.fragment,n),z(c.$$.fragment,n),z(v.$$.fragment,n),w=!1},d(n){n&&(g(e),g(t)),H(a,n),H(c),H(v)}}}function ke(l,a,e){let{data:t}=a;return l.$$set=s=>{"data"in s&&e(0,t=s.data)},[t]}class Re extends V{constructor(a){super(),J(this,a,ke,Ee,G,{data:0})}}export{Re as component,ye as universal};