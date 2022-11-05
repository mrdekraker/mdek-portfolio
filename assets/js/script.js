const workBtn = document.querySelector('.workBtn');
const arrow = document.querySelector('#arrow');
const about = document.querySelector(`#about`);
const gap = document.querySelector('#gap');
const navbar = document.querySelector('.nav-container');
const stickyBtn = document.querySelector('.stickyBtn');

stickyBtn.addEventListener(`click`, () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
// !EVENT LISTENERS
function handleClick(e) {
  about.scrollIntoView({ behavior: 'smooth' });
}
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
