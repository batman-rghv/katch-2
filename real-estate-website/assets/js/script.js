window.addEventListener('scroll', function () {
  const body = document.body;
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY > heroHeight) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});