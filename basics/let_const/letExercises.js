/* Herick Antonio de Souza Silva tem 20 anos, pesa 70 kg
tem 1.76 de altura e seu imc é de x 
Herick Antonio nasceu em 2002 */
const nome = "herick antonio"
const sobrenome = "de souza silva"
const idade = 20
const peso = 70
const altura = 1.76
const anoAtual = 2023
let imc=peso / (altura*altura); 
let anoNascimento=anoAtual - idade;
console.log (`${nome} ${sobrenome} tem ${idade} pesa ${peso} tem ${altura} de altura e seu imc é de ${imc} ${nome} ${sobrenome} nasceu em ${anoNascimento}`);
