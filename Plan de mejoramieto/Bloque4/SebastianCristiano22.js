class JosephBeltranAuto {
constructor(JosephBeltranMarca, JosephBeltranModelo) {
this.JosephBeltranMarca = JosephBeltranMarca;
this.JosephBeltranModelo = JosephBeltranModelo;
}

static JosephBeltranInformacionGeneral() {
return "Clase base para gestión de vehículos";
}
}


console.log(JosephBeltranAuto.JosephBeltranInformacionGeneral());

const carro = new JosephBeltranAuto("Ford", "Focus");
