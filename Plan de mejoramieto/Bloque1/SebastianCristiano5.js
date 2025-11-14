const JosephBeltranTasa = 0.15;

let JosephBeltranPrString = prompt("Ingrese el precio:");
let JosephBeltranPrecio = Number(JosephBeltranPrString);

if (!isNaN(JosephBeltranPrecio)) {
let JosephBeltranImpuesto = JosephBeltranPrecio * JosephBeltranTasa;
let JosephBeltranTotal = JosephBeltranPrecio + JosephBeltranImpuesto;

console.log("Precio base:", JosephBeltranPrecio);
console.log("Impuesto (15%):", JosephBeltranImpuesto.toFixed(2));
console.log("Total a pagar:", JosephBeltranTotal.toFixed(2));
} else {
console.log("Error: Entrada inválida");
}