let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
  for (let k = 0; k < lista.length; k++) {
    if (lista[k] >= listaIncluir[i]) {
      lista.splice(k, 0, listaIncluir[i]);
      k++;
    }
  }
}

console.log(lista);

const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = ['a', 'b', 'c'];
let arr2 = arr;

arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);


let arr3 = ['a', 'b', 'c'];
let arr4 = [...arr3];

arr4.push('d');

console.log(`Arr3 = ${arr3}`);
console.log(`Arr4 = ${arr4}`);
