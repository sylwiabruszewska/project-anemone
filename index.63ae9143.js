(()=>{const e={openModalBtnContact:document.querySelector("[modal-contact-open]"),open2ModalBtnContact:document.querySelector("[modal-contact-open2]"),closeModalBtnContact:document.querySelector("[modal-contact-close]"),modalContact:document.querySelector("[modal-contact]"),openModalBtnNewsletter:document.querySelector("[modal-newsletter-open]"),closeModalBtnNewsletter:document.querySelector("[modal-newsletter-close]"),modalNewsletter:document.querySelector("[modal-newsletter]"),openModalBtnThanks:document.querySelector("[modal-thanks-open]"),closeModalBtnThanks:document.querySelector("[modal-thanks-close]"),continueModalBtnThanks:document.querySelector("[modal-thanks-continue]"),modalThanks:document.querySelector("[modal-thanks]")};function t(){e.modalContact.classList.toggle("is-hidden")}function n(){e.modalNewsletter.classList.toggle("is-hidden")}function o(){e.modalThanks.classList.toggle("is-hidden")}e.openModalBtnContact.addEventListener("click",t),e.open2ModalBtnContact.addEventListener("click",t),e.closeModalBtnContact.addEventListener("click",t),e.openModalBtnNewsletter.addEventListener("click",n),e.closeModalBtnNewsletter.addEventListener("click",n),e.openModalBtnThanks.addEventListener("click",(()=>{e.modalContact.classList.add("is-hidden"),toggleThankYouModal()})),e.openModalBtnThanks.addEventListener("click",o),e.closeModalBtnThanks.addEventListener("click",o),e.continueModalBtnThanks.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();new Swiper(".swiper",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
//# sourceMappingURL=index.63ae9143.js.map