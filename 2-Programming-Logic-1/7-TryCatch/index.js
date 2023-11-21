
function IMC(height, weight){
    if(height <= 0){
        throw new Error("Altura não pode ser menor ou igual a zero.")
    }
    if(weight <= 0){
        throw new Error("Peso não pode ser menor ou igual a zero.")
    }
    return weight / (height * height)
}



function IMCResult( imcValue){  
    if(imcValue < 18.5){
        console.log("Abaixo do peso")
    }else if( 18.5 <= imcValue && imcValue < 24.9){
        console.log("Peso Normal")
    }else if(25 <= imcValue && imcValue < 29.9){
        console.log("Sobrepeso")
    }else if(imcValue >= 30){
        console.log("Obsidade")
    }
}


window.addEventListener("load", (event)=>{
    try {
        const weight = Number(prompt("Digite seu Peso:"))
        if(isNaN(weight)){
            throw new Error("Altura não é um erro")
        }
        const height = Number(prompt("Digite sua Altura:"))
        if(isNaN(weight)){
            throw new Error("Altura não é um erro")
        }
        IMCResult(IMC(height, weight))
    } catch (error) {
        alert("Erro: "+error.message)
    }

})
