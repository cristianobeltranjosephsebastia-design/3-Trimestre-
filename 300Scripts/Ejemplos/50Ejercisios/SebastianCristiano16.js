let limite = 10;
let fib = [0, 1];
for (let i = 2; i < limite; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`Serie Fibonacci (${limite} términos):`, fib.join(", "));
