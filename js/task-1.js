const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('ul li').length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementCount}`);
});
