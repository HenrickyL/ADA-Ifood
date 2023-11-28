class Carro{
    private _estaSeMovendo: boolean = false;
    constructor(private _modelo: string, private _ano:number, private _ligado: boolean = false){}

    public ligar(){
        this._ligado = true;
    }
    public desligar(){
        this._ligado = false;
    }
    public acelerar(){
        if(this._ligado)
            this._estaSeMovendo = true;
        else
            console.log("não pode acelerar um carro desligado!")
    }
    public frear(){
        if(this._ligado)
            this._estaSeMovendo = false;
        else
            console.log("não pode frear um carro desligado!")

    }

    public Status(): string{
        return `
            Modelo: ${this._modelo}
            Ano: ${this._ano}
            ${this._ligado ? "Ligado" : "Desligado"}
            ${this._estaSeMovendo ? "Se Movendo" : "Parado"}
        `
    }
}

type CarAction = {
    car: Carro,
    actions: number[]
}

const carros : CarAction[] = [
    {car: new Carro("BMW", 2012), actions: [1,2,3,4]},
    {car: new Carro("Fusca", 1970), actions: [1, 3, 4]},
    {car: new Carro("Chevete", 2001), actions: [4,3, 1, 4, 2 , 1, 3, 2,4]},
]


carros.forEach(x=>{
    let actions = "";
    for(let action of x.actions){
        switch (action) {
            case 1:
                x.car.ligar();
                actions += "Ligar > "
                break;
            case 2:
                x.car.desligar();
                actions += "Desligar > "
                break;
            case 3:
                x.car.acelerar();
                actions += "Acelerar > "
                break;
            case 4:
                x.car.frear();
                actions += "Frear > "
                break;
            default:
                break;
        }
    }
    console.log(x.car.Status())
    console.log(actions)
    console.log('---------')
})