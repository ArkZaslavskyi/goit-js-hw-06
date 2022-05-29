const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// get reference on #ingredients
const ingredientsRef = document.querySelector('#ingredients');

// make list of items
const ingredientsList = ingredients.map(makeIngredientItem);

// append all items to #ingredients
ingredientsRef.append(...ingredientsList);

// function to make single ingredient item
// pattern: <li class="item">ingredient<li> 
function makeIngredientItem (ingredient) {
  const ingredientItem = document.createElement('li');

  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;

  return ingredientItem;
}
