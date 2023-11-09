
interface Sale{
    product: string,
    value: number,
    coupon: number,
    amount: number
}

interface TotalSales {
    totalValue: number; 
    totalDiscountedValue: number; 
    quantityOfProducts: number;
}

function formatData(str:string): Sale[]{
    const sales = str[str.length-1] ===';' ? str.split(';').slice(0,-1) : str.split(';');
    console.log(sales, "\n----------------------")
    let salesList = sales.map((x:string): Sale =>{
        let aux = x.split('/').map((item:string)=>item.trim())
        const product = aux[0]
        aux = aux[1].split("=")
        const value = Number(aux[0].substring(5))
        const coupon = Number(aux[1].substring(5))
        return {
            product,
            value,
            coupon,
            amount: str.split(product).length-1 // 'x.....x.....x....x.....' 5-1
        }
    })
    console.log(salesList)
    return salesList
}

function calculateTotalTotals(salesList: Sale[]): TotalSales{
    return {
        totalValue: salesList.reduce((acc, item) => item.value + acc, 0),
        totalDiscountedValue: salesList.reduce((acc, item) => item.coupon + acc, 0),
        quantityOfProducts: salesList.reduce((acc, item) => item.amount + acc, 0),
    }
}

console.clear()
const test = "nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0";
const sales1 = formatData(test)
const result1 = calculateTotalTotals(sales1)
console.log(result1)
const test2 = "régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;"
const sales2 = formatData(test2)
const result2 = calculateTotalTotals(sales2)
console.log(result2)

