const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

// Option 1
// for (const ingredient of ingredients) {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   itemRef.classList.add('item');
//   listRef.appendChild(itemRef);
// }

// Option 2

// const itemArray = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredients[i];
//   itemRef.classList.add('item');
//   itemArray.push(itemRef);
// }

// console.log(itemArray);
// listRef.append(...itemArray);

// Option 3 

const makeListOfItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    itemRef.classList.add('item');
    
    return itemRef;
})
}

const itemsFromIngredients = makeListOfItems(ingredients);
listRef.append(...itemsFromIngredients);