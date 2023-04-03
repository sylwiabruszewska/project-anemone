(() => {
  const refs = {
    openModalBtn: document.querySelector('[newsletter-modal-open]'),
    closeModalBtn: document.querySelector('[newsletter-modal-close]'),
    modal: document.querySelector('[newsletter-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('newsletter-is-hidden');
  }
})();
