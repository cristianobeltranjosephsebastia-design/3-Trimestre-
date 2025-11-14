const JosephBeltranMisTareas = new JosephBeltranGestionTareas();

JosephBeltranMisTareas.agregar("Estudiar JavaScript");
JosephBeltranMisTareas.agregar("Hacer ejercicio");
JosephBeltranMisTareas.agregar("Preparar presentación");


JosephBeltranMisTareas.mostrar();


JosephBeltranMisTareas.completar(0);


JosephBeltranMisTareas.mostrar();


const stats = JosephBeltranMisTareas.JosephObtenerEstadisticas();
console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${stats.JosephBeltraTotal}`);
console.log(`Completadas: ${stats.JosephBeltranCompletadas}`);
console.log(`Pendientes: ${stats.Joseph}`);