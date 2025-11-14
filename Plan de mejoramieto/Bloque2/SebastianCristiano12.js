let JosephBeltranCola = ["Cliente A", "Cliente B", "Cliente C"];
console.log("Cola inicial:", JosephBeltranCola);

let JosephBeltranAtendido = JosephBeltranCola.shift();
console.log("Cliente atendido:", JosephBeltranAtendido);
console.log("Cola después de shift:", JosephBeltranCola);


JosephBeltranCola.unshift("Cliente Prioritario");
console.log("Cola final:", JosephBeltranCola);