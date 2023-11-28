class Pessoa{
    private _name: string;
    private _idade: number;
    private _cidade: string;

    constructor(name: string, idade: number, cidade: string ){
        this._name = name
        this._idade = idade
        this._cidade = cidade
    }

    public calcularIdadeBissextos(ano : number) : number{
        //não entendi o conceito do método, sei que quem nasceu em ano bissexto e no dia 29 fevereiro poderia dar
        //alguma confusão na hora de calcular a idade, mas apenas com idade e ano não deveria ter alguma confusão
        const isBissexto : boolean = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
        //calc o ano que a pessoa nasceu em relação ao atual
        const anoNascimento : number = (new Date()).getFullYear() - this._idade;
        return ano - anoNascimento;
    }
}


const pessoa1 = new Pessoa('Maria', 30, 'Fortaleza');
const pessoa2 = new Pessoa('Pedro', 25, 'Quixada');
console.log(pessoa1.calcularIdadeBissextos(2025))
console.log(pessoa2.calcularIdadeBissextos(2012))



