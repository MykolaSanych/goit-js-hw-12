import{a as S,S as w,i as d}from"./assets/vendor-eded45c0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const $="43875376-ffcf8bec5b4985f5e1efc350d",p=async(s,o)=>await S.get(`https://pixabay.com/api/?key=${$}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`);function f(s){const o=document.querySelector(".list-foto"),t=s.reduce((r,n)=>{const{webformatURL:g,largeImageURL:h,tags:y,likes:L,views:b,comments:q,downloads:v}=n;return r+`<li class="gallery-item">
      <a class="gallery-link" href=${h} >
        <img
          class="gallery-image"
          src=${g}
         data-source=${h}
          alt=${y}
        />
      </a>
      <div>
      <p>Likes<br><span>${L}</span></p>
      <p>Views<br><span>${b}</span></p>
      <p>Coments<br><span>${q}</span></p>
      <p>Downloads<br><span>${v}</span></p>
      <div/>
    </li>`},"");o.insertAdjacentHTML("beforeend",t);const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"})}let m=new w(".list-foto a"),a=1;const E=document.querySelector(".input-search"),c=document.querySelector(".loader"),u=document.querySelector(".button-more");let l="";document.querySelector(".input").addEventListener("submit",I);u.addEventListener("click",M);function I(s){s.preventDefault(),u.classList.add("hiden");const o=document.querySelector(".list-foto");if(o.innerHTML="",l=E.value.trim(),l.length<3)return d.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});a=1,c.classList.remove("hiden"),p(l,a).then(t=>(t.status===200&&c.classList.add("hiden"),t.data)).then(t=>{const i=t.hits;i.length>0?(f(i),m.refresh(),u.classList.remove("hiden")):d.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{throw console.log(t),t})}function M(){c.classList.remove("hiden"),a++,p(l,a).then(s=>{const t=s.data.hits;return t.length>0&&(f(t),m.refresh(),c.classList.add("hiden")),s.data}).then(s=>{const o=Math.ceil(s.totalHits/15);a>o&&(d.info({message:"We're sorry, but you've reached the end of search results."}),u.classList.add("hiden"),c.classList.add("hiden"))})}
//# sourceMappingURL=commonHelpers.js.map
