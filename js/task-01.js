// reference on #categories (top level ul)
const categoriesRef = document.querySelector('#categories');

// numbers of categories children ()
console.log(`Number of categories: ${categoriesRef.children.length}`);

// iterating over the children of ul#categories
[...categoriesRef.children].forEach(child => {
    // reference on category title
    const currentCategoryTitleRef = child.firstElementChild;
    console.log(`\nCategory: ${currentCategoryTitleRef.textContent}`);

    // reference on category list
    const currentCategoryListRef = child.lastElementChild;
    console.log(`Elements: ${currentCategoryListRef.children.length}`);
});