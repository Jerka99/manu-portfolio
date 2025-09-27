const videos = document.querySelectorAll(".media video");

videos.forEach(video => {
    video.addEventListener("ended", () => {
        video.currentTime = 0; // rewind
        video.play();           // start again
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const video = entry.target;
      if(video.dataset.src){
        video.src = video.dataset.src;   // load actual src
        video.play();
        observer.unobserve(video);       // stop observing once loaded
      }
    }
  });
}, { threshold: 0.5 }); // 50% visible

videos.forEach(video => {
  video.dataset.src = video.src;  // move src to data-src
  video.src = "";                 // remove initial src
  observer.observe(video);
});
