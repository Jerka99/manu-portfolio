const videos = document.querySelectorAll(".media video");

// Loop videos after they end
videos.forEach(video => {
    video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
    });
});

// IntersectionObserver for lazy loading + autoplay
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;

      if (video.dataset.src) {
        video.src = video.dataset.src;
        video.load();
        video.play().catch(() => {
          console.log("Autoplay blocked, ensure muted");
        });

        observer.unobserve(video);
      }
    }
  });
}, { threshold: 0.5 });

// Set data-src and observe for lazy loading
videos.forEach((video) => {
  video.dataset.src = video.src;
  video.muted = true;
  video.playsInline = true;
  observer.observe(video);
});
