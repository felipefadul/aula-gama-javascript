const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Fadul',
  idade: 21,
  profissao: 'Software Engineer Intern'
};

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

// console.log(pessoa);
// console.log(profissao);

let { nome, sobrenome, idade, profissao, endereco } = pessoa;

console.log(nome, sobrenome, idade, profissao, endereco);