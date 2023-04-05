(() => {
  const refs = {
    // REFS
    // hero contact refs
    openModalBtnContactHero: document.querySelector('[data-modal-contact-hero-open]'),
    closeModalBtnContactHero: document.querySelector('[data-modal-contact-hero-close]'),
    modalContactHero: document.querySelector('[modal-contact-hero]'),

    // contact refs
    openModalBtnContact: document.querySelector('[data-modal-contact-open]'),
    closeModalBtnContact: document.querySelector('[data-modal-contact-close]'),
    modalContact: document.querySelector('[modal-contact]'),

    //newsletter refs
    openModalBtnNewsletter: document.querySelector('[data-modal-newsletter-open]'),
    closeModalBtnNewsletter: document.querySelector('[data-modal-newsletter-close]'),
    modalNewsletter: document.querySelector('[modal-newsletter]'),

    // thank you refs
    openModalBtnThanks: document.querySelector('[data-modal-thanks-open]'),
    closeModalBtnThanks: document.querySelector('[data-modal-thanks-close]'),
    modalThanks: document.querySelector('[data-modal-thanks]'),
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

  refs.openModalBtnThanks.addEventListener('click', () => {
    refs.modalContactHero.classList.add('is-hidden');
    toggleThankYouModal();
  });

  refs.openModalBtnThanks.addEventListener('click', toggleModal);
  refs.closeModalBtnThanks.addEventListener('click', toggleModal);

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
  function toggleModal() {
    refs.modalThanks.classList.toggle('is-hidden');
  }
})();
