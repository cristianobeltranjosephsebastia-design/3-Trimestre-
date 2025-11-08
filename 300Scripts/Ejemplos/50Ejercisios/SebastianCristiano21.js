let n1 = 8, n2 = 6, n3 = 10;
let operacion = "promedio";
let resultado;

switch (operacion) {
    case "promedio":
        resultado = (n1 + n2 + n3) / 3;
        console.log(`El promedio es: ${resultado}`);
        break;
    default:
        console.log("Operación no válida");
}
