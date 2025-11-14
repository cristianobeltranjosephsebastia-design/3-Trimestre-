const JosephBeltranVerificarAcceso = (JosephBeltranEdad) => JosephBeltranEdad >= 18 ? "Permitido" :"Denegado";

console.log("17 años:", JosephBeltranVerificarAcceso(17));
console.log("35 años:", JosephBeltranVerificarAcceso(35));
