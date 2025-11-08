let numeroPrimo = 13;
let esPrimo = numeroPrimo > 1;
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) { esPrimo = false; break; }
}
console.log(`${numeroPrimo} ${esPrimo ? "es primo" : "no es primo"}`);
