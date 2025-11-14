let JosephNumeros = [10, 20, 30, 40];

JosephNumeros.forEach(function(JosephNumero, CristianoIndex) {console.log(`El número en la posición ${CristianoIndex}es ${JosephNumero}`);});


let JosephProductos = [
{ JosephNombre: "Laptop", JosephPrecio: 1200 },
{ JosephNombre: "Mouse", JosephPrecio: 25 },
{ JosephNombre: "Teclado", JosephPrecio: 75 }
];

JosephProductos.forEach(JosephProducto => {
console.log(`Producto: ${JosephProducto.JosephNombre},
Precio: $${JosephProducto.JosephPrecio}`);
});
