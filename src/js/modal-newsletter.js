(() => {
  const refs_newsletter = {
    openModalNewsletterBtn: document.querySelector('[data-modal-newsletter-open]'),
    closeModalNewsletterBtn: document.querySelector('[data-modal-newsletter-close]'),
    modalNewsletter: document.querySelector('[modal-newsletter]'),
  };

  refs_newsletter.openModalNewsletterBtn.addEventListener('click', toggleModalNewsletter);
  refs_newsletter.closeModalNewsletterBtn.addEventListener('click', toggleModalNewsletter);

  function toggleModalNewsletter() {
    refs_newsletter.modalNewsletter.classList.toggle('is-hidden');
  }
})();
