const section = document.querySelector('.color-fade-parallax');
const imgColor = section.querySelector('.img-color');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const totalScroll = section.offsetHeight - window.innerHeight;
  let scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

  // Pause ranges
  const startPause = 0.15 * totalScroll;
  const endPause = 0.85 * totalScroll;

  let percent;
  if (scrolled < startPause) {
    percent = 0;
  } else if (scrolled > endPause) {
    percent = 100;
  } else {
    percent = ((scrolled - startPause) / (endPause - startPause)) * 100;
  }

  // Move the clipping line upward
  imgColor.style.clipPath = `polygon(0 ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0 100%)`;
});
