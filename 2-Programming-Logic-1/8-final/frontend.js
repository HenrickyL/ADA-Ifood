import {calculateLargestUnitOfTime, formatDate} from "./middleware.js"

const taskNameInput = document.getElementById('task-name');
const taskDescTextarea = document.getElementById('task-desc');
const addButton = document.getElementById('bt-add');

let isClickable = true;

window.setInterval(()=>{
    isClickable = true;
}, 600)

function clearInputs(){
    taskNameInput.value = ''
    taskDescTextarea.value = ''
}

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
    clearInputs()
    const tasksDiv = document.getElementById('tasks')
    if(tasks){
        tasks.forEach((task) => {
            const card = DrawCard(task);
            tasksDiv.appendChild(card); // Adiciona cada card à div de tasks
        });
    }
}


const DrawCard = (task)=>{
    const cardHtml = `
    <div id="${task.id}" class="card">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
    </div>
    `
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardHtml;
    
    cardElement.addEventListener('click',()=>{
        console.log('click')
    })
    return cardElement
}

const GetCardModal = (task)=>{
    const cardHtml = `
    <div id="${task.id}" class="card">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
    </div>
    `
}



export {Start}