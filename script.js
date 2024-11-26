const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = todoInput.value;
  
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }else{
        addTask(newTask)
    }
    todoInput.value = ''; // Clear the input field after adding a task
});//adds a new task when "add" button is clicked

  todoForm.addEventListener('keydown', function(e) {

    if(e.key === 'Enter'){
    e.preventDefault();
    const newTask = todoInput.value;
  
    if (newTask === '') {
        alert('Please enter a task!');
        return;
    }else{
        addTask(newTask)
    }
    todoInput.value = ''; // Clear the input field after adding a task
    }

});//adds a new task when "enter" key is pressed


function addTask(task){
    const listItem = document.createElement('li');//creates a list element

    //
    const checkBox = document.createElement('input');//creates a checkbox eleemnt
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);//adds it to the end of the list element
    
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
      });

    //
    const taskText = document.createElement('span');//creates span element
    taskText.textContent = task;//adds new text into the span
    listItem.appendChild(taskText);//add to the end of li element

  
    //
    const deleteButton = document.createElement('button');//creates a delete button
    deleteButton.textContent = 'delete';
    listItem.appendChild(deleteButton);//adds to the end of li element
    
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });
  
    todoList.appendChild(listItem);


}



