import {Start} from "./frontend.js"

let tasks = [
    {
        id: 1,
        title: "EEEEE",
        description: " asdas asdasd  dasdas dasdasd",
        createdAt: new Date()
    }
]
window.addEventListener('load', ()=>{
    try {
        //start front, chamar handleTasks e validar os dados
        Start(tasks, handleTasks, handleValidate)
        // Menu()
    } catch (error) {
        alert("Erro: "+error.message)
        Start(tasks)
    }
})

const handleTasks = {
    /*1. Add Tarefa
    2. Editar Tarefa
    3. Remover Tarefa
    4. Listar Tarefas
    5. Obter Tarefa por Id*/
    add : (newTask)=>{
        tasks.push(newTask)
    },
    edit: (id, task)=>{
        for(let t of tasks){
            if(t.id == id){
                t.title = task.title
                t.description = task.description
                break;
            }
        }
    },
    delete: (id)=>{
        tasks = tasks.filter(x=>x.id != id)
    },
    getAll: ()=>{
        return tasks
    },
    getById: (id)=>{
        return tasks.find(x=>x.id == id)
    }
}


const handleValidate = {
    ValidateTask,
    ValidateDuplicatedTask
}
//Validacoes
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