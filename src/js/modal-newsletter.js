(() => {
  const refs = {
    openModalNewsletterBtn: document.querySelector('[data-modal-newsletter-open]'),
    closeModalNewsletterBtn: document.querySelector('[data-modal-newsletter-close]'),
    modalNewsletter: document.querySelector('[modal-newsletter]'),
  };

  refs.openModalNewsletterBtn.addEventListener('click', toggleModalNewsletter);
  refs.closeModalNewsletterBtn.addEventListener('click', toggleModalNewsletter);

  function toggleModalNewsletter() {
    refs.modalNewsletter.classList.toggle('is-hidden');
  }
})();
