const somaQuadradosPares : (nums: number[]) => number = (nums: number[]) =>{
    return nums.filter(x=>x%2==0).reduce((acc, x) =>acc+ x*x, 0);
}


console.log(somaQuadradosPares([1,2,3,4,5]))// 2^2 + 4^2 = 20