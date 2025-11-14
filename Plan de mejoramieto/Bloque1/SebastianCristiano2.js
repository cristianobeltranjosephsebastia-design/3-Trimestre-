let JosephBeltran1 = prompt("Ingrese primer valor:");
let JosephBeltran2 = prompt("Ingrese segundo valor:");


let CristianoS1 = parseInt(JosephBeltran1, 10);
let CristianoS2 = parseInt(JosephBeltran2, 10);


if (isNaN(CristianoS1) || isNaN(CristianoS2)) {
alert("Por favor ingrese números válidos");
} else {
let Resultado = CristianoS1 + CristianoS2;
alert(`El resultado de ${CristianoS1} + ${CristianoS2} = ${Resultado}`);
}