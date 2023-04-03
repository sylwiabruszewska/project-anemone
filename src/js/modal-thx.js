(() => {
  const refs_thx = {
    openModalThxBtn: document.querySelector('[data-modal-thx-open]'),
    closeModalThxBtn: document.querySelector('[data-modal-thx-close]'),
    closeContinueModalThxBtn: document.querySelector('[data-modal-thx-continue-close]'),
    modalThx: document.querySelector('[modal-thx]'),
  };

  refs_thx.openModalThxBtn.addEventListener('click', toggleModalThx);
  refs_thx.closeModalThxBtn.addEventListener('click', toggleModalThx);
  refs_thx.closeContinueModalThxBtn.addEventListener('click', toggleModalThx);

  function toggleModalThx() {
    refs_thx.modalThx.classList.toggle('is-hidden');
  }
})();
