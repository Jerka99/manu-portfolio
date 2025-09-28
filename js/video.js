const videos = document.querySelectorAll(".media video");

videos.forEach(video => {
    video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const video = entry.target;
      if(video.dataset.src){
        video.src = video.dataset.src;
        video.play();
        observer.unobserve(video);
      }
    }
  });
}, { threshold: 0.5 });

videos.forEach(video => {
  video.dataset.src = video.src;
  observer.observe(video);
});
