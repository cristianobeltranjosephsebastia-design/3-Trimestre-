let JosephUsuarios = [
{ id: 1, nombre: "Ana", activo: true },
{ id: 2, nombre: "Juan", activo: false },
{ id: 3, nombre: "María", activo: true }
];

let JosephUsuarioActivo = JosephUsuarios.find(JosephUsuario =>
JosephUsuario.activo === true);
console.log(JosephUsuarioActivo);

let JosephUsuarioInexistente = JosephUsuarios.find(JosephUsuario=> JosephUsuario.id === 99);
console.log(JosephUsuarioInexistente);


let CristianoPrimerNumeroPar = [1, 3, 4, 5, 6].find(num=> num % 2 === 0);
console.log(CristianoPrimerNumeroPar);
