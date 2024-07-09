document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Mark task as completed
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-btn')) {
            e.target.closest('li').classList.toggle('completed');
        }
    });

    // Edit or delete task
    taskList.addEventListener('click', (e) => {
        const taskItem = e.target.closest('li');
        if (e.target.classList.contains('edit-btn')) {
            const newTaskText = prompt('Edit task:', taskItem.querySelector('span').textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskItem.querySelector('span').textContent = newTaskText.trim();
            }
        } else if (e.target.classList.contains('delete-btn')) {
            taskItem.remove();
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div class="btn-group">
                <button class="complete-btn btn btn-link">✓</button>
                <button class="edit-btn btn btn-link">✎</button>
                <button class="delete-btn btn btn-link">✗</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    }
});
