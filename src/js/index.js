const hero = document.getElementById('hero-section');

const images = [
  '/images/wawali.png',
  '/images/bg-kantor.png',
  '/images/bg-caturmuka.png'
];

let index = 0;

hero.style.backgroundImage = `url('${images[0]}')`;
hero.style.transition = 'opacity 0.6s ease-in-out';

function changeBackground() {
  hero.style.opacity = '0.7';

  setTimeout(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.style.opacity = '1';
  }, 300);
}

setInterval(changeBackground, 5000);
