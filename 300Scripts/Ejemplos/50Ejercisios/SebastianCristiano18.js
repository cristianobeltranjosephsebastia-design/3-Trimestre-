let x = 12, y = 18;
const gcd = (a, b) => b ? gcd(b, a % b) : a;
let mcm = (x * y) / gcd(x, y);
console.log(`El MCM de ${x} y ${y} es: ${mcm}`);
