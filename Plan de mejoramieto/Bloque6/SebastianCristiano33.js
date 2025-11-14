import fs from 'fs';

function JosephBeltranActualizarContenido(JosephBeltranNuevoContenido) {
fs.writeFile('SebastianCristianoCreate.txt', JosephBeltranNuevoContenido, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo actualizado (UPDATE)");
});
}

const JosephBeltranContenidoActualizado =
"Registro actualizado: " +
new Date().toLocaleString() + "\n";

JosephBeltranActualizarContenido(JosephBeltranContenidoActualizado);