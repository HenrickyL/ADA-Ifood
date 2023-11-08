interface Partner{
    id: string,
    name: string
}

interface GroupPartners{
    PF: Partner[],
    PJ: Partner[]
}

//se tiver 11 digitos é cpf se não cnpj(14dig)
function IsCPF(id: string): boolean{
    return id.length === 11;
}

const PartnerList : Partner[] = [
    { id: "19660156627897", name: "Fernanda Santos" },
    { id: "23998058019370", name: "Rafael Souza" },
    { id: "92291338611", name: "Maria Silva" },
    { id: "55443795656", name: "Maria Souza" },
    { id: "77743761456", name: "Ana Costa" },
    { id: "47202302326", name: "Maria Ferreira" },
    { id: "58017232567", name: "Sofia Costa" },
    { id: "16733009491247", name: "Lucas Silva" },
    { id: "63351859919", name: "Rafael Souza" },
    { id: "84297701780", name: "Carlos Oliveira" }
]

function SeparatePartnersAndAssociates(list:Partner[]):GroupPartners{
    return{
        PF: list.filter(x=>IsCPF(x.id)),
        PJ: list.filter(x=>!IsCPF(x.id))
    }
}

console.log(SeparatePartnersAndAssociates(PartnerList))