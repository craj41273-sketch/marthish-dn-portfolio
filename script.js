const currentPage = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === currentPage) link.classList.add('active');
});

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#form-message');
    message.textContent = 'Thanks — your message is ready to send. Connect this form to your preferred email service when you publish.';
    message.style.color = 'var(--cyan)';
    form.reset();
  });
}
