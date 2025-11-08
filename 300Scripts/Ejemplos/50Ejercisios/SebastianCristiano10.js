let anio = 2024;
let bisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
console.log(bisiesto ? "Es bisiesto" : "No es bisiesto");
