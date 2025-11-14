import fs from 'fs';

fs.readFile('SebastianCristianoCreate.txt', 'utf8', (err, data) => {
if (err) {
console.error("Error al leer:", err);
return;
}

console.log("=== Contenido de SebastianCristianoCreate.txt ===");
console.log(data);
console.log("============================");
});