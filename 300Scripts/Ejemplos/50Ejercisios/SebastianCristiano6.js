let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);
let estado =
    imc < 18.5 ? "Bajo peso" :
        imc < 25 ? "Normal" :
            imc < 30 ? "Sobrepeso" : "Obesidad";

console.log(`IMC: ${imc.toFixed(2)} (${estado})`);
