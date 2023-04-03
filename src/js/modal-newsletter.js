(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-newsletter-open]'),
    closeModalBtn: document.querySelector('[data-modal-newsletter-close]'),
    modal: document.querySelector('[modal-newsletter]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
