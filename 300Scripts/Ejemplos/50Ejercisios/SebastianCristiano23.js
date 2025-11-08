let arreglo = [5, 10, 15, 20];
let accion = "sumar";
let resultado = 0;

switch (accion) {
    case "sumar":
        for (let valor of arreglo) resultado += valor;
        console.log(`Suma total: ${resultado}`);
        break;
    case "promedio":
        for (let valor of arreglo) resultado += valor;
        console.log(`Promedio: ${resultado / arreglo.length}`);
        break;
    default:
        console.log("Acción no reconocida");
}
