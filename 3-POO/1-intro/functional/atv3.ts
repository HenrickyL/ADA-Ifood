const averageOdd : (nums: number[]) => number = (nums: number[]) =>{
    const odds = nums.filter(x=>x%2!==0);
    return odds.reduce((acc, x) =>acc + x, 0)/odds.length;
}


console.log(averageOdd([1,2,3,4,5]))// (1+3+5) /3 = 20
console.log(averageOdd([1,2,3,4,5,6,7]))
console.log(averageOdd([1,2,3,4,5,11]))
console.log(averageOdd([1,2,3,4,5,6,2,11]))
console.log(averageOdd([1,2,3,4,5,7,1,2,3]))


