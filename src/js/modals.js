(() => {
  const refs = {
    // REFS
    // contact refs
    openModalBtnContact: document.querySelector('[data-modal-contact-open]'),
    open2ModalBtnContact: document.querySelector('[data-modal-contact-open2]'),
    closeModalBtnContact: document.querySelector('[data-modal-contact-close]'),
    modalContact: document.querySelector('[data-modal-contact]'),

    // newsletter refs
    openModalBtnNewsletter: document.querySelector('[data-modal-newsletter-open]'),
    closeModalBtnNewsletter: document.querySelector('[data-modal-newsletter-close]'),
    modalNewsletter: document.querySelector('[data-modal-newsletter]'),

    // thank you refs
    openModalBtnThanks: document.querySelector('[data-modal-thanks-open]'),
    closeModalBtnThanks: document.querySelector('[data-modal-thanks-close]'),
    continueModalBtnThanks: document.querySelector('[data-modal-thanks-continue]'),
    modalThanks: document.querySelector('[data-modal-thanks]'),
  };

  // ADD EVENT LISTENER
  // contact event listener
  refs.openModalBtnContact.addEventListener('click', toggleModalContact);
  refs.open2ModalBtnContact.addEventListener('click', toggleModalContact);
  refs.closeModalBtnContact.addEventListener('click', toggleModalContact);

  // newsletter event listener
  refs.openModalBtnNewsletter.addEventListener('click', toggleModalNewsletter);
  refs.closeModalBtnNewsletter.addEventListener('click', toggleModalNewsletter);

  // thank you event listener
  refs.openModalBtnThanks.addEventListener('click', () => {
    refs.modalContact.classList.add('is-hidden');
    toggleThankYouModal();
  });

  refs.openModalBtnThanks.addEventListener('click', toggleModalThanks);
  refs.closeModalBtnThanks.addEventListener('click', toggleModalThanks);
  refs.continueModalBtnThanks.addEventListener('click', toggleModalThanks);

  // FUNCTION
  // contact function
  function toggleModalContact() {
    refs.modalContact.classList.toggle('is-hidden');
  }

  // newsletter function
  function toggleModalNewsletter() {
    refs.modalNewsletter.classList.toggle('is-hidden');
  }

  function toggleModalThanks() {
    refs.modalThanks.classList.toggle('is-hidden');
  }
})();
