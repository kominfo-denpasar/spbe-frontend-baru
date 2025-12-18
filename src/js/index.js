const hero = document.getElementById('hero-section');
const nextBtn = document.getElementById('nextSlide');

const images = [
  '/images/wawali.png',
  '/images/logodps.png',
  '/images/logo-spbe.png'
];

let index = 0;

hero.style.transition = 'background-image 0.8s ease-in-out, opacity 0.6s ease-in-out';

function changeBackground() {
  hero.style.opacity = '0.8'; 

  setTimeout(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.style.opacity = '1';
  }, 300);
}

setInterval(changeBackground, 5000);

if (nextBtn) {
  nextBtn.addEventListener('click', changeBackground);
}
