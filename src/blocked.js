function rand() {

    if (Math.random() > 0.5) {
        document.body.classList.add('inverted');
    } else {
        document.body.classList.remove('inverted');
    }

    const imageElement = document.getElementById('image');
    if (imageElement) {
        const images = [
            ' (3).png',
			' (1).jpg',
			' (1).png',
			' (6).png',
			' (7).png',
			' (4).png',
			' (5).png',
			' (11).png',
			' (2).jpg',
			' (8).png',
			' (9).png',
			' (2).png',
			' (10).png',
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        imageElement.src = 'images/' + randomImage;
    }
}

window.addEventListener('DOMContentLoaded', rand);
document.addEventListener('click', rand);
	