import {calculateLargestUnitOfTime, formatDate} from "./middleware.js"

const taskNameInput = document.getElementById('task-name');
const taskDescTextarea = document.getElementById('task-desc');
const addButton = document.getElementById('bt-add');
const modalContent = document.getElementById('content');
const modal = document.getElementById('modal');


let isClickable = true;
let isEditable = false
let showModal = false
let currentTask = null

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

let handleTasks
let handleValidate

function Start(tasks, _handleTasks, _handleValidate){
    if(_handleTasks)
        handleTasks = _handleTasks
    if(_handleValidate)
        handleValidate = _handleValidate

    Draw()
    addButton.addEventListener('click', ()=>{
        if(!isValidClick()) return
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
            Draw()
        } catch (error) {
            alert("Erro: "+error.message)
            Start(tasks)
        }
    })
}

function Draw(){
    const tasks = handleTasks.getAll()
    //tasks: task[]
    clearInputs()
    const tasksDiv = document.getElementById('tasks')
    if(tasks){
        tasksDiv.innerHTML = ''
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
    
    cardElement.addEventListener('click',(event)=>{
        modalContent.innerHTML = ''
        const taskId = event.currentTarget.querySelector('.card').id
        const task = handleTasks.getById(taskId)
        currentTask = task
        const newCard = GetCardModal(currentTask)
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
        <input id="modal-card-input" type="text" value="${task.title}" ${!isEditable ? 'disabled': ''}>
        <textarea id="modal-card-textarea" ${!isEditable ? 'disabled': ''} cols="30" rows="10">${task.description}</textarea>
        <span>${calculateLargestUnitOfTime(task.createdAt)}</span>
    </div>
    `
    const cardElement = document.createElement('div');
    cardElement.innerHTML = cardHtml;

    return cardElement
}



closeImg.addEventListener('click', ()=>{
    showModal = false;
    modal.className = 'hidden'
    Draw()
})

editImg.addEventListener('click', ()=>{
    if(!isValidClick()) return
    if(isEditable ){
        const title = document.getElementById('modal-card-input').value.trim()
        const description = document.getElementById('modal-card-textarea').value.trim()
        const newTask = {
            id: currentTask.id,
            title,
            description
        }
        if(!isEqual(handleTasks.getById(currentTask.id), newTask))
            handleTasks.edit(currentTask.id, newTask)    
    }
    isEditable = !isEditable;
    if(currentTask){
        modalContent.innerHTML=''
        const element = GetCardModal(currentTask)
        modalContent.appendChild(element)
    }
})

deleteImg.addEventListener('click', ()=>{
    if(!isValidClick()) return
    if(currentTask){
        handleTasks.delete(currentTask.id)
    }
    showModal = false;
    modal.className = 'hidden'
    Draw()
})



function isEqual(task1, task2){
    return  task1.id === task2.id && 
            task1.title === task2.title &&
            task1.description === task2.description
}

function isValidClick(){
    if(isClickable){
        isClickable = false;
        return true;
    }
    return false
}
export {Start}