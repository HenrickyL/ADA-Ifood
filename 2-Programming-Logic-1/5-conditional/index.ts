function IMC(height: number, weight: number) : number{
    return weight / (height * height)
}



function IMCResult( imcValue: number): void{
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


interface Data{
    height: number,
    weight: number
}



const data: Data[] = [
    { height: 1.70, weight: 45 },
    { height: 1.65, weight: 70 },
    { height: 1.80, weight: 120 },
    { height: 1.55, weight: 70 },
    { height: 1.75, weight: 75 },
    { height: 1.60, weight: 55 },
    { height: 1.85, weight: 90 },
    { height: 1.50, weight: 42 },
    { height: 1.72, weight: 55 },
    { height: 1.67, weight: 98 }
];


data.forEach(x=>IMCResult(IMC(x.height, x.weight)))