import './style.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { loadNavbar } from './js/navbar.js';

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
});


//ANIMASI//

document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll(
    'section, article, footer'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            'opacity 0.6s ease-out, transform 0.6s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    observer.observe(el);
  });

});

window.addEventListener('load', () => {
  const hero = document.querySelector('main section div div');
  if (!hero) return;

  hero.style.opacity = '0';
  hero.style.transform = 'translateY(20px)';
  hero.style.transition = 'all 1s ease';

  setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 300);
});


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

