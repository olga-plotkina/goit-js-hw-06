function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonRef: document.querySelector('.change-color'),
  bodyRef: document.body,
  spanRef: document.querySelector('.color'),
};

refs.buttonRef.addEventListener('click', onButtonChange);

function onButtonChange(event) {
  const randomColorOfBody = getRandomHexColor();
  refs.bodyRef.style.backgroundColor = randomColorOfBody;
  refs.spanRef.textContent = randomColorOfBody;
};