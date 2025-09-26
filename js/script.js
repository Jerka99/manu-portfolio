const section = document.querySelector('.color-fade-parallax');
const imgColor = section.querySelector('.img-color');

window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const totalScroll = section.offsetHeight - window.innerHeight;
    let scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

    // Scroll pause ranges
    const startPause = 0.15 * totalScroll;
    const endPause = 0.85 * totalScroll;

    let percent;
    if (scrolled < startPause) {
        percent = 0; // fully grayscale
    } else if (scrolled > endPause) {
        percent = 100; // fully colored
    } else {
        percent = ((scrolled - startPause) / (endPause - startPause)) * 100;
    }

    // Mask from bottom to top
    imgColor.style.maskImage = `linear-gradient(to top, black ${percent}%, transparent 100%)`;
    imgColor.style.webkitMaskImage = `linear-gradient(to top, black ${percent}%, transparent 100%)`;

    // Smooth fade-in
    imgColor.style.opacity = percent / 100;
});
