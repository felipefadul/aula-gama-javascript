var nome = "Felipe";

if (nome === "Felipe") {
  console.log("Legal! Seu nome é este mesmo!");
} 
else if(nome === "Fadul") {
  console.log("Tudo bem, você também serve.");
} else {
  console.log("Que pena! Seu nome não é Felipe.");
}

switch (nome) {
  case 'Felipe':
    console.log('Legal! Você é o Felipe mesmo!');
    break;
  case 'Fadul':
    console.log('Ah! Você também serve!');
    break;
  default:
    console.log("Que pena! Você mão é quem eu estou esperando");
    break;
}