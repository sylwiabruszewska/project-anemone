(()=>{const e={openModalThxBtn:document.querySelector("[data-modal-thx-open]"),closeModalThxBtn:document.querySelector("[data-modal-thx-close]"),closeContinueModalThxBtn:document.querySelector("[data-modal-thx-continue-close]"),modalThx:document.querySelector("[modal-thx]")};function t(){e.modalThx.classList.toggle("is-hidden")}e.openModalThxBtn.addEventListener("click",t),e.closeModalThxBtn.addEventListener("click",t),e.closeContinueModalThxBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-newsletter-open]"),closeModalBtn:document.querySelector("[data-modal-newsletter-close]"),modal:document.querySelector("[modal-newsletter]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.aa97e164.js.map
