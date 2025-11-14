class JosephBeltranElectrico extends Auto {
constructor(JosephBeltranMarca, JosephBeltranModelo, JosephBeltranAutonomia) {
super(JosephBeltranMarca, JosephBeltranModelo);
this.JosephBeltranAutonomiaBateria = JosephBeltranAutonomia;
}

JosephBeltranMostrarInfo() {
return `${super.JosephBeltranObtenerDescripcion()},
Autonomía: ${this.JosephBeltranAutonomiaBateria} km`;
}
}

const tesla = new JosephBeltranElectrico(
"Tesla", "Model 3", 500
);
console.log(tesla.JosephBeltranMostrarInfo());