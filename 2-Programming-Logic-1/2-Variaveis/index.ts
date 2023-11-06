
function CalculateStarRating(rating:number[]) : number{
    let accumulator: number = 0
    for(let i=0; i < rating.length; i++){
        accumulator += (i+1)* rating[i]
    }
    return accumulator/100
}

//vou usar index do vetor para representar as estrelas
const rating : number[] = [2,15,18,25,40]
console.log(`Stars Rating: ${CalculateStarRating(rating)} Stars`)
