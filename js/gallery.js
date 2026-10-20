(function () {
    var imageButtons = Array.prototype.slice.call(
        document.querySelectorAll(".gallery-image-button")
    );
    var lightbox = document.querySelector(".gallery-lightbox");
    var lightboxImage = document.querySelector(".gallery-lightbox-image");
    var closeButton = document.querySelector(".gallery-lightbox-close");
    var previousButton = document.querySelector(".gallery-lightbox-previous");
    var nextButton = document.querySelector(".gallery-lightbox-next");
    var activeIndex = 0;

    function showImage(index) {
        activeIndex = (index + imageButtons.length) % imageButtons.length;
        var button = imageButtons[activeIndex];
        var image = button.querySelector("img");
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    }

    imageButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            showImage(index);
            lightbox.showModal();
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.close();
    });

    previousButton.addEventListener("click", function () {
        showImage(activeIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(activeIndex + 1);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    lightbox.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showImage(activeIndex - 1);
        } else if (event.key === "ArrowRight") {
            showImage(activeIndex + 1);
        }
    });
}());
