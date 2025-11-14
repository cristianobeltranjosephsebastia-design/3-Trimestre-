class JosephBeltranGestionTareas {
constructor() {
this.JosephBeltranTareas = [];
}

JosephAgregar(JosephBeltranTarea) {
this.JosephBeltranTareas.push(JosephBeltranTarea);
console.log(`Tarea agregada: "${JosephBeltranTarea}"`);
}

JosephCompletar(JosephBeltranIndice) {
if (JosephBeltranIndice >= 0 && JosephBeltranIndice < this.JosephBeltranTareas.length) {
this.JosephBeltranTareas[JosephBeltranIndice] = "7 " + this.JosephBeltranTareas[JosephBeltranIndice];
console.log("Tarea marcada como completada");
} else {
console.log("Índice inválido");
}
}

JosephObtenerEstadisticas() {
const JosephBeltraTotal = this.JosephBeltranTareas.length;
const JosephBeltranCompletadas = this.JosephBeltranTareas.filter(
t => t.startsWith("7")
).length;
const JosephBeltranPendientes = JosephBeltraTotal - JosephBeltranCompletadas;

return { JosephBeltraTotal, JosephBeltranCompletadas, JosephBeltranPendientes };
}

JosephMostrar() {
console.log("\n=== LISTA DE TAREAS ===");
this.JosephBeltranTareas.forEach((JosephBeltranTarea, i) => {
console.log(`${i}. ${JosephBeltranTarea}`);
});
}
}