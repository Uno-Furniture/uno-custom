document.addEventListener("DOMContentLoaded", function() {

  document.addEventListener('click', (e) => {
    const swatchWrapper = e.target.closest('[data-swatch-image]');
    if(swatchWrapper) {
        const imageUrl = swatchWrapper.getAttribute('data-swatch-image');

        let imageToSwap = swatchWrapper.closest('.card').querySelector('.media > img');
        imageToSwap.removeAttribute('srcset');
        imageToSwap.src = imageUrl;
    }

  });
});
