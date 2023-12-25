function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.innerHTML = `${taskInput.value} <button class="edit-btn" onclick="editTask(this)">Edit</button> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function deleteTask(task) {
    const li = task.parentElement;
    li.remove();
  }
  
  function editTask(task) {
    const li = task.parentElement;
    const taskText = li.firstChild;
    const newText = prompt('Edit the task:', taskText.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskText.textContent = newText;
    }
  }
  