const addForm = document.querySelector('.add');
// Get a reference to the Todo list (<ul> element in the html):
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addTodoItem = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  // Test whether the field is empty:
  if(todo.length){
    addTodoItem(todo);
    addForm.reset();
  }
});


// Delete todos:
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const filterTodos = searchTerm => {
  // Add 'filtered' class to items to hide:
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.add('filtered'));

  // Take 'filtered' class off of ones that *do* match the search criteria:
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove('filtered'));
};

// React to keyup events in the search field:
search.addEventListener('keyup', () => {
  const searchTerm = search.value.trim().toLowerCase();
  filterTodos(searchTerm);
});
