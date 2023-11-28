abstract class Animal {
    constructor(protected _nome:string, protected _tipo: string ){}

    get nome(): string {
        return this._nome;
    }
    get tipo(): string {
        return this._tipo;
    }
}

class Mamifero extends Animal{
    constructor(name: string) {
        super(name, "Mamifero");
    }

    public amamentar(){
        console.log(`O ${this.tipo} '${this.nome}' Amamentou`)
    }
}

class Ave extends Animal{
    constructor(name: string) {
        super(name, "Ave");
    }

    public voar (){
        console.log(`O ${this.tipo} '${this.nome}' Voou`)
    }
}


const animais : Animal[] = [
    new Mamifero("Rex"),
    new Ave("Poly"),
    new Mamifero("Ralph"),
    new Mamifero("Perseu"),
    new Mamifero("Lulu"),
    new Ave("Loro"),
    new Ave("Azul"),
]


animais.forEach(x=> {
    if(x instanceof Ave)
        x.voar()
    else if(x instanceof Mamifero)
        x.amamentar()
} )