export class JosephBeltranEstudiante {
constructor(JosephBeltranNombre, JosephBeltranCalificaciones) {
this.JosephBeltranNombre = JosephBeltranNombre;
this.JosephBeltranCalificaciones = JosephBeltranCalificaciones;
}

JosephBeltranPromedio() {
const suma = this.JosephBeltranCalificaciones.reduce(
(acc, cal) => acc + cal, 0
);
return (suma / this.JosephBeltranCalificaciones.length).toFixed(2);
}
}

export class RegistroEstudiantes {
constructor() {
this.JosephBeltranEstudiantes = [];
}

JosephBeltranAgregar(JosephBeltranEstudiante) {
this.JosephBeltranEstudiantes.push(JosephBeltranEstudiante);
}

JosephBeltranBuscar(JosephBeltranNombre) {
return this.JosephBeltranEstudiantes.find(e => e.JosephBeltranNombre === JosephBeltranNombre);
}

JosephBeltranPromedioGeneral() {
const JosephBeltranPromedios = this.JosephBeltranEstudiantes.map(e =>
parseFloat(e.JosephBeltranPromedio())
);
const suma = JosephBeltranPromedios.reduce((a, b) => a + b, 0);
return (suma / JosephBeltranPromedios.length).toFixed(2);
}

aJSON() {
return JSON.stringify(this.JosephBeltranEstudiantes, null, 2);
}
}