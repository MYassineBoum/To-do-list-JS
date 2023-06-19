let input = document.getElementById('input');
let listTasks = document.getElementById('tasks-list');

function addTask() {

    if(input.value == ''){
        alert("You need to write a task!");
    } else {
        let task = document.createElement('li');
        let container = document.createElement('ul');
        let btn = document.createElement('button');

        btn.innerHTML = 'Remove';
        task.innerHTML = input.value;
        container.appendChild(task);
        container.appendChild(btn);
        listTasks.appendChild(container);

        btn.addEventListener('click', function() {
            listTasks.removeChild(container);
        });
    }

    input.value = '';
    
}