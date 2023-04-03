(() => {
  const refs = {
    openModalBtn: document.querySelector('[thx-modal-open]'),
    closeModalBtn: document.querySelector('[thx-modal-close]'),
    closeModalBtn2: document.querySelector('[thx-modal-close2]'),
    modal: document.querySelector('[thx-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('thx-is-hidden');
  }
})();
