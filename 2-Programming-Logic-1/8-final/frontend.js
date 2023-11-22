import {calculateLargestUnitOfTime, formatDate} from "./middleware.js"

const taskNameInput = document.getElementById('task-name');
const taskDescTextarea = document.getElementById('task-desc');
const addButton = document.getElementById('bt-add');

let isClickable = true;

window.setInterval(()=>{
    isClickable = true;
}, 600)



function Start(tasks, handleTasks, handleValidate){
    Draw(tasks)
    addButton.addEventListener('click', ()=>{
        if(isClickable){
            isClickable = false;
        }else{
            return
        }
        try {
            const id =  tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;
            const title = taskNameInput.value.trim()
            const description = taskDescTextarea.value.trim()
            handleValidate.ValidateTask(title, description)
            const newTask = {
                id,
                title,
                description,
                createdAt: new Date()
            }
            handleValidate.ValidateDuplicatedTask(newTask, tasks)
            handleTasks.add(newTask)
            Draw(tasks)
        } catch (error) {
            alert("Erro: "+error.message)
            Start(tasks)
        }
    })
}

function Draw(tasks){
    //tasks: task[]
    const tasksDiv = document.getElementById('tasks')
    if(tasks){
        tasksDiv.innerHTML =  tasks.map((task)=>DrawCard(task)).join('')
    }
}


const DrawCard = (task)=>`
<div id="${task.id}" class="card">
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
</div>
`



export {Start}