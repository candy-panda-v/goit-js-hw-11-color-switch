import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const closeBtn = document.querySelector('[data-action="stop"]');
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(array) {
  const randomColor = randomIntegerFromInterval(0, array.length - 1);
  body.style.background = array[randomColor];
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    changeColor(colors);
  }, 1000);
});

closeBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(timerId);
});
