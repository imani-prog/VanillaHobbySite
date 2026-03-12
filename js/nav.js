// Hamburger menu toggle
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  const iconOpen = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>`;

  const iconClose = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18L18 6M6 6l12 12"/>
    </svg>`;

  if (!hamburger || !mobileMenu) return;

  hamburger.innerHTML = iconOpen;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.innerHTML = isOpen ? iconClose : iconOpen;
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.innerHTML = iconOpen;
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();
