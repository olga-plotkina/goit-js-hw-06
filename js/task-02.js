const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

// for (const ingredient of ingredients) {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   itemRef.classList.add('item');
//   listRef.appendChild(itemRef);
// }
const itemArray = '';
for (const ingredient of ingredients) {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');
  itemArray += itemRef;
}

console.log(itemArray);
listRef.append(itemArray);