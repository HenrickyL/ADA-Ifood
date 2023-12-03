class Autor{
    constructor(private _autor: string, 
        private _nacionalidade:string){}

    get name():string{
        return this._autor
    }

    get nacionalidade():string{
        return this._nacionalidade
    }

    public exibirDetalhes(): void{
        console.log(`autor: ${this._autor}\nnacionalidade: ${this._nacionalidade}`)
    }
}

class Livro{
    constructor(private _titulo: string, 
        private  _anoPublicacao: number, private _autor: Autor){}


    get titulo(): string{
        return this._titulo
    }

    get anoPublicacao(): number{
        return this._anoPublicacao
    }

    get autor(): Autor{
        return this._autor
    }

    public detalhesDoLivro():void{
        console.log(`Titulo: ${this.autor}\nAnoPublicacao: ${this.anoPublicacao}\nAutor: ${this.autor.name}`)
    }

}


class Biblioteca{
    private _livros: Livro[] = []
    constructor(){}


    public adicionar(livro: Livro):void{
        this._livros.push(livro)
    }


    get livros():Livro[]{
        return this._livros
    }

    public get(autor:string): Livro | null{
        const current = this.livros.find(x=>x.autor.name.toLowerCase() === autor.toLowerCase())
        return current ?? null
    }
}



export {Autor, Livro, Biblioteca}