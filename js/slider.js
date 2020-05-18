let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    start = 0;
// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
// Init Slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}
// Show prev
function slideLeft() {
    reset();
    sliderImages[start - 1].style.display = 'block';
    start--;
}
// Show Next
function slideRight() {
    reset();
    sliderImages[start + 1].style.display = 'block';
    start++;
}
// Left Arrow Click
arrowLeft.addEventListener('click', function () {
    if (start === 0) {
        start = sliderImages.length;
    }
    slideLeft();
});
// Right Arrow Click
arrowRight.addEventListener('click', function () {
    if (start === sliderImages.length - 1) {
        start = -1;
    }
    slideRight();
});

startSlide();