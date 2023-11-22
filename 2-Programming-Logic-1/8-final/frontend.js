import {calculateLargestUnitOfTime, formatDate} from "./middleware.js"

const taskNameInput = document.getElementById('task-name');
const taskDescTextarea = document.getElementById('task-desc');
const addButton = document.getElementById('bt-add');
const modalContent = document.getElementById('content');
const modal = document.getElementById('modal');


let isClickable = true;
let isEditable = false
let showModal = false

const editImg = document.querySelector('.edit')
const deleteImg = document.querySelector('.delete')
const closeImg = document.querySelector('.close')


window.setInterval(()=>{
    isClickable = true;
}, 600)

function clearInputs(){
    taskNameInput.value = ''
    taskDescTextarea.value = ''
}

function Start(tasks, handleTasks, handleValidate){
    Draw(tasks, handleTasks, handleValidate)
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
            Draw(tasks, handleTasks, handleValidate)
        } catch (error) {
            alert("Erro: "+error.message)
            Start(tasks)
        }
    })
}

function Draw(tasks, handleTasks, handleValidate){
    //tasks: task[]
    clearInputs()
    const tasksDiv = document.getElementById('tasks')
    if(tasks){
        tasks.forEach((task) => {
            const card = DrawCard(task, handleTasks, handleValidate);
            tasksDiv.appendChild(card); // Adiciona cada card à div de tasks
        });
    }
}


const DrawCard = (task, ValidateTask, handleValidate)=>{
    const cardHtml = `
    <div id="${task.id}" class="card">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
    </div>
    `
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardHtml;
    
    cardElement.addEventListener('click',(event)=>{
        modalContent.innerHTML = ''
        const taskId = event.currentTarget.querySelector('.card').id
        const task = ValidateTask.getById(taskId)
        const newCard = GetCardModal(task)
        modalContent.appendChild(newCard)

        showModal = true
        modal.className = ''
    })
    return cardElement
}

const GetCardModal = (task)=>{
    const cardHtml = `
    <div id="${task.id}" class="card">
        <h3>Tarefa</h3>
        <input type="text" value="${task.title}" ${!isEditable && 'disabled'}>
        <textarea ${!isEditable && 'disabled'} cols="30" rows="10">${task.description}</textarea>
        <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
    </div>
    `
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardHtml;

    return cardElement
}



closeImg.addEventListener('click', (event)=>{
    showModal = false;
    modal.className = 'hidden'
})

export {Start}