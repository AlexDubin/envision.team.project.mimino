(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();var l=document.getElementById("first-text");setTimeout(function(){l.classList.add("innerAnimated")});function a(){for(var n=document.querySelectorAll(".text--turning, .fadeInLeft, .fadeInRight"),t=0;t<n.length;t++){var r=window.innerHeight,i=n[t].getBoundingClientRect().top,e=150;i<r-e&&n[t].classList.add("innerAnimated")}}window.addEventListener("scroll",a);Splitting();new Swiper(".swiper",{direction:"horizontal",slidesPerView:1.2,inverse:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:2,spaceBetween:40}}});new Swiper(".swiper-triple",{direction:"horizontal",slidesPerView:1.3,inverse:!0,loop:!0,navigation:{nextEl:".swiper-triple-button-next",prevEl:".swiper-triple-button-prev"},breakpoints:{1024:{slidesPerView:3,spaceBetweenSlides:40}}});new Swiper(".swiper-singl",{direction:"horizontal",slidesPerView:1,inverse:!0,loop:!0,navigation:{nextEl:".swiper-singl-button-next",prevEl:".swiper-singl-button-prev"},breakpoints:{1024:{slidesPerView:2,spaceBetweenSlides:40}}});(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(t){for(var r=this,i=(r.document||r.ownerDocument).querySelectorAll(t),e=0;i[e]&&i[e]!==r;)++e;return Boolean(i[e])}),typeof n.closest!="function"&&(n.closest=function(t){for(var r=this;r&&r.nodeType===1;){if(r.matches(t))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");n.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+o+'"]');s.classList.add("active"),t.classList.add("active")})}),r.forEach(function(i){i.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
