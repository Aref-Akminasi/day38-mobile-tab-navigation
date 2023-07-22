const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  //Using the idx argument to get the index of the element from the nodelist
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();
    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove('active'));
}
