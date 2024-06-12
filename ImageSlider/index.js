let currentImageIndex = 0;
const imageArray = ["Images/image_1.jpg", "Images/image_2.jpg", "Images/image_3.jpg"]
const btnBack = document.getElementById("back");
const btnForth = document.getElementById("forth");
const sliderImage = document.getElementById('slider-image');

function showImage(index) {
    sliderImage.src = imageArray[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageArray.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < imageArray.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

btnBack.addEventListener('click',function() {
    prevImage();
})

btnForth.addEventListener('click',function() {
    nextImage();
})