const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// function to make single ingredient item
// pattern: <li class="item">ingredient<li> 
const makeIngredientItem = (ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  return ingredientItem;
}

// make list of items
const ingredientsList = ingredients.map(makeIngredientItem);

// get reference on #ingredients
const ingredientsRef = document.querySelector('#ingredients');

// append all items to #ingredients
ingredientsRef.append(...ingredientsList);