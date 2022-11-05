const workBtn = document.querySelector('.workBtn');
const btn = document.querySelector('button');
const arrow = document.querySelector('#arrow');
const about = document.querySelector(`#about`);
const gap = document.querySelector('#gap');
const navbar = document.querySelector('.nav-container');
// const home = document.querySelector(`#home`);
const navLink = document.querySelectorAll('.nav-link');

// !NAVBAR CLICKS

// when a user clicks on any of the nav links, it will scroll to the section
// that is associated with that link
function handleNavClick(e) {
  e.preventDefault();
  const { target } = e;
  const id = target.getAttribute('href');
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// !EVENT LISTENERS

// when a user clicks on any of the nav links, it will scroll to the section
// that is associated with that link
function handleClick(e) {
  console.log(e.target);
  console.log('🐛 IT GOT CLICKED!!!');
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

const fadeUpObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`faded`);
        fadeUpObs.unobserve(entry.target);
      }
    });
  },
  { rootMargin: `0px 0px -100px 0px` }
);

document.querySelectorAll(`.fade-up`).forEach((element) => {
  fadeUpObs.observe(element);
});

navObs.observe(navbar);
