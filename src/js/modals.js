(() => {
  const refs = {
    // REFS
    // hero contact refs
    openModalBtnContactHero: document.querySelector('[modal-contact-hero-open]'),
    closeModalBtnContactHero: document.querySelector('[modal-contact-hero-close]'),
    modalContactHero: document.querySelector('[modal-contact-hero]'),

    // contact refs
    openModalBtnContact: document.querySelector('[modal-contact-open]'),
    closeModalBtnContact: document.querySelector('[modal-contact-close]'),
    modalContact: document.querySelector('[modal-contact]'),

    // newsletter refs
    openModalBtnNewsletter: document.querySelector('[modal-newsletter-open]'),
    closeModalBtnNewsletter: document.querySelector('[modal-newsletter-close]'),
    modalNewsletter: document.querySelector('[modal-newsletter]'),

    // thank you refs
    openModalBtnThanks: document.querySelector('[modal-thanks-open]'),
    open2ModalBtnThanks: document.querySelector('[modal-thanks-open2]'),
    closeModalBtnThanks: document.querySelector('[modal-thanks-close]'),
    continueModalBtnThanks: document.querySelector('[modal-thanks-continue]'),
    modalThanks: document.querySelector('[modal-thanks]'),
  };

  // ADD EVENT LISTENER
  // hero contact event listener
  refs.openModalBtnContactHero.addEventListener('click', toggleModalContactHero);
  refs.closeModalBtnContactHero.addEventListener('click', toggleModalContactHero);

  // contact event listener
  refs.openModalBtnContact.addEventListener('click', toggleModalContact);
  refs.closeModalBtnContact.addEventListener('click', toggleModalContact);

  // newsletter event listener
  refs.openModalBtnNewsletter.addEventListener('click', toggleModalNewsletter);
  refs.closeModalBtnNewsletter.addEventListener('click', toggleModalNewsletter);

  // thank you event listener
  refs.openModalBtnThanks.addEventListener('click', () => {
    refs.modalContactHero.classList.add('is-hidden');
    toggleThankYouModal();
  });

  refs.open2ModalBtnThanks.addEventListener('click', () => {
    refs.modalContact.classList.add('is-hidden');
    toggleThankYouModal();
  });

  refs.openModalBtnThanks.addEventListener('click', toggleModalThanks);
  refs.open2ModalBtnThanks.addEventListener('click', toggleModalThanks);
  refs.closeModalBtnThanks.addEventListener('click', toggleModalThanks);
  refs.continueModalBtnThanks.addEventListener('click', toggleModalThanks);

  // FUNCTION
  // hero contact function
  function toggleModalContactHero() {
    refs.modalContactHero.classList.toggle('is-hidden');
  }

  // contact function
  function toggleModalContact() {
    refs.modalContact.classList.toggle('is-hidden');
  }

  // newsletter function
  function toggleModalNewsletter() {
    refs.modalNewsletter.classList.toggle('is-hidden');
  }

  // thank you function
  // function toggleModalThx() {
  //   refs.modalThx.classList.toggle('is-hidden');
  // }
  function toggleModalThanks() {
    refs.modalThanks.classList.toggle('is-hidden');
  }
})();
