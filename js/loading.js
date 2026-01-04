document.body.classList.add('loading');

const images = Array.from(document.querySelectorAll('.hero-image, .img-base, .img-color'));
let loadedCount = 0;

if (images.length === 0) hideLoader();

images.forEach(img => {
    if (img.complete) {
        imageLoaded();
    } else {
        img.addEventListener('load', imageLoaded);
        img.addEventListener('error', imageLoaded);
    }
});

function imageLoaded() {
    loadedCount++;
    const percent = Math.round((loadedCount / images.length) * 100);
    document.getElementById('loader-percentage').textContent = percent + '%';

    if (loadedCount === images.length) {
        hideLoader();
    }
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
//    loader.classList.add('hidden');
    document.body.classList.remove('loading');
}