// === modal.js ===
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close");

// Collect all clickable media (gallery + scattered images)
const mediaItems = document.querySelectorAll(".media img, .media video, .scattered-image img");
let currentIndex = 0;

// Create navigation buttons if not in HTML
let prevBtn = document.createElement("span");
prevBtn.className = "nav left";
prevBtn.innerHTML = "&#10094;";
let nextBtn = document.createElement("span");
nextBtn.className = "nav right";
nextBtn.innerHTML = "&#10095;";

modal.appendChild(prevBtn);
modal.appendChild(nextBtn);

function showModal(index) {
    currentIndex = index;
    const item = mediaItems[currentIndex];
    modalContent.innerHTML = "";

    if (item.tagName === "IMG") {
        const img = document.createElement("img");
        img.src = item.src;
        modalContent.appendChild(img);
    } else if (item.tagName === "VIDEO") {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        video.style.maxWidth = "90vw";
        video.style.maxHeight = "90vh";
        modalContent.appendChild(video);
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function showPrev() {
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    showModal(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % mediaItems.length;
    showModal(currentIndex);
}

// Open modal on click
mediaItems.forEach((item, i) => {
    item.addEventListener("click", () => showModal(i));
});

// Navigation buttons
prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });

function close(){
    modal.style.display = "none";
    modalContent.innerHTML = "";
    document.body.style.overflow = "";
}

// Close modal
closeBtn.addEventListener("click", () => {
    close()
});

// Close modal on clicking outside content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
    close()
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
    close()
    }
});

let startY = 0;
let startTime = 0;

modal.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    startTime = Date.now();
}, { passive: true });

modal.addEventListener("touchend", (e) => {
    let endY = e.changedTouches[0].clientY;
    let diffY = startY - endY;
    let elapsed = Date.now() - startTime;

    // More sensitive: lower distance threshold to 30px, allow up to 700ms swipe
    if (Math.abs(diffY) > 30 && elapsed < 700) {
        if (diffY > 0) {
            showNext(); // swipe up → next
        } else {
            showPrev(); // swipe down → previous
        }
    }
});
