const workBtn = document.querySelector('.workBtn');
const btn = document.querySelector('button');
const arrow = document.querySelector('.arrow');
const about = document.querySelector(`#about`);
const gap = document.querySelector('#gap');

function handleClick() {
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
