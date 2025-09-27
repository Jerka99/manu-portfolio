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


window.addEventListener("scroll", function() {
  const intro = document.getElementById("intro");
  if (window.scrollY > 50) { // user scrolled down 50px
    intro.style.opacity = 0;
    setTimeout(() => {
      intro.style.display = "none"; // remove from DOM flow
    }, 1000);
  }
});
