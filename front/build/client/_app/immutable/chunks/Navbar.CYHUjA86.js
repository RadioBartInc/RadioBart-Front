import{s as q,n as U,o as j,d as O}from"./scheduler.Cz3TSd7V.js";import{S as B,i as R,e as u,s as I,c,d as A,A as M,h as C,g as h,o as d,j as x,k as i,z as $}from"./index.DKOtY3uX.js";import{U as y}from"./APIAdapter.CWbTadu6.js";function W(v){return(v==null?void 0:v.length)!==void 0?v:Array.from(v)}function G(v){let e,s='<a class="login svelte-pweovg" href="/login"><button class="svelte-pweovg">Login</button></a>',a,t,l='<a class="register svelte-pweovg" href="/register"><button class="svelte-pweovg">Register</button></a>';return{c(){e=u("li"),e.innerHTML=s,a=I(),t=u("li"),t.innerHTML=l},l(n){e=c(n,"LI",{"data-svelte-h":!0}),M(e)!=="svelte-1he1klb"&&(e.innerHTML=s),a=C(n),t=c(n,"LI",{"data-svelte-h":!0}),M(t)!=="svelte-wltqyd"&&(t.innerHTML=l)},m(n,m){x(n,e,m),x(n,a,m),x(n,t,m)},p:U,d(n){n&&(h(e),h(a),h(t))}}}function J(v){let e,s,a,t,l,n,m,b,o,S="Logout",H,_;return{c(){e=u("li"),s=u("a"),a=u("button"),t=u("img"),m=I(),b=u("li"),o=u("button"),o.textContent=S,this.h()},l(r){e=c(r,"LI",{});var f=A(e);s=c(f,"A",{href:!0});var w=A(s);a=c(w,"BUTTON",{class:!0});var E=A(a);t=c(E,"IMG",{class:!0,src:!0,alt:!0}),E.forEach(h),w.forEach(h),f.forEach(h),m=C(r),b=c(r,"LI",{});var k=A(b);o=c(k,"BUTTON",{class:!0,"data-svelte-h":!0}),M(o)!=="svelte-15ll9dz"&&(o.textContent=S),k.forEach(h),this.h()},h(){d(t,"class","avatar svelte-pweovg"),O(t.src,l=v[1].profile_picture||"https://via.placeholder.com/50")||d(t,"src",l),d(t,"alt","Profile"),d(a,"class","perfil svelte-pweovg"),d(s,"href",n="/usuario/"+v[1].id),d(o,"class","logout svelte-pweovg")},m(r,f){x(r,e,f),i(e,s),i(s,a),i(a,t),x(r,m,f),x(r,b,f),i(b,o),H||(_=$(o,"click",V),H=!0)},p(r,f){f&2&&!O(t.src,l=r[1].profile_picture||"https://via.placeholder.com/50")&&d(t,"src",l),f&2&&n!==(n="/usuario/"+r[1].id)&&d(s,"href",n)},d(r){r&&(h(e),h(m),h(b)),H=!1,_()}}}function P(v){let e,s,a='<button id="logo" class="svelte-pweovg"><img src="https://via.placeholder.com/50" alt="logo"/></button>',t,l,n,m='<a href="/albums"><button class="svelte-pweovg">Albums</button></a>',b,o,S='<a href="/artistas"><button class="svelte-pweovg">Artistas</button></a>',H,_,r='<a href="/reviews"><button class="svelte-pweovg">Reviews</button></a>',f,w,E='<a href="/users"><button class="svelte-pweovg">Usuarios</button></a>',k;function z(p,T){return p[0]&&p[1]?J:G}let N=z(v),g=N(v);return{c(){e=u("nav"),s=u("a"),s.innerHTML=a,t=I(),l=u("ul"),n=u("li"),n.innerHTML=m,b=I(),o=u("li"),o.innerHTML=S,H=I(),_=u("li"),_.innerHTML=r,f=I(),w=u("li"),w.innerHTML=E,k=I(),g.c(),this.h()},l(p){e=c(p,"NAV",{class:!0});var T=A(e);s=c(T,"A",{href:!0,"data-svelte-h":!0}),M(s)!=="svelte-615e9x"&&(s.innerHTML=a),t=C(T),l=c(T,"UL",{id:!0,class:!0});var L=A(l);n=c(L,"LI",{"data-svelte-h":!0}),M(n)!=="svelte-mkzpfz"&&(n.innerHTML=m),b=C(L),o=c(L,"LI",{"data-svelte-h":!0}),M(o)!=="svelte-hurhvb"&&(o.innerHTML=S),H=C(L),_=c(L,"LI",{"data-svelte-h":!0}),M(_)!=="svelte-of3c81"&&(_.innerHTML=r),f=C(L),w=c(L,"LI",{"data-svelte-h":!0}),M(w)!=="svelte-2lc4ae"&&(w.innerHTML=E),k=C(L),g.l(L),L.forEach(h),T.forEach(h),this.h()},h(){d(s,"href","/"),d(l,"id","lista_nav"),d(l,"class","svelte-pweovg"),d(e,"class","svelte-pweovg")},m(p,T){x(p,e,T),i(e,s),i(e,t),i(e,l),i(l,n),i(l,b),i(l,o),i(l,H),i(l,_),i(l,f),i(l,w),i(l,k),g.m(l,null)},p(p,[T]){N===(N=z(p))&&g?g.p(p,T):(g.d(1),g=N(p),g&&(g.c(),g.m(l,null)))},i:U,o:U,d(p){p&&h(e),g.d()}}}function V(){localStorage.removeItem("token"),localStorage.removeItem("user"),window.location.href="/"}function D(v,e,s){let a,t;return j(()=>{s(0,a=localStorage.getItem("token")),s(1,t=y.fromObject(JSON.parse(localStorage.getItem("user")||"")))}),[a,t]}class X extends B{constructor(e){super(),R(this,e,D,P,q,{})}}export{X as N,W as e};
