class JosephBeltranAuto {
constructor(JosephBeltranMarca, JosephBeltranVelocidadInicial) {
this.JosephBeltranMarca = JosephBeltranMarca;
this._velocidad = JosephBeltranVelocidadInicial;
}

set JosephBeltranVelocidad(JosephValor) {
if (JosephValor >= 0) {
this._velocidad = JosephValor;
} else {
console.log("Error: Velocidad no puede ser negativa");
}
}

get JosephBeltranVelocidad() { 
return this._velocidad;
}
}

const JosephBeltranCarro = new JosephBeltranAuto("Ford", 80);
console.log("Velocidad:", JosephBeltranCarro.JosephBeltranVelocidad); 
JosephBeltranCarro.JosephBeltranVelocidad = 120;
JosephBeltranCarro.JosephBeltranVelocidad = -50; 