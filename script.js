document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.contact-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const button = this.querySelector('button');
  const originalText = button.textContent;

  button.textContent = 'Consulta enviada';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    this.reset();
  }, 1800);
});
