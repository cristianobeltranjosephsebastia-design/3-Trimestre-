import fs from 'fs';
import { JosephBeltranEstudiante, JosephBeltranRegistroEstudiantes } from './SebastianCristiano37_2.js';

const JosephBeltranRegistro = new JosephBeltranRegistroEstudiantes();


JosephBeltranRegistro.agregar(new JosephBeltranEstudiante("Ana", [85, 90, 88]));
JosephBeltranRegistro.agregar(new JosephBeltranEstudiante("Carlos", [78, 82, 80]));
JosephBeltranRegistro.agregar(new JosephBeltranEstudiante("María", [92, 95, 91]));


console.log("Promedio general del curso:",
JosephBeltranRegistro.JosephBeltranPromedioGeneral());


fs.writeFile(
'estudiantes.json',
JosephBeltranRegistro.aJSON(),
(err) => {
if (err) {
console.error("Error al guardar:", err);
return;
}
console.log("Datos guardados exitosamente en estudiantes.json");
}
);


fs.readFile('estudiantes.json', 'utf8', (err, data) => {
if (err) {
console.log("Archivo no existe aún");
return;
}

const JosephBeltranDatosEstudiantes = JSON.parse(data);
console.log("\nDatos cargados desde archivo:");
console.log(JosephBeltranDatosEstudiantes);
});