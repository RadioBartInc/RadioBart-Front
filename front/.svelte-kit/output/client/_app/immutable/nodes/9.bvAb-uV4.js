import{s as P,n as F,r as D,h as B}from"../chunks/scheduler.Cz3TSd7V.js";import{S as H,i as O,e as d,s as w,c as h,d as S,A as E,h as C,g as y,o,j as T,k as f,B as I,z as k,b as j,f as J,l as R,m as V,n as G,p as K,t as Q,a as W,r as X}from"../chunks/index.DKOtY3uX.js";import{U as Y,l as Z,i as $}from"../chunks/APIAdapter.CWbTadu6.js";function M(i){let e,t,a;return{c(){e=d("p"),t=j(i[2]),this.h()},l(s){e=h(s,"P",{class:!0});var n=S(e);t=J(n,i[2]),n.forEach(y),this.h()},h(){o(e,"class",a=B(i[3])+" svelte-8dee0z")},m(s,n){T(s,e,n),f(e,t)},p(s,n){n&4&&R(t,s[2]),n&8&&a!==(a=B(s[3])+" svelte-8dee0z")&&o(e,"class",a)},d(s){s&&y(e)}}}function ee(i){let e,t,a="Login",s,n,g="Nombre de usuario:",_,c,z,m,L="Contraseña:",v,u,U,x,b,q='<input class="submit svelte-8dee0z" type="submit" value="Login"/>',N,A,l=i[2]&&M(i);return{c(){e=d("form"),t=d("h2"),t.textContent=a,s=w(),n=d("label"),n.textContent=g,_=w(),c=d("input"),z=w(),m=d("label"),m.textContent=L,v=w(),u=d("input"),U=w(),l&&l.c(),x=w(),b=d("div"),b.innerHTML=q,this.h()},l(p){e=h(p,"FORM",{class:!0});var r=S(e);t=h(r,"H2",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-bhb3ah"&&(t.textContent=a),s=C(r),n=h(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(n)!=="svelte-1bwnrqw"&&(n.textContent=g),_=C(r),c=h(r,"INPUT",{type:!0,id:!0,class:!0}),z=C(r),m=h(r,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(m)!=="svelte-1up99rm"&&(m.textContent=L),v=C(r),u=h(r,"INPUT",{type:!0,id:!0,class:!0}),U=C(r),l&&l.l(r),x=C(r),b=h(r,"DIV",{class:!0,"data-svelte-h":!0}),E(b)!=="svelte-y0a298"&&(b.innerHTML=q),r.forEach(y),this.h()},h(){o(t,"class","svelte-8dee0z"),o(n,"for","username"),o(n,"class","svelte-8dee0z"),o(c,"type","text"),o(c,"id","username"),o(c,"class","text-input svelte-8dee0z"),c.required=!0,o(m,"for","password"),o(m,"class","svelte-8dee0z"),o(u,"type","password"),o(u,"id","password"),o(u,"class","text-input svelte-8dee0z"),u.required=!0,o(b,"class","wrapper svelte-8dee0z"),o(e,"class","svelte-8dee0z")},m(p,r){T(p,e,r),f(e,t),f(e,s),f(e,n),f(e,_),f(e,c),I(c,i[0]),f(e,z),f(e,m),f(e,v),f(e,u),I(u,i[1]),f(e,U),l&&l.m(e,null),f(e,x),f(e,b),N||(A=[k(c,"input",i[5]),k(u,"input",i[6]),k(e,"submit",i[4])],N=!0)},p(p,[r]){r&1&&c.value!==p[0]&&I(c,p[0]),r&2&&u.value!==p[1]&&I(u,p[1]),p[2]?l?l.p(p,r):(l=M(p),l.c(),l.m(e,x)):l&&(l.d(1),l=null)},i:F,o:F,d(p){p&&y(e),l&&l.d(),N=!1,D(A)}}}function te(i,e,t){let a=null,s="",n="",g="",_="red";async function c(L){L.preventDefault();try{const v=new Y("",s,n,"https://via.placeholder.com/50"),u=await Z(v);if(!u){t(3,_="red"),t(2,g="Error en el inicio de sesión");return}a=await $(v.name),a&&(a.password=""),localStorage.setItem("token",u),localStorage.setItem("user",JSON.stringify(a)),t(3,_="green"),t(2,g="Inicio de sesión exitoso"),setTimeout(()=>{window.location.href="/"},1500)}catch(v){console.error("Error during login:",v),t(3,_="red"),t(2,g="Ocurrió un error durante el inicio de sesión")}}function z(){s=this.value,t(0,s)}function m(){n=this.value,t(1,n)}return[s,n,g,_,c,z,m]}class se extends H{constructor(e){super(),O(this,e,te,ee,P,{})}}function ne(i){let e,t,a;return t=new se({}),{c(){e=d("main"),V(t.$$.fragment),this.h()},l(s){e=h(s,"MAIN",{class:!0});var n=S(e);G(t.$$.fragment,n),n.forEach(y),this.h()},h(){o(e,"class","svelte-1re87rs")},m(s,n){T(s,e,n),K(t,e,null),a=!0},p:F,i(s){a||(Q(t.$$.fragment,s),a=!0)},o(s){W(t.$$.fragment,s),a=!1},d(s){s&&y(e),X(t)}}}class oe extends H{constructor(e){super(),O(this,e,null,ne,P,{})}}export{oe as component};
