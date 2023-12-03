import {Autor, Livro, Biblioteca} from "./models"



const martin = new Autor("George R. R. Martin", "EUA")
const jk = new Autor("J. K. Rowling", "UK")
const glen = new Autor("Glen Cook", "EUA")


const livros : Livro[] =[
    new Livro("A Companhia Negra", 1984, glen),
    new Livro("Sombras Eternas", 1984, glen),
    new Livro("A rosa branca", 1985, glen),

    new Livro("A Guerra dos Tronos", 1996, martin),

    new Livro("Harry Potter: A pedra filosofal", 2001, jk),
    new Livro("Harry Potter: Prisioneiro de Azkaban", 2004, jk),
]

const biblioteca = new Biblioteca();

livros.forEach(livro => biblioteca.adicionar(livro))


const buscas = ["Glen", "George", "tolkien"]

console.clear()
buscas.forEach(autor => {
    console.log('-------------------------\n')
    const livros = biblioteca.get(autor)
    if(livros && livros.length > 0){
        livros[0].autor.exibirDetalhes();
        livros.forEach(livro=>livro.detalhesDoLivro())
    }else{
        console.log(`Nenhum livro encontrado para o autor: ${autor}`)
    }

})





