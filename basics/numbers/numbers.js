let num1 = 12.76;
let num2 = 24.42;
let result = (num1 + num2);

/* console.log(Number.isInteger(result)); */
// a ! faz usar o valor interno da expressão
if(!Number.isInteger(result)){
    console.log("ok")
}else{
    console.log("nada ok")
}
// como usar o resultado do Number.isInteger ser usado para uma ação, dependendo de se é true ou false?
