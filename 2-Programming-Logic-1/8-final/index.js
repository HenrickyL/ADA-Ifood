import {Start} from "./frontend.js"

const tasks = []
window.addEventListener('load', ()=>{
    try {
        //start front, chamar handleTasks e validar os dados
        Start(tasks, handleTasks)
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
    edit: ()=>{

    },
    remove: ()=>{

    },
    getAll: ()=>{

    },
    getById: ()=>{

    }
}
