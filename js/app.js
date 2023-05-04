const addForm = document.querySelector('.add');
// Get a reference to the Todo list (<ul> element in the html):
const list = document.querySelector('.todos');

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