let addTask = document.getElementById('addTask');
let btnAdd = document.getElementById('btnAdd');
let taskList = document.getElementById('taskList');
let completedList = document.getElementById('completedList');

// Task LIST
btnAdd.addEventListener('click', taskAdd);

function taskAdd(event){
   event.preventDefault();
   // if(addTask.value == 0) btnAdd.setAttribute('disabled', 'disabled');
   let inputTask = document.createElement('li');
   inputTask.classList.add('task__item');
   let goTodoList = document.createElement('input');
   goTodoList.setAttribute('class', 'checkbox');
   goTodoList.setAttribute('type', 'checkbox');
   inputTask.appendChild(goTodoList);
   let tastText = document.createElement('span');
   tastText.innerText = addTask.value;
   taskList.appendChild(inputTask);
   inputTask.appendChild(tastText);
   addTask.value = '';
}

//Checkbox

let checkedTask = document.querySelectorAll('[type="checkbox"]');

for(let i = 0; i < checkedTask.length; i++){
   checkedTask[i].addEventListener('change', function(){
      let ItemComplete = document.createElement('li');
      ItemComplete.classList.add('completed__item');
      let goToCompleted = document.createElement('a');
      goToCompleted.setAttribute('class', 'delete');
      checkedTask[i].style.display = 'none';
      goToCompleted.textContent = 'delete';
      ItemComplete.appendChild(goToCompleted);
      ItemComplete.insertBefore(checkedTask[i].nextSibling, goToCompleted);
      completedList.appendChild(ItemComplete);
   });

   ////delete 
   let deleteTask = document.querySelectorAll('.delete');
   let parent = document.querySelectorAll('.completed__item');
   deleteTask[i].addEventListener('click', function(){
      deleteTask[i].parentNode.remove();
   });
}

