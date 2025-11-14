class JosephBeltranProducto {
constructor(JosephBeltranNombre, JosephBeltranPrecio, JosephBeltranCantidad) {
this.JosephBeltranNombre = JosephBeltranNombre;
this.JosephBeltranPrecio = JosephBeltranPrecio;
this.JosephBeltranCantidad = JosephBeltranCantidad;
}

JosephBeltranValorTotal() {
return this.JosephBeltranPrecio * this.JosephBeltranCantidad;
}

static JosephBeltranCategoriaBase() {
return "General";
}
}

class JosephBeltranProductoElectronico extends JosephBeltranProducto {
constructor(JosephBeltranNombre, JosephBeltranPrecio, JosephBeltranCantidad, JosephBeltranGarantia) {
super(JosephBeltranNombre, JosephBeltranPrecio, JosephBeltranCantidad);
this.JosephBeltranGarantiaMeses = JosephBeltranGarantia;
this.JosephBeltranCategoria = "Electrónico";
}
}

class JosephBeltranProductoAlimenticio extends JosephBeltranProducto {
constructor(JosephBeltranNombre, JosephBeltranPrecio, JosephBeltranCantidad, JosephBeltranFecha) {
super(JosephBeltranNombre, JosephBeltranPrecio, JosephBeltranCantidad);
this.JosephBeltranFechaVencimiento = JosephBeltranFecha;
this.JosephBeltranCategoria = "Alimenticio";
}
}

class JosephBeltranInventario {
constructor() {
this.JosephBeltranProductos = [];
}

JosephBeltranAgregar(JosephBeltranProducto) {
this.JosephBeltranProductos.push(JosephBeltranProducto);
}JosephBeltran

JosephBeltranBuscarPorCategoria(JosephBeltranCategoria) {
return this.JosephBeltranProductos.filter(
p => p.JosephBeltranCategoria === JosephBeltranCategoria
);
}
}