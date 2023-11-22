import {Start} from "./frontend.js"

const tasks = []
window.addEventListener('load', ()=>{
    try {
        Start(tasks)
        // Menu()
    } catch (error) {
        alert("Erro: "+error.message)
        Start(tasks)
    }
})


function Menu(){
    const option = prompt(`
    TODO-LIST
    Options:
        1. Add Tarefa
        2. Editar Tarefa
        3. Remover Tarefa
        4. Listar Tarefas
        5. Obter Tarefa por Id        
    `)
    ValidateIsNumber(option)
    const currentOp = Number(option)
    SetOption(currentOp)
}

function ValidateIsNumber(option){
    if(isNaN(option)){
        throw new Error("Digite um número válido!")
    }
}
function SetOption(currentOp){
    switch (currentOp) {
        case 1:
            options.add()
            break;
        case 2:
            options.edit()
            break;
        case 3:
            options.remove()
            break;
        case 4:
            options.getAll()
            break;
        case 5:
            options.getById()
            break;
        default:
            throw new Error("Opção inválida")
    }
}
const taskList = []
const options = {
    /*1. Add Tarefa
    2. Editar Tarefa
    3. Remover Tarefa
    4. Listar Tarefas
    5. Obter Tarefa por Id*/
    add : ()=>{

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

function getTask(){

}