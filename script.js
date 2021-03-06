function initScrollSoft() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSoft();

function initAnimateScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
initAnimateScroll();
