function JosephBeltranArregloS(Joseph) {
let JosephBeltranSuma = 0;
for (let i = 0; i < Joseph.length; i++) {
JosephBeltranSuma += Joseph[i];
}
return JosephBeltranSuma;
}

let JosephBeltranVentas = [100, 200, 300, 400, 500];
console.log("Total:", JosephBeltranArregloS(JosephBeltranVentas));
