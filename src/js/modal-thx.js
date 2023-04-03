(() => {
  const refs = {
    openModalThxBtn: document.querySelector('[data-modal-thx-open]'),
    closeModalThxBtn: document.querySelector('[data-modal-thx-close]'),
    closeContinueModalThxBtn: document.querySelector('[data-modal-thx-continue-close]'),
    modalThx: document.querySelector('[modal-thx]'),
  };

  refs.openModalThxBtn.addEventListener('click', toggleModalThx);
  refs.closeModalThxBtn.addEventListener('click', toggleModalThx);
  refs.closeContinueModalThxBtn.addEventListener('click', toggleModalThx);

  function toggleModalThx() {
    refs.modalThx.classList.toggle('is-hidden');
  }
})();
