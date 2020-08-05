function soma(operadorA, operadorB) {
  var resultado = operadorA + operadorB;
  return resultado;
}

function olaGama(nome) {
  console.log("Olá, Gama! Você é o " + nome);
}

var resultadoDaSoma = soma(1, 2);
var resultadoNovoDaSoma = soma(10, 66);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama("Felipe");