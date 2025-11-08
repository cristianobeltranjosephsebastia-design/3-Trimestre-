let numeros = [3, 9, 1, 7, 4];
let opcion = "mayor";

switch (opcion) {
    case "mayor":
        console.log(`El mayor es: ${Math.max(...numeros)}`);
        break;
    case "menor":
        console.log(`El menor es: ${Math.min(...numeros)}`);
        break;
    default:
        console.log("Opción inválida");
}
