const JosephBeltranTienda = new JosephBeltranInventario();


JosephBeltranTienda.JosephBeltranAgregar(new JosephBeltranProductoAlimenticio("Laptop", 1200, 5, 24));
JosephBeltranTienda.JosephBeltranAgregar(new JosephBeltranProductoAlimenticio("Mouse", 25, 20, 12));


JosephBeltranTienda.JosephBeltranAgregar(new JosephBeltranProductoAlimenticio("Leche", 3, 50, "2024-12-31"));
JosephBeltranTienda.JosephBeltranAgregar(new JosephBeltranProductoAlimenticio("Pan", 2, 30, "2024-12-15"));


const electronicos = JosephBeltranTienda.JosephBeltranBuscarPorCategoria("Electrónico");
console.log("\n=== PRODUCTOS ELECTRÓNICOS ===");
electronicos.forEach(p => {
console.log(`${p.JosephBeltranNombre} - $${p.JosephBeltranPrecio} - Stock: ${p.JosephBeltranCantidad}`);
console.log(`Garantía: ${p.JosephBeltranGarantiaMeses} meses`);
console.log(`Valor total: $${p.JosephBeltranValorTotal()}\n`);
});


const JosephBeltranValorTotal = JosephBeltranTienda.JosephProductos.reduce(
(sum, p) => sum + p.JosephBeltranValorTotal(), 0
);
console.log(`Valor total del inventario: $${JosephBeltranValorTotal}`);