function Order(words: string[]): string[]{
    return words.sort((current,next)=> current.length - next.length )
}

const palavras: string[] = [ "banana", "uva", "abacaxi","laranja"]

console.log("before: ",palavras)
console.log("after:", Order(palavras))