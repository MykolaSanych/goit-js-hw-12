import{a as q,S as v,i as d}from"./assets/vendor-eded45c0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const w="43875376-ffcf8bec5b4985f5e1efc350d",p=async(r,s)=>await q.get(`https://pixabay.com/api/?key=${w}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${s}`);function m(r){const s=document.querySelector(".list-foto"),i=r.reduce((o,e)=>{const{webformatURL:t,largeImageURL:a,tags:h,likes:g,views:y,comments:L,downloads:b}=e;return o+`<li class="gallery-item">
      <a class="gallery-link" href=${a} >
        <img
          class="gallery-image"
          src=${t}
         data-source=${a}
          alt=${h}
        />
      </a>
      <div>
      <p>Likes<br><span>${g}</span></p>
      <p>Views<br><span>${y}</span></p>
      <p>Coments<br><span>${L}</span></p>
      <p>Downloads<br><span>${b}</span></p>
      <div/>
    </li>`},"");s.insertAdjacentHTML("beforeend",i)}let f=new v(".list-foto a"),n=1;const S=document.querySelector(".input-search"),c=document.querySelector(".loader"),l=document.querySelector(".button-more");let u="";const $=async r=>{try{r.preventDefault(),l.classList.add("hiden");const s=document.querySelector(".list-foto");if(s.innerHTML="",u=S.value.trim(),u.length<3)return d.error({position:"topRight",title:"Error",message:"Please enter your request."});n=1,c.classList.remove("hiden");const i=await p(u,n);i.status===200&&c.classList.add("hiden");const o=i.data,e=o.hits;e.length>0?(m(e),f.refresh(),l.classList.remove("hiden")):d.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const t=Math.ceil(o.totalHits/15);n===t&&(d.info({message:"We're sorry, but you've reached the end of search results."}),l.classList.add("hiden"),c.classList.add("hiden"))}catch(s){throw console.log(s),s}};document.querySelector(".input").addEventListener("submit",$);const M=async()=>{c.classList.remove("hiden"),n++;const r=await p(u,n),i=r.data.hits;if(i.length>0){m(i),f.refresh(),c.classList.add("hiden");const t=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:t,left:0,behavior:"smooth"})}const o=Math.ceil(r.data.totalHits/15);console.log(r),console.log(o),console.log(n),n===o&&(d.info({message:"We're sorry, but you've reached the end of search results."}),l.classList.add("hiden"),c.classList.add("hiden"))};l.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
