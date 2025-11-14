class JosephBeltranDireccion {
constructor(JosephBeltranCalle, JosephBeltranCodigoPostal) {
this.JosephBeltranCalle = JosephBeltranCalle;
this.JosephBeltranCodigoPostal = JosephBeltranCodigoPostal;
}
}

class JosephBeltranCliente {
constructor(JosephBeltranNombre, JosephBeltranDireccion) {
this.JosephBeltranNombre = JosephBeltranNombre;
this.JosephBeltranDireccion = JosephBeltranDireccion;
}

JosephBeltranMostrarUbicacion() {
console.log(`${this.JosephBeltranNombre} vive en:
${this.JosephBeltranDireccion.JosephBeltranCalle},
CP ${this.JosephBeltranDireccion.JosephBeltranCodigoPostal}`);
}
}

const JosephBeltranmiDireccion = new Direccion(
"Avenida Central 456", "10101"
);
const Juan = new JosephBeltranCliente("Juan Pérez", JosephBeltranmiDireccion);
Juan.JosephBeltranMostrarUbicacion();