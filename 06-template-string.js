let meuNome = 'Felipe';
let meuSobrenome = 'Fadul';
let minhaProfissao = 'Software Engineer Intern';

//Sem Template String
console.log('Olá, eu sou ' +
            meuNome +
            ' ' +
            meuSobrenome +
            ' e minha profissão é ' +
            minhaProfissao + '.');

//Com Template String
console.log(
  `Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}.`
);

console.log(`O resultado de 1 + 1 = ${1 + 1}.`);
console.log(`O objeto json ${{ chave: 'valor'}}`);

let meuObjeto = {
  chave: 'novo valor'
}

console.log(`O objeto json é ${meuObjeto.chave}`);