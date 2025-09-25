const overlayBg = document.querySelector('.parallax-background.overlay');
const section = overlayBg.closest('.parallax-section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  let progress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  overlayBg.style.opacity = progress;
});
