let addTask = document.getElementById('addTask');
let btnAdd = document.getElementById('btnAdd');
let taskList = document.getElementById('taskList');
let completedList = document.getElementById('completedList');

// Task LIST
btnAdd.addEventListener('click', taskAdd);

function taskAdd(event){
   event.preventDefault();
   if(addTask.value !== ""){
      let inputTask = document.createElement('li');
      inputTask.classList.add('task__item');
      let goTodoList = document.createElement('input');
      goTodoList.setAttribute('class', 'checkbox');
      goTodoList.setAttribute('type', 'checkbox');
      goTodoList.addEventListener('change', doneToDo);
      inputTask.appendChild(goTodoList);
      let tastText = document.createElement('span');
      tastText.innerText = addTask.value;
      inputTask.appendChild(tastText);
      taskList.appendChild(inputTask);
      addTask.value = '';
   }
}

//Checkbox

let checkedTask = document.querySelectorAll('.task__item [type="checkbox"]');

for(let i = 0; i < checkedTask.length; i++){
   checkedTask[i].addEventListener('change', doneToDo);
}

function doneToDo(){
   let nameToDo = this.nextElementSibling.innerText;
   taskList.removeChild(this.parentElement);
   let ItemComplete = document.createElement('li');
   ItemComplete.classList.add('completed__item');
   ItemComplete.innerHTML = `<span>${nameToDo}</span>`
   let goToCompleted = document.createElement('a');
   goToCompleted.setAttribute('class', 'delete');
   goToCompleted.textContent = 'delete';
   goToCompleted.addEventListener('click', removeToDo)
   ItemComplete.appendChild(goToCompleted);
   completedList.appendChild(ItemComplete);
}

//delete
let deleteTask = document.querySelectorAll('.delete');

for(let i = 0; i < deleteTask.length; i++){
	deleteTask[i].addEventListener('click', removeToDo)
}

function removeToDo(){
   completedList.removeChild(this.parentElement);
}
