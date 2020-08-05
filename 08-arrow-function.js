function soma(x, y) {
  return x + y;
}

console.log(soma(5, 7));

const multiplicacao = function(x, y) {
  return x * y;
} 

console.log(multiplicacao(5, 5));

//Arrow function
const dividir = (x, y) => {
  return x / y;
}

console.log(dividir(10, 2));

const dividirEnxuto = (x, y) => x / y;

console.log(dividirEnxuto(25, 2));

const objeto = () => ({ nome: 'Felipe', sobrenome: 'Fadul' });

console.log(objeto);