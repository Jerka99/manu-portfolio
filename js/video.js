const videos = document.querySelectorAll(".media video");

videos.forEach(video => {
    video.addEventListener("ended", () => {
        video.currentTime = 0; // rewind
        video.play();           // start again
    });
});
