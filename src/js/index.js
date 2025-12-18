
  const hero = document.getElementById('hero-section');

  const images = [
    '/images/wawali.png',
    '/images/logodps.png',
    '/images/logo-spbe.png'
  ];

  let index = 0;

  function changeBackground() {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }

  // Auto slide setiap 5 detik
  setInterval(changeBackground, 5000);

  // Tombol next manual
  document.getElementById('nextSlide').addEventListener('click', changeBackground);

