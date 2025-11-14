class JosephBeltranAuto {
constructor(JosephBeltranMarca, JosephBeltranModelo) {
this.JosephBeltranMarca = JosephBeltranMarca;
this.JosephBeltranModelo = JosephBeltranModelo;
}

JosephBeltranDescripcion() {
return `Marca: ${this.JosephBeltranMarca}, Modelo: ${this.JosephBeltranModelo}`;
}
}

const JosephBeltranMiAuto = new Auto("Toyota", "Corolla");
console.log(JosephBeltranMiAuto.JosephBeltranDescripcion());


export default JosephBeltranAuto;