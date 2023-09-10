Operadores Aritméticos, + adição, - subtração, * multiplicação, / divisão, % resto da divisão,
  potenciação, '' concatenação, ++ incremento, -- decremento, += atribuição com adição, -= atribuição com subtração,
 *= atribuição com multiplicação, /= atribuição com divisão, %= atribuição com resto da divisão, = atribuição com potenciação,
 = atribuição, == igualdade, === igualdade estrita, != desigualdade, !== desigualdade estrita, > maior que, < menor que,
 >= maior ou igual que, <= menor ou igual que, && and, || or, ! not, ? : ternário.

const num1 = 5;
const num2 = 10;
const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;
const exp = num1 ** num2;
console.log(Adiçao: ${add}, Subtração: ${sub}, Multiplicação: ${mult}, Divisão: ${div}, Resto da Divisão: ${mod}, Potenciação: ${exp}.);

*Contador*
let contador = 1;
contador++; // contador = contador + 1;
console.log(contador);

let contadorDescremento = 10;
contadorDescremento--; // contadorDescremento = contadorDescremento - 1;
console.log(contadorDescremento);

let contador2 = 1;
let passos = 2;
contador2 += passos; // contador2 = contador2 + passos;
console.log(contador2);

Possivel escapar o erro de 2x " usando ' ou \\ "um\"texto"\"
.concat adiciona texto ao final de um texto ja const

*Numbers*
num.toString() = juntar o caractere do numero a função
(Number.isInteger(x)) = verifica se o numero em questão é inteiro
num= Number(num.toFixed(quantidade de casas desejadas)) = simplifica numeros decimais

*Math*
Math.floor(x) = arredondar pra baixo
Math.ceil(x) = arredondar pra cima
Math.round(x) = arredonda para o valor mais proximo
Math.max(sequencia de numeros) = mostra o maior
Math.min(sequencia de numeros) = mostra o menor
Math.random() = gera numero aleatorio
Math.pow(x , y) = eleva o numero de x por y (pode ser substituido só por (x ** y))
(x ** 0.5) = raiz quadrada do numero


*Array*
Array é um objeto global usado na construção de 'arrays', que são objetos de alto nível semelhantes a listas.
Lenght é uma propriedade que retorna o número de elementos no array.
Push é um método que adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
Pop é um método que remove o último elemento de um array e retorna aquele elemento.
Shift é um método que remove o primeiro elemento de um array e retorna aquele elemento.
Unshift é um método que adiciona um ou mais elementos no início de um array e retorna o novo comprimento desse array.
IndexOf é um método que retorna o primeiro índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
LastIndexOf é um método que retorna o último índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
Slice é um método que retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original.
Splice é um método que altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
Concat é um método que retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
Join é um método que junta todos os elementos de um array em uma string e retorna esta string.
Reverse é um método que inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
Sort é um método que ordena os elementos de um array de acordo com a função de comparação passada.
Fill é um método que preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
Includes é um método que determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
Find é um método que retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.

const names = ['Max', 'Manuel' ,'Anna'];
const ages = [30, 29, 31];

console.log(names.length, ages.length);
console.log(names[0], ages[0]);

git add .
git commit -m "finalmente"
git push LearningJs master

caso não funcione, pull antes de push