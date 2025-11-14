let JosephProductos = [
{ nombre: "Leche", agotado: true },
{ nombre: "Pan", agotado: false },
{ nombre: "Huevos", agotado: false }
];

letJosephHayAgotados = JosephProductos.some(JosephProducto =>JosephProducto.agotado === true);
console.log(JosephHayAgotados);


let hayJosephProductosCaros =
JosephProductos.some(JosephProducto => JosephProducto.JosephPrecio >
100);
console.log(hayJosephProductosCaros);


let CrisNumeros = [10, 25, 30, 45];
let JosephhayNumerosGrandes = CrisNumeros.some(Josephnum=> Josephnum > 40);
console.log(JosephhayNumerosGrandes);