function JosephBeltranClasificarTemperatura(JosephBeltranFahrenheit) {
if (JosephBeltranFahrenheit >= 14 && JosephBeltranFahrenheit < 32) {
return "Temperatura baja";
} else if (JosephBeltranFahrenheit >= 32 && JosephBeltranFahrenheit < 68) {
return "Temperatura adecuada";
} else if (JosephBeltranFahrenheit >= 68 && JosephBeltranFahrenheit < 96) {
return "Temperatura alta";
} else {
return "Temperatura desconocida";
}
}


console.log(JosephBeltranClasificarTemperatura(25));
console.log(JosephBeltranClasificarTemperatura(50)); 
console.log(JosephBeltranClasificarTemperatura(85)); 