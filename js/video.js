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

        // Play when ready
        video.play().catch(() => {
          console.log("Autoplay blocked, ensure muted");
        });

        observer.unobserve(video);
      }
    }
  });
}, { threshold: 0.5 });

// Set data-src and initial frame from video
videos.forEach((video, index) => {
  video.dataset.src = video.src;

  // Choose initial frame (time in seconds)
  const initialFrames = [2, 8, 9.7, 0, 3, 12]; // seconds for each video
  const initialTime = initialFrames[index] || 0;

  // Wait for video metadata to load, then jump to initial frame
  video.addEventListener("loadedmetadata", () => {
    video.currentTime = initialTime;
    video.pause(); // keep paused until in view
  });

  observer.observe(video);
});
