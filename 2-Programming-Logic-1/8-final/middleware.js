function calculateLargestUnitOfTime(dataCriacao) {
    const dataAtual = new Date(); // Obtém a data atual
  
    // Calcula a diferença entre as datas em milissegundos
    const diferencaEmMilissegundos = dataAtual - dataCriacao;
  
    // Definir as unidades de tempo em milissegundos para [seg, min, horas, dias, meses, anos]
    const unidadesDeTempo = [1000, 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000, 30 * 24 * 60 * 60 * 1000, 365 * 24 * 60 * 60 * 1000];
  
    // Definir os nomes correspondentes das unidades de tempo
    const nomesUnidades = ['segundos', 'minutos', 'horas', 'dias', 'meses', 'anos'];
  
    // Encontrar a maior unidade de tempo em que a diferença de tempo se encaixa
    let maiorUnidade = 'segundos';
    let maiorValor = diferencaEmMilissegundos / unidadesDeTempo[0];
  
    for (let i = 1; i < unidadesDeTempo.length; i++) {
      const valor = diferencaEmMilissegundos / unidadesDeTempo[i];
      if (valor >= 1) {
        maiorValor = valor;
        maiorUnidade = nomesUnidades[i];
      } else {
        break; // Para quando encontrar a primeira unidade de tempo que encaixa
      }
    }
  
    return `${Math.floor(maiorValor)} ${maiorUnidade} atrás`;
  }


  function formatDate(data) {
    const meses = [
      'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
      'jul', 'ago', 'set', 'out', 'nov', 'dez'
    ];
  
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
  
    return `${dia} ${mes} ${ano}`;
}

export {
    formatDate,
    calculateLargestUnitOfTime
}