let JosephBeltranLibros = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];
console.log("Libros iniciales:", JosephBeltranLibros.length); 


JosephBeltranLibros.push("Moby Dick");
console.log("Después de push:", JosephBeltranLibros.length); 
console.log("Libros:", JosephBeltranLibros);


let JosephBeltranEliminado = JosephBeltranLibros.pop();
console.log("Libro removido:", JosephBeltranEliminado); 
console.log("Libros finales:", JosephBeltranLibros.length);