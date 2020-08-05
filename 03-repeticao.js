var numeroSorteado = 10;

var tabuada = 7;

for (var indice = 0; indice <= 10; indice++) {
 console.log("Valor de " + tabuada + " x " + indice + " = " + tabuada * indice);
}

for (var indice = 0; indice < 100; indice++) {
  if (numeroSorteado === indice) {
    console.log('Seu numero foi encontrado');
    break;
  }
}

var achou = false;

var repetições = 10;
var possivelValor = 0;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado === possivelValor) {
    achou = true;
    console.log('Achei o possível valor.')
  }
  else {
    console.log("Possivel valor não corresponde ao numero sorteado " + possivelValor);
  }
}