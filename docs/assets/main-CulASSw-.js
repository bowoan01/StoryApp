var Vt=e=>{throw TypeError(e)};var Tt=(e,t,n)=>t.has(e)||Vt("Cannot "+n);var o=(e,t,n)=>(Tt(e,t,"read from private field"),n?n.call(e):t.get(e)),d=(e,t,n)=>t.has(e)?Vt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),u=(e,t,n,i)=>(Tt(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),f=(e,t,n)=>(Tt(e,t,"access private method"),n);import{A as Ft,C as R,V as Te}from"./config-DVE-v8Dl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();try{self["workbox:window:7.2.0"]&&_()}catch{}function qt(e,t){return new Promise(function(n){var i=new MessageChannel;i.port1.onmessage=function(r){n(r.data)},e.postMessage(t,[i.port2])})}function Me(e){var t=function(n,i){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var a=r.call(n,i);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(e,"string");return typeof t=="symbol"?t:t+""}function Ie(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Me(i.key),i)}}function Dt(e,t){return Dt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Dt(e,t)}function zt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Ae(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(r,a){if(r){if(typeof r=="string")return zt(r,a);var s=Object.prototype.toString.call(r).slice(8,-1);return s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set"?Array.from(r):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?zt(r,a):void 0}}(e))||t){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}try{self["workbox:core:7.2.0"]&&_()}catch{}var Mt=function(){var e=this;this.promise=new Promise(function(t,n){e.resolve=t,e.reject=n})};function It(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var et=function(e,t){this.type=e,Object.assign(this,t)};function $(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Pe(){}var De={type:"SKIP_WAITING"};function Kt(e,t){return e&&e.then?e.then(Pe):Promise.resolve()}var Re=function(e){function t(l,m){var c,h;return m===void 0&&(m={}),(c=e.call(this)||this).nn={},c.tn=0,c.rn=new Mt,c.en=new Mt,c.on=new Mt,c.un=0,c.an=new Set,c.cn=function(){var g=c.fn,p=g.installing;c.tn>0||!It(p.scriptURL,c.sn.toString())||performance.now()>c.un+6e4?(c.vn=p,g.removeEventListener("updatefound",c.cn)):(c.hn=p,c.an.add(p),c.rn.resolve(p)),++c.tn,p.addEventListener("statechange",c.ln)},c.ln=function(g){var p=c.fn,v=g.target,V=v.state,Et=v===c.vn,Bt={sw:v,isExternal:Et,originalEvent:g};!Et&&c.mn&&(Bt.isUpdate=!0),c.dispatchEvent(new et(V,Bt)),V==="installed"?c.wn=self.setTimeout(function(){V==="installed"&&p.waiting===v&&c.dispatchEvent(new et("waiting",Bt))},200):V==="activating"&&(clearTimeout(c.wn),Et||c.en.resolve(v))},c.yn=function(g){var p=c.hn,v=p!==navigator.serviceWorker.controller;c.dispatchEvent(new et("controlling",{isExternal:v,originalEvent:g,sw:p,isUpdate:c.mn})),v||c.on.resolve(p)},c.gn=(h=function(g){var p=g.data,v=g.ports,V=g.source;return $(c.getSW(),function(){c.an.has(V)&&c.dispatchEvent(new et("message",{data:p,originalEvent:g,ports:v,sw:V}))})},function(){for(var g=[],p=0;p<arguments.length;p++)g[p]=arguments[p];try{return Promise.resolve(h.apply(this,g))}catch(v){return Promise.reject(v)}}),c.sn=l,c.nn=m,navigator.serviceWorker.addEventListener("message",c.gn),c}var n,i;i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,Dt(n,i);var r,a,s=t.prototype;return s.register=function(l){var m=(l===void 0?{}:l).immediate,c=m!==void 0&&m;try{var h=this;return $(function(g,p){var v=g();return v&&v.then?v.then(p):p(v)}(function(){if(!c&&document.readyState!=="complete")return Kt(new Promise(function(g){return window.addEventListener("load",g)}))},function(){return h.mn=!!navigator.serviceWorker.controller,h.dn=h.pn(),$(h.bn(),function(g){h.fn=g,h.dn&&(h.hn=h.dn,h.en.resolve(h.dn),h.on.resolve(h.dn),h.dn.addEventListener("statechange",h.ln,{once:!0}));var p=h.fn.waiting;return p&&It(p.scriptURL,h.sn.toString())&&(h.hn=p,Promise.resolve().then(function(){h.dispatchEvent(new et("waiting",{sw:p,wasWaitingBeforeRegister:!0}))}).then(function(){})),h.hn&&(h.rn.resolve(h.hn),h.an.add(h.hn)),h.fn.addEventListener("updatefound",h.cn),navigator.serviceWorker.addEventListener("controllerchange",h.yn),h.fn})}))}catch(g){return Promise.reject(g)}},s.update=function(){try{return this.fn?$(Kt(this.fn.update())):$()}catch(l){return Promise.reject(l)}},s.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},s.messageSW=function(l){try{return $(this.getSW(),function(m){return qt(m,l)})}catch(m){return Promise.reject(m)}},s.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&qt(this.fn.waiting,De)},s.pn=function(){var l=navigator.serviceWorker.controller;return l&&It(l.scriptURL,this.sn.toString())?l:void 0},s.bn=function(){try{var l=this;return $(function(m,c){try{var h=m()}catch(g){return c(g)}return h&&h.then?h.then(void 0,c):h}(function(){return $(navigator.serviceWorker.register(l.sn,l.nn),function(m){return l.un=performance.now(),m})},function(m){throw m}))}catch(m){return Promise.reject(m)}},r=t,(a=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Ie(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(n,i){this.jn(n).add(i)},t.removeEventListener=function(n,i){this.jn(n).delete(i)},t.dispatchEvent=function(n){n.target=this;for(var i,r=Ae(this.jn(n.type));!(i=r()).done;)(0,i.value)(n)},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},e}());function ee(e,t="en-US",n={}){return new Date(e).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric",...n})}function Oe({skipTransition:e=!1,updateDOM:t}){if(e||!document.startViewTransition){document.querySelector(".story-item__read-more").addEventListener("click",()=>{const r=document.querySelector("story-item__image");r.style.viewTransitionName="story-image",document.startViewTransition(()=>{t()}).finished.then(()=>{r.style.viewTransitionName=""})});const i=Promise.resolve(t()).then(()=>{const r=document.querySelector("story-item__image");r.style.viewTransitionName=""});return{ready:Promise.reject(Error("View transitions unsupported")),updateCallbackDone:i,finished:i}}return document.startViewTransition(t)}function je(e,t="",n=512){const i=atob(e),r=[];for(let a=0;a<i.length;a+=n){const s=i.slice(a,a+n),l=new Array(s.length);for(let c=0;c<s.length;c++)l[c]=s.charCodeAt(c);const m=new Uint8Array(l);r.push(m)}return new Blob(r,{type:t})}function Ne(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let a=0;a<i.length;a++)r[a]=i.charCodeAt(a);return r}function Ce(){return"serviceWorker"in navigator}async function $e(){if("serviceWorker"in navigator){const e=new Re("/sw.js");e.addEventListener("installed",t=>{t.isUpdate?console.log("Service worker updated"):console.log("Service worker installed for the first time")}),e.addEventListener("activated",t=>{t.isUpdate||console.log("Service worker activated")}),e.register()}}function ne(e){const t=e.split("/");return{resource:t[1]||null,id:t[2]||null}}function He(e){let t="";return e.resource&&(t=t.concat(`/${e.resource}`)),e.id&&(t=t.concat("/:id")),t||"/"}function ie(){return location.hash.replace("#","")||"/"}function oe(){const e=ie(),t=ne(e);return He(t)}function Ue(){const e=ie();return ne(e)}function P(){try{const e=localStorage.getItem(Ft);return e==="null"||e==="undefined"?null:e}catch(e){return console.error("getAccessToken: error:",e),null}}function xe(e){try{return localStorage.setItem(Ft,e),!0}catch(t){return console.error("putAccessToken: error:",t),!1}}function re(){try{return localStorage.removeItem(Ft),!0}catch(e){return console.error("getLogout: error:",e),!1}}const Fe=["/login","/register"];function Rt(e){const t=oe(),n=!!P();return Fe.includes(t)&&n?(location.hash="/",null):e}function Y(e){return!P()?(location.hash="/login",null):e}function ae(){re()}const We=Object.freeze(Object.defineProperty({__proto__:null,checkAuthenticatedRoute:Y,checkUnauthenticatedRouteOnly:Rt,getAccessToken:P,getLogout:ae,putAccessToken:xe,removeAccessToken:re},Symbol.toStringTag,{value:"Module"})),C={REGISTER:`${R.BASE_URL}/register`,LOGIN:`${R.BASE_URL}/login`,STORE_NEW_STORY:`${R.BASE_URL}/stories`,STORY_LIST:`${R.BASE_URL}/stories`,STORE_NEW_STORY_NO_AUTH:`${R.BASE_URL}/stories/guest`,STORY_DETAIL:e=>`${R.BASE_URL}/stories/${e}`,SUBSCRIBE:`${R.BASE_URL}/notifications/subscribe`,UNSUBSCRIBE:`${R.BASE_URL}/notifications/subscribe`,SEND_STORY_TO_ME:e=>`${R.BASE_URL}/stories/${e}`};async function Ge({name:e,email:t,password:n}){const i=JSON.stringify({name:e,email:t,password:n}),r=await fetch(C.REGISTER,{method:"POST",headers:{"Content-Type":"application/json"},body:i});return{...await r.json(),ok:r.ok}}async function Ve({email:e,password:t}){const n=JSON.stringify({email:e,password:t}),i=await fetch(C.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},body:n});return{...await i.json(),ok:i.ok}}async function qe({description:e,photo:t,lat:n,lon:i}){const r=P(),a=new FormData;a.set("description",e),a.set("photo",t),a.set("lat",n),a.set("lon",i);const s=await fetch(C.STORE_NEW_STORY,{method:"POST",headers:{Authorization:`Bearer ${r}`},body:a});return{...await s.json(),ok:s.ok}}async function ze({description:e,photo:t,lat:n,long:i}){const r=P(),a=new FormData;a.set("description",e),a.set("photo",t),a.set("lat",n),a.set("long",i);const s=await fetch(C.STORE_NEW_STORY_NO_AUTH,{method:"POST",headers:{Authorization:`Bearer ${r}`},body:a});return{...await s.json(),ok:s.ok}}async function Ke(){const e=P(),t=await fetch(C.STORY_LIST,{headers:{Authorization:`Bearer ${e}`}});return{...await t.json(),ok:t.ok}}async function Ye(e){const t=P(),n=await fetch(C.STORY_DETAIL(e),{headers:{Authorization:`Bearer ${t}`}});return{...await n.json(),ok:n.ok}}async function Wt({endpoint:e,keys:{p256dh:t,auth:n}}){const i=P(),r=JSON.stringify({endpoint:e,keys:{p256dh:t,auth:n}}),a=await fetch(C.SUBSCRIBE,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:r}),s=await a.json();return console.log(s),{...s,ok:a.ok}}async function se({endpoint:e}){const t=P(),n=JSON.stringify({endpoint:e}),i=await fetch(C.UNSUBSCRIBE,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:n});return{...await i.json(),ok:i.ok}}async function Je(e){const t=P(),n=await fetch(C.SEND_STORY_TO_ME(e),{method:"POST",headers:{Authorization:`Bearer ${t}`}});return{...await n.json(),ok:n.ok}}const yt=Object.freeze(Object.defineProperty({__proto__:null,getAllStories:Ke,getLogin:Ve,getRegistered:Ge,getStoryById:Ye,sendStoryToMeViaNotification:Je,storeNewStory:qe,storeNewStoryWithoutAuthentication:ze,subscribePushNotification:Wt,unsubscribePushNotification:se},Symbol.toStringTag,{value:"Module"}));var S,it;class Ze{constructor({view:t,model:n}){d(this,S);d(this,it);u(this,S,t),u(this,it,n)}async showStoriesListMap(t){o(this,S).showMapLoading();try{await o(this,S).initialMap(t)}catch(n){console.error("showStoriesListMap: error:",n)}finally{o(this,S).hideMapLoading()}}async initialGalleryAndMap(){o(this,S).showLoading();try{const t=await o(this,it).getAllStories();if(!t.ok){console.error("initialGalleryAndMap: response:",t),o(this,S).populateStoriesListError(t.message);return}await this.showStoriesListMap(t.listStory),o(this,S).populateStoriesList(t.message,t.listStory)}catch(t){console.error("initialGalleryAndMap: error:",t),o(this,S).populateStoriesListError(t.message)}finally{o(this,S).hideLoading()}}}S=new WeakMap,it=new WeakMap;function ce({id:e,name:t,description:n,photoUrl:i,lon:r,lat:a,createdAt:s}){return`
      <div tabindex="0" class="story-item" data-storyid="${e}">
        <img class="story-item__image" src="${i}" alt="${t}">
        <div class="story-item__body">
          <div class="story-item__main">
            <h2 id="story-title" class="story-item__title">${t}</h2>
            <div class="story-item__more-info">
              <div class="story-item__createdat">
                <i class="fas fa-calendar-alt"></i> ${ee(s,"id-ID")}
              </div>
              <div class="story-item__location">
                <i class="fas fa-map"></i> ${r}, ${a}
              </div>
            </div>
          </div>
          <div id="story-description" class="story-item__description">
            ${n}
          </div>
          <a class="btn story-item__read-more" href="#/stories/${e}">
            Selengkapnya <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `}function le(){return`
      <div id="stories-list-empty" class="stories-list__empty">
        <h2>Belum ada cerita yang anda simpan!</h2>
        <p>Cobalah untuk menyimpan satu cerita.</p>
      </div>
    `}function de(e){return`
      <div id="stories-list-error" class="stories-list__error">
        <h2>Terjadi kesalahan pengambilan daftar cerita</h2>
        <p>${e||"Gunakan jaringan lain atau laporkan error ini."}</p>
      </div>
    `}function tt(){return`
      <div class="loader loader-absolute"></div>
    `}function Qe(){return`
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-story-button" class="btn new-story-button" href="#/new">Bagikan Ceritamu <i class="fas fa-plus"></i></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
  `}function Xe(){return`
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Cerita Tersimpan</a></li>
  `}function tn(){return`
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `}function en(e=null,t=""){return e?`
    <img class="story-detail__image" src="${e}" alt="${t}">
  `:`
      <img class="story-detail__image" src="images/placeholder-image.jpg" alt="Placeholder Image">
    `}function nn(e){return`
    <div id="stories-detail-error" class="stories-detail__error">
      <h2>Terjadi kesalahan pengambilan detail cerita</h2>
      <p>${e||"Gunakan jaringan lain atau laporkan error ini."}</p>
    </div>
  `}function on({name:e,description:t,photoUrl:n,createdAt:i,lat:r,lon:a}){const s=ee(i,"id-ID"),l=en(n,e);return`
    <div class="story-detail__header">
      <h1 id="title" class="story-detail__title">${e}</h1>

      <div class="story-detail__more-info">
        <div class="story-detail__more-info__inline">
          <div id="createdat" class="story-detail__createdat" data-value="${s}"><i class="fas fa-calendar-alt"></i></div>
        </div>
        <div class="story-detail__more-info__inline">
          <div id="location-latitude" class="story-detail__location__latitude" data-value="${r}">Latitude:</div>
          <div id="location-longitude" class="story-detail__location__longitude" data-value="${a}">Longitude:</div>
        </div>
      </div>
    </div>

      <div class="story-detail__images__container">
        <div id="images" class="story-detail__images">${l}</div>
      </div>

    <div class="container">
      <div class="story-detail__body">
        <div class="story-detail__body__description__container">
          <h2 class="story-detail__description__title">Deskripsi Story</h2>
          <div id="description" class="story-detail__description__body">
            ${t}
          </div>
        </div>
        <div class="story-detail__body__map__container">
          <h2 class="story-detail__map__title">Peta Lokasi Story</h2>
          <div class="story-detail__map__container">
            <div id="map" class="story-detail__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </div>

        <hr>
  
        <div class="story-detail__body__actions__container">
          <h2>Aksi</h2>
          <div class="story-detail__actions__buttons">
            <div id="save-actions-container"></div>
          </div>
        </div>
      </div>
    </div>
  `}function rn(){return`
    <button id="subscribe-button" class="btn subscribe-button">
      Subscribe <i class="fas fa-bell"></i>
    </button>
  `}function an(){return`
    <button id="unsubscribe-button" class="btn unsubscribe-button">
      Unsubscribe <i class="fas fa-bell-slash"></i>
    </button>
  `}function sn(){return`
    <button id="story-detail-save" class="btn btn-transparent">
      Simpan cerita <i class="far fa-bookmark"></i>
    </button>
  `}function cn(){return`
    <button id="story-detail-remove" class="btn btn-transparent">
      Buang cerita <i class="fas fa-bookmark"></i>
    </button>
  `}var ot;class ln{constructor(){d(this,ot,null)}async render(){return`
      <section class="content-container">
        <h1 class="section-title">Bagikan Cerita kamu!</h1>
        <div class="stories-list__map__container">
          <div id="map" class="stories-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
        <br><br>
        <div class="stories-list__container">
          <div id="stories-list"></div>
          <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `}async afterRender(){u(this,ot,new Ze({view:this,model:yt})),await o(this,ot).initialGalleryAndMap()}initialMap(t){const n=L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",{maxZoom:20,attribution:'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),i=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"}),r=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),a=L.map("map",{center:["-2.5489","118.0149"],zoom:5,layers:[r]});var s={"Open Street Map":r,"Esri World":i,"Stadia Dark":n};L.control.layers(s).addTo(a),t.forEach(l=>{(l.lat!==null||l.lon!==null)&&L.marker([l.lat,l.lon],{draggable:!1}).addTo(a).bindPopup(`${l.name}'s story.`),console.log(l.lat)})}populateStoriesList(t,n){if(n.length<=0){this.populateStoriesListEmpty();return}const i=n.reduce((r,a)=>r.concat(ce({...a})),"");document.getElementById("stories-list").innerHTML=`
      <div class="stories-list">${i}</div>
    `}populateStoriesListEmpty(){document.getElementById("stories-list").innerHTML=le()}populateStoriesListError(t){document.getElementById("stories-list").innerHTML=de(t)}showMapLoading(){document.getElementById("map-loading-container").innerHTML=tt()}hideMapLoading(){document.getElementById("map-loading-container").innerHTML=""}showLoading(){document.getElementById("stories-list-loading-container").innerHTML=tt()}hideLoading(){document.getElementById("stories-list-loading-container").innerHTML=""}}ot=new WeakMap;class dn{async render(){return`
      <section class="container">
        <h1>About Page</h1>
      </section>
    `}async afterRender(){}}var O,rt,at;class un{constructor({view:t,model:n,authModel:i}){d(this,O);d(this,rt);d(this,at);u(this,O,t),u(this,rt,n),u(this,at,i)}async getLogin({email:t,password:n}){o(this,O).showSubmitLoadingButton();try{const i=await o(this,rt).getLogin({email:t,password:n});if(!i.ok){console.error("getLogin: response:",i),o(this,O).loginFailed(i.message);return}o(this,at).putAccessToken(i.loginResult.token),o(this,O).loginSuccessfully(i.message,i.loginResult)}catch(i){console.error("getLogin: error:",i),o(this,O).loginFailed(i.message)}finally{o(this,O).hideSubmitLoadingButton()}}}O=new WeakMap,rt=new WeakMap,at=new WeakMap;var st,_t,ue;class mn{constructor(){d(this,_t);d(this,st,null)}async render(){return`
      <section class="content-container">
        <h1>Login</h1>

        <form id="login-form" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="contoh: nama@email.com" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Masukkan password Anda" />
          </div>
          <div class="form-buttons login-form__form-buttons">
            <div id="submit-button-container">
              <button class="btn" type="submit">Masuk</button>
            </div>
            <p class="login-form__do-not-have-account">Belum punya akun? <a href="#/register">Daftar</a></p>
          </div>
        </form>

      </section>
    `}async afterRender(){u(this,st,new un({view:this,model:yt,authModel:We})),f(this,_t,ue).call(this)}loginSuccessfully(t){console.log(t),location.hash="/"}loginFailed(t){alert(t)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Masuk
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit">Masuk</button>
    `}}st=new WeakMap,_t=new WeakSet,ue=function(){document.getElementById("login-form").addEventListener("submit",async t=>{t.preventDefault();const n={email:document.getElementById("email").value,password:document.getElementById("password").value};await o(this,st).getLogin(n)})};var j,ct;class hn{constructor({view:t,model:n}){d(this,j);d(this,ct);u(this,j,t),u(this,ct,n)}async getRegistered({name:t,email:n,password:i}){o(this,j).showSubmitLoadingButton();try{const r=await o(this,ct).getRegistered({name:t,email:n,password:i});if(!r.ok){console.error("getRegistered: response:",r),o(this,j).registeredFailed(r.message);return}o(this,j).registeredSuccessfully(r.message,r.data)}catch(r){console.error("getRegistered: error:",r),o(this,j).registeredFailed(r.message)}finally{o(this,j).hideSubmitLoadingButton()}}}j=new WeakMap,ct=new WeakMap;var lt,Lt,me;class pn{constructor(){d(this,Lt);d(this,lt,null)}async render(){return`
      <section class="content-container">
        <h1>Daftar Akun</h1>

        <form id="register-form" class="auth-form">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" name="name" required placeholder="masukan nama anda" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required  placeholder="contoh: nama@email.com" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required  placeholder="Masukkan password Anda" />
          </div>
          <div class="form-buttons register-form__form-buttons">
            <div id="submit-button-container">
              <button class="btn" type="submit">Daftar akun</button>
            </div>
            <p class="register-form__already-have-account">Sudah punya akun? <a href="#/login">Masuk</a></p>
          </div>
        </form>

      </section>
    `}async afterRender(){u(this,lt,new hn({view:this,model:yt})),f(this,Lt,me).call(this)}registeredSuccessfully(t){console.log(t),location.hash="/login"}registeredFailed(t){alert(t)}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Daftar akun
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit">Daftar akun</button>
    `}}lt=new WeakMap,Lt=new WeakSet,me=function(){document.getElementById("register-form").addEventListener("submit",async t=>{t.preventDefault();const n={name:document.getElementById("name").value,email:document.getElementById("email").value,password:document.getElementById("password").value};await o(this,lt).getRegistered(n)})};var H,y,J,q,dt,Ot;class gn{constructor(t,{view:n,apiModel:i,dbModel:r}){d(this,dt);d(this,H);d(this,y);d(this,J);d(this,q);u(this,H,t),u(this,y,n),u(this,J,i),u(this,q,r)}async showStoryDetailMap(t,n,i){o(this,y).showMapLoading();try{await o(this,y).initialMap(t,n,i)}catch(r){console.error("showStoryDetailMap: error:",r)}finally{o(this,y).hideMapLoading()}}async showStoryDetail(){o(this,y).showStoryDetailLoading();try{const t=await o(this,J).getStoryById(o(this,H));if(!t.ok){console.error("showStoryDetailAndMap: response:",t),o(this,y).populateStoryDetailError(t.message);return}o(this,y).populateStoryDetailAndInitialMap(t.message,t.story)}catch(t){console.error("showStoryDetailAndMap: error:",t),o(this,y).populateStoryDetailError(t.message)}finally{o(this,y).hideStoryDetailLoading()}}async saveStory(){try{const t=await o(this,J).getStoryById(o(this,H));await o(this,q).putStory(t.story),o(this,y).saveToBookmarkSuccessfully("Success to save to bookmark")}catch(t){console.error("saveStory: error:",t),o(this,y).saveToBookmarkFailed(t.message)}}async removeStory(){try{await o(this,q).removeStory(o(this,H)),o(this,y).removeFromBookmarkSuccessfully("Success to remove from bookmark")}catch(t){console.error("removeStory: error:",t),o(this,y).removeFromBookmarkFailed(t.message)}}async showSaveButton(){if(console.log(await f(this,dt,Ot).call(this)),await f(this,dt,Ot).call(this)){o(this,y).renderRemoveButton();return}o(this,y).renderSaveButton()}}H=new WeakMap,y=new WeakMap,J=new WeakMap,q=new WeakMap,dt=new WeakSet,Ot=async function(){return!!await o(this,q).getStoryById(o(this,H))};const jt=(e,t)=>t.some(n=>e instanceof n);let Yt,Jt;function fn(){return Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yn(){return Jt||(Jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nt=new WeakMap,At=new WeakMap,kt=new WeakMap;function vn(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(K(e.result)),r()},s=()=>{i(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",s)});return kt.set(t,e),t}function bn(e){if(Nt.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),r()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});Nt.set(e,t)}let Ct={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Nt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return K(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function he(e){Ct=e(Ct)}function wn(e){return yn().includes(e)?function(...t){return e.apply($t(this),t),K(this.request)}:function(...t){return K(e.apply($t(this),t))}}function Sn(e){return typeof e=="function"?wn(e):(e instanceof IDBTransaction&&bn(e),jt(e,fn())?new Proxy(e,Ct):e)}function K(e){if(e instanceof IDBRequest)return vn(e);if(At.has(e))return At.get(e);const t=Sn(e);return t!==e&&(At.set(e,t),kt.set(t,e)),t}const $t=e=>kt.get(e);function _n(e,t,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const s=indexedDB.open(e,t),l=K(s);return i&&s.addEventListener("upgradeneeded",m=>{i(K(s.result),m.oldVersion,m.newVersion,K(s.transaction),m)}),n&&s.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),l.then(m=>{a&&m.addEventListener("close",()=>a()),r&&m.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ln=["get","getKey","getAll","getAllKeys","count"],kn=["put","add","delete","clear"],Pt=new Map;function Zt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pt.get(t))return Pt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=kn.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Ln.includes(n)))return;const a=async function(s,...l){const m=this.transaction(s,r?"readwrite":"readonly");let c=m.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&m.done]))[0]};return Pt.set(t,a),a}he(e=>({...e,get:(t,n,i)=>Zt(t,n)||e.get(t,n,i),has:(t,n)=>!!Zt(t,n)||e.has(t,n)}));const En=["continue","continuePrimaryKey","advance"],Qt={},Ht=new WeakMap,pe=new WeakMap,Bn={get(e,t){if(!En.includes(t))return e[t];let n=Qt[t];return n||(n=Qt[t]=function(...i){Ht.set(this,pe.get(this)[t](...i))}),n}};async function*Tn(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;const n=new Proxy(t,Bn);for(pe.set(n,t),kt.set(n,$t(t));t;)yield n,t=await(Ht.get(n)||t.continue()),Ht.delete(n)}function Xt(e,t){return t===Symbol.asyncIterator&&jt(e,[IDBIndex,IDBObjectStore,IDBCursor])||t==="iterate"&&jt(e,[IDBIndex,IDBObjectStore])}he(e=>({...e,get(t,n,i){return Xt(t,n)?Tn:e.get(t,n,i)},has(t,n){return Xt(t,n)||e.has(t,n)}}));const Mn="storyapp",In=1,nt="saved-stories",vt=_n(Mn,In,{upgrade:e=>{e.createObjectStore(nt,{keyPath:"id"})}}),ge={async putStory(e){if(!Object.hasOwn(e,"id"))throw new Error("`id` is required to save.");return(await vt).put(nt,e)},async getStoryById(e){if(!e)throw new Error("`id` is required.");return(await vt).get(nt,e)},async getAllStories(){return(await vt).getAll(nt)},async removeStory(e){return(await vt).delete(nt,e)}};var T;class An{constructor(){d(this,T,null)}async render(){return`
      <section class="content-container">
        <div class="story-detail__container">
          <div id="story-detail" class="story-detail"></div>
          <div id="story-detail-loading-container"></div>
        </div>
      </section>
    `}async afterRender(){u(this,T,new gn(Ue().id,{view:this,apiModel:yt,dbModel:ge})),o(this,T).showStoryDetail()}async populateStoryDetailAndInitialMap(t,n){document.getElementById("story-detail").innerHTML=on({name:n.name,description:n.description,photoUrl:n.photoUrl,createdAt:n.createdAt,lat:n.lat,lon:n.lon}),await o(this,T).showStoryDetailMap(n.lat,n.lon,n.name),o(this,T).showSaveButton()}populateStoryDetailError(t){document.getElementById("story-detail").innerHTML=nn(t)}async initialMap(t,n,i){const r=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),a=L.map("map",{center:[t,n],zoom:7,layers:[r]});L.marker([t,n],{draggable:!1}).addTo(a).bindPopup(`${i}'s story.`).openPopup()}showStoryDetailLoading(){document.getElementById("story-detail-loading-container").innerHTML=tt()}hideStoryDetailLoading(){document.getElementById("story-detail-loading-container").innerHTML=""}showMapLoading(){document.getElementById("map-loading-container").innerHTML=tt()}hideMapLoading(){document.getElementById("map-loading-container").innerHTML=""}renderSaveButton(){document.getElementById("save-actions-container").innerHTML=sn(),document.getElementById("story-detail-save").addEventListener("click",async()=>{await o(this,T).saveStory(),await o(this,T).showSaveButton()})}renderRemoveButton(){document.getElementById("save-actions-container").innerHTML=cn(),document.getElementById("story-detail-remove").addEventListener("click",async()=>{await o(this,T).removeStory(),await o(this,T).showSaveButton()})}saveToBookmarkSuccessfully(t){console.log(t)}saveToBookmarkFailed(t){alert(t)}removeFromBookmarkSuccessfully(t){console.log(t)}removeFromBookmarkFailed(t){alert(t)}}T=new WeakMap;var k,ut;class Pn{constructor({view:t,model:n}){d(this,k);d(this,ut);u(this,k,t),u(this,ut,n)}async showNewFormMap(){o(this,k).showMapLoading();try{await o(this,k).initialMap()}catch(t){console.error("showNewFormMap: error:",t)}finally{o(this,k).hideMapLoading()}}async postNewStory({description:t,photo:n,lat:i,lon:r}){o(this,k).showSubmitLoadingButton();try{const a={description:t,photo:n,lat:i,lon:r},s=await o(this,ut).storeNewStory(a);if(!s.ok){console.error("postNewStory: response:",s),o(this,k).storeFailed(s.message);return}o(this,k).storeSuccessfully(s.message,s.data)}catch(a){console.error("postNewStory: error:",a),o(this,k).storeFailed(a.message)}finally{o(this,k).hideSubmitLoadingButton()}}}k=new WeakMap,ut=new WeakMap;var U,z,x,F,E,W,w,mt,A,fe,ye,ve,Ut;const Gt=class Gt{constructor({video:t,cameraSelect:n,canvas:i,options:r={}}){d(this,A);d(this,U);d(this,z,!1);d(this,x,640);d(this,F,0);d(this,E);d(this,W);d(this,w);d(this,mt);u(this,E,t),u(this,W,n),u(this,w,i),f(this,A,fe).call(this)}static addNewStream(t){if(!Array.isArray(window.currentStreams)){window.currentStreams=[t];return}window.currentStreams=[...window.currentStreams,t]}static stopAllStreams(){if(!Array.isArray(window.currentStreams)){window.currentStreams=[];return}window.currentStreams.forEach(t=>{t.active&&t.getTracks().forEach(n=>n.stop())})}async launch(){u(this,U,await f(this,A,ve).call(this)),Gt.addNewStream(o(this,U)),o(this,E).srcObject=o(this,U),o(this,E).play(),f(this,A,Ut).call(this)}stop(){o(this,E)&&(o(this,E).srcObject=null,u(this,z,!1)),o(this,U)instanceof MediaStream&&o(this,U).getTracks().forEach(t=>{t.stop()}),f(this,A,Ut).call(this)}async takePicture(){if(!(o(this,x)&&o(this,F)))return null;const t=o(this,w).getContext("2d");return o(this,w).width=o(this,x),o(this,w).height=o(this,F),t.drawImage(o(this,E),0,0,o(this,x),o(this,F)),await new Promise(n=>{o(this,w).toBlob(i=>n(i))})}addCheeseButtonListener(t,n){u(this,mt,document.querySelector(t)),o(this,mt).onclick=n}};U=new WeakMap,z=new WeakMap,x=new WeakMap,F=new WeakMap,E=new WeakMap,W=new WeakMap,w=new WeakMap,mt=new WeakMap,A=new WeakSet,fe=function(){o(this,E).oncanplay=()=>{o(this,z)||(u(this,F,o(this,E).videoHeight*o(this,x)/o(this,E).videoWidth),o(this,w).setAttribute("width",o(this,x)),o(this,w).setAttribute("height",o(this,F)),u(this,z,!0))},o(this,W).onchange=async()=>{await this.stop(),await this.launch()}},ye=async function(t){try{if(!(t instanceof MediaStream))return Promise.reject(Error("MediaStream not found!"));const{deviceId:n}=t.getVideoTracks()[0].getSettings(),a=(await navigator.mediaDevices.enumerateDevices()).filter(s=>s.kind==="videoinput").reduce((s,l,m)=>s.concat(`
              <option
                value="${l.deviceId}"
                ${n===l.deviceId?"selected":""}
              >
                ${l.label||`Camera ${m+1}`}
              </option>
            `),"");o(this,W).innerHTML=a}catch(n){console.error("#populateDeviceList: error:",n)}},ve=async function(){try{const t=!o(this,z)&&!o(this,W).value?void 0:{exact:o(this,W).value},n=await navigator.mediaDevices.getUserMedia({video:{aspectRatio:4/3,deviceId:t}});return await f(this,A,ye).call(this,n),n}catch(t){return console.error("#getStream: error:",t),null}},Ut=function(){const t=o(this,w).getContext("2d");t.fillStyle="#AAAAAA",t.fillRect(0,0,o(this,w).width,o(this,w).height)};let St=Gt;var Z,D,N,ht,M,b,be,we,xt,bt,Se;class Dn{constructor(){d(this,b);d(this,Z);d(this,D);d(this,N);d(this,ht,!1);d(this,M,"")}async render(){return`
      <section class="content-container">
        <div class="new-story__header">
          <div class="container">
            <h1 class="new-story__header__title">Buat Story Baru</h1>
          </div>
        </div>
        <div class="new-form__container">
          <form id="new-form" class="new-form">
            <div class="form-control">
              <label for="description-input" class="new-form__description__title">Deskripsi</label>

              <div class="new-form__description__container">
                <textarea
                  id="description-input"
                  name="description"
                  placeholder="Masukkan keterangan lengkap story. Anda dapat menjelaskan bagaimana ceritanya, dimana, kapan, dll."
                ></textarea>
              </div>
            </div>
            <div class="form-control">
              <label for="documentations-input" class="new-form__documentations__title">Dokumentasi</label>
              <div id="documentations-more-info">Anda dapat menyertakan foto sebagai dokumentasi.</div>

              <div class="new-form__documentations__container">
                <div class="new-form__documentations__buttons">
                  <button id="documentations-input-button" class="btn btn-outline" type="button">Ambil Gambar</button>
                  <input
                    id="documentations-input"
                    class="new-form__documentations__input"
                    name="documentations"
                    type="file"
                    accept="image/*"
                    multiple
                    aria-multiline="true"
                    aria-describedby="documentations-more-info"
                  >
                  <button id="open-documentations-camera-button" class="btn btn-outline" type="button">
                    Buka Kamera
                  </button>
                </div>
                <div id="camera-container" class="new-form__camera__container">
                  <video id="camera-video" class="new-form__camera__video">
                    Video stream not available.
                  </video>

                  <canvas id="camera-canvas" class="new-form__camera__canvas"></canvas>
  
                  <div class="new-form__camera__tools">
                    <select id="camera-select"></select>
                    <div class="new-form__camera__tools_buttons">
                      <button id="camera-take-button" class="btn" type="button">
                        Ambil Gambar
                      </button>
                    </div>
                  </div>
                </div>
                <ul id="documentations-taken-list" class="new-form__documentations__outputs"></ul>
              </div>
            </div>
            <div class="form-control">
              <div class="new-form__location__title">Lokasi</div>

              <div class="new-form__location__container">
                <div class="new-form__location__map__container">
                  <div id="map" class="new-form__location__map"></div>
                  <div id="map-loading-container"></div>
                </div>
                <div class="new-form__location__lat-lng">
                  <input type="text" name="latitude">
                  <input type="text" name="longitude">
                </div>
              </div>
            </div>
            <div class="form-buttons">
              <span id="submit-button-container">
                <button class="btn" type="submit">Buat Cerita</button>
              </span>
              <a class="btn btn-outline" href="#/">Batal</a>
            </div>
          </form>
        </div>
      </section>
    `}async afterRender(){u(this,Z,new Pn({view:this,model:yt})),u(this,M,""),o(this,Z).showNewFormMap(),f(this,b,be).call(this)}async initialMap(){const t=document.querySelector("[name=latitude]"),n=document.querySelector("[name=longitude]");t.value="-2.5489",n.value="118.0149";const i=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),r=L.map("map",{center:["-2.5489","118.0149"],zoom:4,layers:[i]});let a=L.marker([t.value,n.value],{draggable:!0}).addTo(r);function s(l){const m=l.latlng.lat,c=l.latlng.lng;a?a.setLatLng(l.latlng):a=L.marker(l.latlng).addTo(r),t.value=m,n.value=c}r.on("click",s),a.on("dragend",function(){var l=a.getLatLng();a.setLatLng(l,{draggable:!0}),t.value=l.lat,n.value=l.lng})}storeSuccessfully(t){console.log(t),this.clearForm(),location.href="/"}storeFailed(t){alert(t)}clearForm(){o(this,D).reset()}showMapLoading(){document.getElementById("map-loading-container").innerHTML=tt()}hideMapLoading(){document.getElementById("map-loading-container").innerHTML=""}showSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Buat Cerita
      </button>
    `}hideSubmitLoadingButton(){document.getElementById("submit-button-container").innerHTML=`
      <button class="btn" type="submit">Buat Cerita</button>
    `}}Z=new WeakMap,D=new WeakMap,N=new WeakMap,ht=new WeakMap,M=new WeakMap,b=new WeakSet,be=function(){u(this,D,document.getElementById("new-form")),o(this,D).addEventListener("submit",async n=>{n.preventDefault();const i={description:o(this,D).elements.namedItem("description").value,photo:o(this,M).blob,lat:o(this,D).elements.namedItem("latitude").value,lon:o(this,D).elements.namedItem("longitude").value};await o(this,Z).postNewStory(i)}),document.getElementById("documentations-input").addEventListener("change",async n=>{const i=Object.values(n.target.files).map(async r=>await f(this,b,xt).call(this,r));await Promise.all(i),await f(this,b,bt).call(this)}),document.getElementById("documentations-input-button").addEventListener("click",()=>{o(this,D).elements.namedItem("documentations-input").click()});const t=document.getElementById("camera-container");document.getElementById("open-documentations-camera-button").addEventListener("click",async n=>{if(t.classList.toggle("open"),console.log("open camera"),u(this,ht,t.classList.contains("open")),o(this,ht)){n.currentTarget.textContent="Tutup Kamera",f(this,b,we).call(this),o(this,N).launch();return}n.currentTarget.textContent="Buka Kamera",o(this,N).stop()})},we=function(){o(this,N)||u(this,N,new St({video:document.getElementById("camera-video"),cameraSelect:document.getElementById("camera-select"),canvas:document.getElementById("camera-canvas")})),o(this,N).addCheeseButtonListener("#camera-take-button",async()=>{const t=await o(this,N).takePicture();await f(this,b,xt).call(this,t),await f(this,b,bt).call(this)})},xt=async function(t){let n=t;t instanceof String&&(n=await je(t,"image/png"));const i={id:`${Date.now()}-${Math.random().toString(36).substring(2,9)}`,blob:n};u(this,M,i)},bt=async function(){const t=URL.createObjectURL(o(this,M).blob),n=`
        <li class="new-form__documentations__outputs-item">
          <button type="button" data-deletepictureid="${o(this,M).id}" class="new-form__documentations__outputs-item__delete-btn">
            <img src="${t}" alt="Lorem ipsum">
          </button>
        </li>
      `;document.getElementById("documentations-taken-list").innerHTML=n,document.querySelectorAll("button[data-deletepictureid]").forEach(i=>i.addEventListener("click",r=>{const a=r.currentTarget.dataset.deletepictureid;f(this,b,Se).call(this,a)||console.log(`Picture with id ${a} was not found`),f(this,b,bt).call(this)}))},Se=function(t){const n=o(this,M).find(i=>i.id==t);return n?(u(this,M,o(this,M).filter(i=>i.id!=n.id)),n):null};var G,pt;class Rn{constructor({view:t,model:n}){d(this,G);d(this,pt);u(this,G,t),u(this,pt,n)}async initialGalleryAndMap(){o(this,G).showStoriesListLoading();try{const t=await o(this,pt).getAllStories();o(this,G).populateBookmarkedStories("Berhasil mendapatkan daftar cerita tersimpan.",t)}catch(t){console.error("initialGalleryAndMap: error:",t),o(this,G).populateBookmarkedStoriesError(t.message)}finally{o(this,G).hideStoriesListLoading()}}}G=new WeakMap,pt=new WeakMap;var gt;class On{constructor(){d(this,gt,null)}async render(){return`
 
      <section class="container">
        <h1 class="section-title">Daftar Cerita Tersimpan</h1>
 
        <div class="stories-list__container">
          <div id="stories-list"></div>
          <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `}async afterRender(){u(this,gt,new Rn({view:this,model:ge})),await o(this,gt).initialGalleryAndMap()}populateBookmarkedStories(t,n){if(n.length<=0){this.populateBookmarkedStoriesListEmpty();return}const i=n.reduce((r,a)=>r.concat(ce({...a})),"");document.getElementById("stories-list").innerHTML=`
      <div class="stories-list">${i}</div>
    `}populateBookmarkedStoriesListEmpty(){document.getElementById("stories-list").innerHTML=le()}populateBookmarkedStoriesError(t){document.getElementById("stories-list").innerHTML=de(t)}showStoriesListLoading(){document.getElementById("stories-list-loading-container").innerHTML=tt()}hideStoriesListLoading(){document.getElementById("stories-list-loading-container").innerHTML=""}}gt=new WeakMap;class jn{async render(){return`
      <section class="container">
        <h1 class="section-title">Halaman tidak ditemukan!</h1>
      </section>
    `}}const te={"/":()=>Y(new ln),"/about":()=>Y(new dn),"/new":()=>Y(new Dn),"/stories/:id":()=>Y(new An),"/login":()=>Rt(new mn),"/register":()=>Rt(new pn),"/bookmark":()=>Y(new On),"/not-found":()=>new jn};function Nn(){return"Notification"in window}function Cn(){return Notification.permission==="granted"}async function $n(){if(!Nn())return console.error("Notification API unsupported."),!1;if(Cn())return!0;const e=await Notification.requestPermission();return e==="denied"?(alert("Izin notifikasi ditolak."),!1):e==="default"?(alert("Izin notifikasi ditutup atau diabaikan."),!1):!0}async function _e(){return await(await navigator.serviceWorker.getRegistration()).pushManager.getSubscription()}async function Le(){return!!await _e()}function Hn(){return{userVisibleOnly:!0,applicationServerKey:Ne(Te)}}async function Un(){if(!await $n())return;if(await Le()){alert("Sudah berlangganan push notification.");return}console.log("Mulai berlangganan push notification...");const e="Langganan push notification gagal diaktifkan.",t="Langganan push notification berhasil diaktifkan.";let n;try{n=await(await navigator.serviceWorker.getRegistration()).pushManager.subscribe(Hn());const{endpoint:r,keys:a}=n.toJSON(),s=await Wt({endpoint:r,keys:a});if(console.log(s),!s.ok){console.error("subscribe: response:",s),alert(e),await n.unsubscribe();return}console.log({endpoint:r,keys:a}),alert(t)}catch(i){console.error("subscribe: error:",i),alert(e),await n.unsubscribe()}}async function xn(){const e="Langganan push notification gagal dinonaktifkan.",t="Langganan push notification berhasil dinonaktifkan.";try{const n=await _e();if(!n){alert("Tidak bisa memutus langganan push notification karena belum berlangganan sebelumnya.");return}const{endpoint:i,keys:r}=n.toJSON(),a=await se({endpoint:i});if(!a.ok){alert(e),console.error("unsubscribe: response:",a);return}if(!await n.unsubscribe()){alert(e),await Wt({endpoint:i,keys:r});return}alert(t)}catch(n){alert(e),console.error("unsubscribe: error:",n)}}var Q,X,I,ft,B,ke,Ee,Be,wt;class Fn{constructor({navigationDrawer:t,drawerButton:n,content:i,skipLinkButton:r}){d(this,B);d(this,Q,null);d(this,X,null);d(this,I,null);d(this,ft,null);u(this,Q,i),u(this,X,n),u(this,I,t),u(this,ft,r),f(this,B,ke).call(this)}async renderPage(){const t=oe();let n=te[t];n||(n=te["/not-found"]),console.log(n);const i=n(),r=Oe({updateDOM:async()=>{o(this,Q).innerHTML=await i.render(),await i.afterRender()}});r.ready.catch(console.error),r.updateCallbackDone.then(()=>{scrollTo({top:0,behavior:"instant"}),f(this,B,Be).call(this),Ce()&&f(this,B,wt).call(this)})}}Q=new WeakMap,X=new WeakMap,I=new WeakMap,ft=new WeakMap,B=new WeakSet,ke=function(){o(this,ft).addEventListener("click",()=>{console.log("clicked"),o(this,Q).focus()}),f(this,B,Ee).call(this)},Ee=function(){o(this,X).addEventListener("click",()=>{o(this,I).classList.toggle("open")}),document.body.addEventListener("click",t=>{const n=o(this,I).contains(t.target),i=o(this,X).contains(t.target);n||i||o(this,I).classList.remove("open"),o(this,I).querySelectorAll("a").forEach(r=>{r.contains(t.target)&&o(this,I).classList.remove("open")})})},Be=function(){const t=!!P(),n=o(this,I).children.namedItem("navlist-main"),i=o(this,I).children.namedItem("navlist");if(!t){n.innerHTML="",i.innerHTML=tn();return}n.innerHTML=Xe(),i.innerHTML=Qe(),document.getElementById("logout-button").addEventListener("click",a=>{a.preventDefault(),confirm("Apakah Anda yakin ingin keluar?")&&(ae(),location.hash="/login")})},wt=async function(){const t=document.getElementById("push-notification-tools");if(await Le()){t.innerHTML=an(),document.getElementById("unsubscribe-button").addEventListener("click",()=>{xn().finally(()=>{f(this,B,wt).call(this)})});return}t.innerHTML=rn(),document.getElementById("subscribe-button").addEventListener("click",()=>{Un().finally(()=>{f(this,B,wt).call(this)})})};document.addEventListener("DOMContentLoaded",async()=>{const e=new Fn({navigationDrawer:document.querySelector("#navigation-drawer"),drawerButton:document.querySelector("#drawer-button"),content:document.querySelector("#main-content"),skipLinkButton:document.getElementById("skip-link")});await e.renderPage(),await $e(),window.addEventListener("hashchange",async()=>{await e.renderPage(),St.stopAllStreams()})});
