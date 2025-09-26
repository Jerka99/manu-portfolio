const section = document.querySelector('.parallax-fade');
const colorImg = section.querySelector('.bg-color');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const scrollRange = section.offsetHeight - window.innerHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), scrollRange);

  // Only fade color; no vertical translate for base
  colorImg.style.opacity = scrolled / scrollRange;
});
