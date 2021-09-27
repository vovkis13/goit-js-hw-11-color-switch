import colors from './data.js';
import refs from './refs.js';
const { bodyRef, startBtnRef, stopBtnRef } = refs;
const DELAY = 1000;
let intervalID;

startBtnRef.addEventListener('click', startColorSwitcher);
stopBtnRef.addEventListener('click', stopColorSwitcher);

function startColorSwitcher() {
  startBtnRef.disabled = true;
  intervalID = setInterval(() => {
    bodyRef.style.backgroundColor = colors[getRandomColor(0, colors.length - 1)];
  }, DELAY);
}

function stopColorSwitcher() {
  startBtnRef.disabled = false;
  clearInterval(intervalID);
}

function getRandomColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
