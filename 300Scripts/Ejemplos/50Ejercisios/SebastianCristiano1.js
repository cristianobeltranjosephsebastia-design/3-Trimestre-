let num1 = 5;
let operador = '+';
let num2 = 3;
let resultado;

if (operador === '+') resultado = num1 + num2;
else if (operador === '-') resultado = num1 - num2;
else if (operador === '*') resultado = num1 * num2;
else if (operador === '/') resultado = num2 !== 0 ? num1 / num2 : "Error: división por cero";
else resultado = "Operador inválido";

console.log("Resultado:", resultado);
