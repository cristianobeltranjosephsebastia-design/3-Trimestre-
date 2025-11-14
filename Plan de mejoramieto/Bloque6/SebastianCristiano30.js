import fs from 'fs';

const JosephBeltranFecha = new Date().toISOString();
const JosephBeltranContenido = `Log creado: ${JosephBeltranFecha}\n`;

fs.writeFile('SebastianCristianoCreate.txt', JosephBeltranContenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo creado exitosamente (CREATE)");
});