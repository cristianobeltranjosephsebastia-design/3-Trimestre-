class JosephBeltranAuto {
constructor(JosephBeltranMarca, JosephBeltranModelo) {
this.JosephBeltranMarca = JosephBeltranMarca;
this.JosephBeltranModelo = JosephBeltranModelo;
}

JosephBeltranObtenerDescripcion() {
return `${this.JosephBeltranMarca} ${this.JosephBeltranModelo}`;
}
}

export default JosephBeltranAuto;