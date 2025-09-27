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

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.innerHTML = "";
    document.body.style.overflow = "";
});

// Close modal on clicking outside content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalContent.innerHTML = "";
        document.body.style.overflow = "";
    }
});
