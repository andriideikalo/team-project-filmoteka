var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("lhLDm");var r=o("96LRb"),i=o("lhLDm"),a=o("2QMTS");const s=new(0,i.default),c={mediaType:"movie",lang:"en-US",page:s.page,include_adult:!1};r.refs.form.addEventListener("submit",(function(e){if(e.preventDefault(),s.actualQuery=e.currentTarget.elements.filmname.value,!s.actualQuery)return r.refs.formNotification.textContent="The text field is empty. Please type something into it and retry.",void setTimeout((()=>r.refs.formNotification.textContent=""),3e3);s.fetchWithSearchFilmData(c).then((e=>{if(!e.data.results.length)return r.refs.formNotification.textContent="Search result not successful. Enter the correct movie name and",void setTimeout((()=>r.refs.formNotification.textContent=""),3e3);(0,a.creatCards)(e.data.results)}))}));a=o("2QMTS");(r=o("96LRb")).refs.changeColor.addEventListener("click",(function(){document.body.classList.toggle("dark")})),o("8DW4i");i=o("lhLDm"),r=o("96LRb");var d=o("8DW4i");d=o("8DW4i");window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(u(),modal.classList.remove("visiable"),modal.removeEventListener("click",u),window.removeEventListener("keydown",e))}));const l=new(0,i.default);async function u(e){e.target!==r.refs.modalCloseBtn&&e.target!==r.refs.backdrop&&27!==e.keyCode||(document.body.classList.remove("no-scroll"),r.refs.backdrop.classList.add("is-hidden")),r.refs.backdrop.removeEventListener("click",u),window.removeEventListener("keydown",u)}r.refs.gallery.addEventListener("click",(async function(e){if(!e.target.classList.contains("card-image"))return;r.refs.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),r.refs.modalContent.innerHTML="";const t=e.target.dataset.id;(0,d.checkWatchedLs)(t),(0,d.checkQueLs)(t),l.getCurrentFilm({id:t}).then((e=>(0,d.createMarkup)(e.data))).catch((e=>console.log(e))),r.refs.backdrop.addEventListener("click",u),window.addEventListener("keydown",u)})),r.refs.modalCloseBtn.addEventListener("click",u),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(console.log("Escape"),document.body.classList.remove("no-scroll"),r.refs.backdrop.classList.add("is-hidden"))}));const f=document.querySelector(".footer__backdrop");f.addEventListener("click",(function(e){e.currentTarget===e.target&&(console.log("Backdrop"),document.body.classList.remove("no-scroll"),r.refs.backdrop.classList.add("is-hidden"))})),console.log(f),o("l3Yx2");r=o("96LRb");const m=new(0,(i=o("lhLDm")).default);let L=0,v=[],y=[];document.querySelector(".modal__trailer-btn");const p=document.querySelector(".closebtn"),g=document.querySelector("#overlay-video"),w=document.querySelector("#overlay-content");r.refs.gallery.addEventListener("click",(function(e){L=Number(e.target.dataset.id)})),r.refs.backdrop.addEventListener("click",(function(e){"▶"===e.target.innerText&&(y=[],m.fetchTrailer(L).then((e=>{v=e.data.results,v.length?(console.log(v),g.style.width="100%",document.body.classList.add("no-scroll"),v.forEach((e=>{let{key:t,site:n,name:o,type:r}=e;"YouTube"===n&&"Trailer"===r&&y.push(`\n                    <iframe src="https://www.youtube.com/embed/${t}" \n                    title="${o}" frameborder="0" allow="accelerometer; autoplay; \n                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                    `)})),w.innerHTML=y.join("")):alert("No found trailers")})))})),p.addEventListener("click",(function(){g.style.width="0%",document.body.classList.remove("no-scroll"),w.innerHTML=0})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(e.preventDefault(),g.style.width="0%",document.body.classList.remove("no-scroll"),w.innerHTML=0)}));document.querySelector(".overlay__backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&(e.preventDefault(),document.body.classList.remove("no-scroll"),g.style.width="0%",w.innerHTML=0)}));i=o("lhLDm"),r=o("96LRb"),a=o("2QMTS");const h=new(0,i.default);let b=1;const k={mediaType:"movie",timeWindow:"week"};r.refs.paginationListItemPrev.addEventListener("click",(function(){if(1===b)return;r.refs.gallery.innerHTML="",b-=1,h.actualPage=b,r.refs.paginationListItemPage.innerHTML=b,h.fetchWithAllFilmsData(k).then((e=>(0,a.creatCards)(e.data.results)))})),r.refs.paginationListItemNext.addEventListener("click",(function(){r.refs.gallery.innerHTML="",b+=1,h.actualPage=b,r.refs.paginationListItemPage.innerHTML=b,h.fetchWithAllFilmsData(k).then((e=>(0,a.creatCards)(e.data.results)))})),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelector(".btn-goup");console.log("btn on"),window.onscroll=function(){window.pageYOffset>580?e.classList.remove("is-hidden"):e.classList.add("is-hidden")},e.addEventListener("click",(function(){console.log("это я"),window.scrollBy({top:-window.pageYOffset,behavior:"smooth"})}))})),(0,a.onCreat)();
//# sourceMappingURL=index.ac91a1b6.js.map
