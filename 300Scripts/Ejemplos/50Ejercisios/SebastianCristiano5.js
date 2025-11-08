let temperatura = 30;
let tipo = 'F'; 

if (tipo === 'F') console.log(`${temperatura}°C son ${(temperatura * 9/5 + 32).toFixed(2)}°F`);
else if (tipo === 'C') console.log(`${temperatura}°F son ${((temperatura - 32) * 5/9).toFixed(2)}°C`);
else console.log("Tipo inválido");
