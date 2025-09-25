const scatteredFloatingImages = document.querySelectorAll(".scattered-image");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    scatteredFloatingImages.forEach((img, i) => {
        if (img.classList.contains("active")) return;

        // Smaller, smoother floating
        const moveX = Math.sin(scrollY / 150 + i) * 8;
        const moveY = Math.cos(scrollY / 180 + i) * 8;

        // Subtle rotation (degrees)
        const rotate = Math.sin(scrollY / 200 + i) * 5; // max ±5°

        img.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
    });
});
