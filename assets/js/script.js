const workBtn = document.querySelector('.workBtn');
const btn = document.querySelector('button');
const arrow = document.querySelector('#arrow');
const about = document.querySelector(`#about`);
const gap = document.querySelector('#gap');
const navbar = document.querySelector('.nav-container');
const home = document.querySelector(`#home`);

function handleClick(e) {
  console.log(e.target);
  console.log('🐛 IT GOT CLICKED!!!');
  // when clicked, go to the next section
  // 1. get the next section
  // 2. scroll to it
  about.scrollIntoView({ behavior: 'smooth' });
}

function arrowMouseover() {
  // console.log('🐛 IT GOT HOVERED!!!');
  arrow.style.transform = 'scale(1.4)';
}

function arrowMouseout() {
  // console.log('🐛 IT GOT UNHOVERED!!!');
  arrow.style.transform = 'scale(1)';
}

// workBtn mouseover event
workBtn.addEventListener('mouseover', arrowMouseover);
workBtn.addEventListener(`mouseout`, arrowMouseout);
workBtn.addEventListener(`click`, handleClick);

// Navbar intersection observer
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

const navObs = new IntersectionObserver(
  (entries) => {
    navbar.classList.toggle(`active`, entries[0].isIntersecting);
  },
  { threshold: 0.75 }
);

navObs.observe(navbar);
