const countDate = new Date('Jun 10, 2020 00:00:00').getTime();

const timeToEvent = () => {
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    timeToEvent();
}, 1000);

const muteSound = document.querySelector('.mute-sound');
const unMuteSound = document.querySelector('.unmute-sound');

muteSound.addEventListener('click', () => {
    muteSound.classList.replace('d-block', 'd-none');
    unMuteSound.classList.replace('d-none', 'd-block');
    document.getElementById('audio').pause();
});

unMuteSound.addEventListener('click', () => {
    unMuteSound.classList.replace('d-block', 'd-none');
    muteSound.classList.replace('d-none', 'd-block');
    document.getElementById('audio').play();
});

// Caraousel
let imageNumber = 1;
const officialInvitation = document.querySelector('.official-invitation');

const changeImage = () => {
    officialInvitation.style.backgroundImage = `url(_assets/img/${imageNumber}.jpeg)`;

    imageNumber++;

    if (imageNumber > 7) imageNumber = 1;

    setTimeout(changeImage, 2000);
}

changeImage();

// Modal
const modal = document.getElementById('modal');
const modalContentImg = document.querySelector('.modal-content-img');
const modalCloseIcon = document.querySelector('.modal-close');
const modalPreviousBtn = document.querySelector('.modal-previous');
const modalNextBtn = document.querySelector('.modal-next');

const GalleryImg = document.querySelectorAll('.gallery img');
let imageGalleryNumber = 0;

const openModal = (img) => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';

    modalContentImg.src = img.src
    
    GalleryImg.forEach((gallery, index) => {
        if(gallery === img) imageGalleryNumber = index;
    });
}

modalCloseIcon.addEventListener('click', () => {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
});

modalPreviousBtn.addEventListener('click', () => {
    if(imageGalleryNumber === 0) {
        modalContentImg.src = GalleryImg[GalleryImg.length - 1].src;
        imageGalleryNumber = GalleryImg.length - 1;
    } else {
        modalContentImg.src = GalleryImg[imageGalleryNumber - 1].src;
        imageGalleryNumber--;
    }
});

modalNextBtn.addEventListener('click', () => {
    if(imageGalleryNumber === GalleryImg.length - 1) {
        modalContentImg.src = GalleryImg[0].src;
        imageGalleryNumber = 0;
    } else {
        modalContentImg.src = GalleryImg[imageGalleryNumber + 1].src;
        imageGalleryNumber++;
    }
})