const nome = 'Lucas Melo';
const sobrenome = 'de Souza';
const idade = 22;
const peso = 72;
const altura = 1.75;

let indiceDeMassaCorporal = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é: ${indiceDeMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}!`);