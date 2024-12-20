/* global images */

function rand() {

    if (Math.random() > 0.5) {
        document.body.classList.add('inverted');
    } else {
        document.body.classList.remove('inverted');
    }

    const imageElement = document.getElementById('image');
    if (imageElement) {
        
        const randomImage = images[Math.floor(Math.random() * images.length)];
        imageElement.src = 'images/' + randomImage;
    }
}

window.addEventListener('DOMContentLoaded', rand);
document.addEventListener('click', rand);
	