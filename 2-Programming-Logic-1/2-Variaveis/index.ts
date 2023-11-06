
function CalculateStarRating(rating:number[]) : number{
    let accumulator: number = 0
    for(let i=0; i < rating.length; i++){
        accumulator += (i+1)* rating[i]
    }
    const total = rating.reduce((acc, value)=>acc+value,0)

    return accumulator/total
}

//vou usar index do vetor para representar as estrelas
const rating : number[] = [2,15,18,25,40]
console.log(`Stars Rating: ${CalculateStarRating(rating)} Stars`)
