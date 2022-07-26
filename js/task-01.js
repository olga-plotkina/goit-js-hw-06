const mainCategoriesRef = document.querySelectorAll('.item');
console.log("Number of categories:", mainCategoriesRef.length);

mainCategoriesRef.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryAmountOfItems = category.querySelectorAll('li');
    console.log("Category: ", categoryTitle);
    console.log("Elements: ", categoryAmountOfItems.length);
});