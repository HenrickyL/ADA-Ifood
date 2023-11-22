import {calculateLargestUnitOfTime, formatDate} from "./middleware.js"

const taskNameInput = document.getElementById('task-name');
const taskDescTextarea = document.getElementById('task-desc');
const addButton = document.getElementById('bt-add');

function ValidateTask(title, description){
    if(!title)
        throw new Error("Titulo não pode ser null.")
    if(title.length < 4)
        throw new Error("Titulo tem que ter no minimo 4 caracteres")
    //--------------------
    if(!description)
        throw new Error("Descrição não pode ser null.")
    if(description.length < 20)
        throw new Error("Descrição tem que ter no minimo 20 caracteres")
}

function ValidateDuplicatedTask(newTask, tasks){
    const exist = tasks.find(x=>
        x.title.toLowerCase() == newTask.title.toLowerCase())
    if(exist)
        throw new Error(`Titulo '${newTask.title}' já existe.`)

}

function Start(tasks){
    Draw(tasks)
    addButton.addEventListener('click', ()=>{
        try {
            const id =  tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;
            const title = taskNameInput.value.trim()
            const description = taskDescTextarea.value.trim()
            ValidateTask(title, description)
            const newTask = {
                id,
                title,
                description,
                createdAt: new Date()
            }
            ValidateDuplicatedTask(newTask, tasks)
            tasks.push(newTask)
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