(()=>{const e={openModalBtn:document.querySelector("[thx-modal-open]"),closeModalBtn:document.querySelector("[thx-modal-close]"),closeModalBtn2:document.querySelector("[thx-modal-close2]"),modal:document.querySelector("[thx-modal]")};function t(){e.modal.classList.toggle("thx-is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.closeModalBtn2.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[newsletter-modal-open]"),closeModalBtn:document.querySelector("[newsletter-modal-close]"),modal:document.querySelector("[newsletter-modal]")};function t(){e.modal.classList.toggle("newsletter-is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.82e22d25.js.map
