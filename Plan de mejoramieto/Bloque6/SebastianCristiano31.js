import fs from 'fs';

const JosephBeltranNuevaLinea =
"--- Este es una verificacion del append de Sebastian Cristiano\n";

fs.appendFile('SebastianCristianoCreate.txt', JosephBeltranNuevaLinea, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Dato agregado (APPEND)");
});