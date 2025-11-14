class JosephBeltranBaseDeDatos {
constructor(url) {
if (JosephBeltranBaseDeDatos.instancia) {
return JosephBeltranBaseDeDatos.instancia;
}

this.url = url;
this.conectado = true;
JosephBeltranBaseDeDatos.instancia = this;
}
}

const db1 = new JosephBeltranBaseDeDatos("servidor_prod");
const db2 = new JosephBeltranBaseDeDatos("servidor_test");

console.log("URL db1:", db1.url);
console.log("URL db2:", db2.url);
console.log("¿Misma instancia?", db1 === db2); 