function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const listOfGalleryRef = document.querySelector('.gallery');

// const makeGalleryMarkup = ({url, alt}) => {
//   return `
//   <li><img 
//   width=`${url}px`
//   height=`${alt}px``>
//   </li>
//   `;
// };

// const makeGallery = images
// .map(makeGalleryMarkup)
// .join('');

// listOfGalleryRef.innerHTML = makeGallery;



const buttonCreateRef = document.querySelector('button[data-create]');
const buttonDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');



inputRef.addEventListener('change', (event) => {
  const lengthOfCollecton = event.currentTarget.value;
  buttonCreateRef.addEventListener('click', () => {
    createBoxes(lengthOfCollecton);
  });

  buttonDestroyRef.addEventListener('click', () => {
    destroyBoxes();
    event.currentTarget.elements.reset();
  })
});




function createBoxes(amount) {
  const arrayMarkup = [];

  for (let i = 1; i <= amount; i += 1) {
    for (let j = 0; j < (amount * 10) ; j += 10) {
      const divMarkup = `<div style="width: ${30 + j}px; height:${30 + j}px; background-color:${getRandomHexColor()}"></div>`
      arrayMarkup.push(divMarkup);
    }
    break;
  }
  const result = arrayMarkup.join('');
  return divRef.innerHTML = result;
}

function destroyBoxes() {
  divRef.innerHTML = '';
};