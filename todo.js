document.addEventListener('DOMContentLoaded', () => {
  const newTaskInput = document.getElementById('new-task');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', () => {
      const newTask = newTaskInput.value.trim();
      if (newTask) {
          const listItem = document.createElement('li');

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.addEventListener('change', () => {
              if (checkbox.checked) {
                  listItem.classList.add('completed');
              } else {
                  listItem.classList.remove('completed');
              }
          });

          const taskText = document.createElement('span');
          taskText.textContent = newTask;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = '✕';
          deleteButton.addEventListener('click', () => {
              todoList.removeChild(listItem);
          });

          listItem.appendChild(checkbox);
          listItem.appendChild(taskText);
          listItem.appendChild(deleteButton);

          todoList.appendChild(listItem);
          newTaskInput.value = '';
      }
  });
});