let a = 24, b = 36;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log(`El MCD es: ${a}`);
