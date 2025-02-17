document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper"),
        innerPhotos = document.querySelectorAll(".inner-photo"),
        sliderBtnPrev = document.querySelector("#prev"),
        sliderBtnNext = document.querySelector("#next"),
        dotsContainer = document.getElementById("dots");

    let currentIndex = 0;
    const innerPhotoLength = innerPhotos.length;
    const autoSlideInterval = 4000; 

    function createDots() {
        for (let i = 0; i < innerPhotoLength; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        updateDots(); 
    }

    function showSlide(index) {
        innerPhotos.forEach(photo => photo.classList.remove("active"));
        innerPhotos[index].classList.add("active");
        updateDots();
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex + innerPhotoLength - 1) % innerPhotoLength;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % innerPhotoLength;
        showSlide(currentIndex);
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }


    sliderBtnPrev.addEventListener("click", prevSlide);
    sliderBtnNext.addEventListener("click", nextSlide);


    createDots();
    showSlide(currentIndex);

    let autoSlide = setInterval(nextSlide, autoSlideInterval);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, autoSlideInterval);
    }
});
