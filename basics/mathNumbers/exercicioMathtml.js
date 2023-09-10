const numero = Number(prompt("Digite um numero:"));
const numeroTitle = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitle.innerHTML = numero
texto.innerHTML = " ";
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>Seu numero é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo:${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado pra cima:${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Como fica seu numero com duas casas decimais:${numero.toFixed(2)}.</p>`;
