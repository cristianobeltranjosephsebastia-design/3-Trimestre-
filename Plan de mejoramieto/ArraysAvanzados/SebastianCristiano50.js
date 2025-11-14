let JosephEstudiantes = [
{ nombre: "Carlos", aprobado: true },
{ nombre: "Elena", aprobado: true },
{ nombre: "Pedro", aprobado: true }
];

let todosAprobados =
JosephEstudiantes.every(JosephEstudiante =>
JosephEstudiante.aprobado === true);
console.log(todosAprobados);


JosephEstudiantes[1].aprobado = false; 
todosAprobados = JosephEstudiantes.every(JosephEstudiante=> JosephEstudiante.aprobado === true);
console.log(todosAprobados);


let JosephEdades = [18, 22, 35, 19];
let todosMayoresDeEdad = JosephEdades.every(CristianoEdad=> CristianoEdad >= 18);
console.log(todosMayoresDeEdad);
