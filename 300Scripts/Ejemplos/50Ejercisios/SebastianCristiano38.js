let JosephBeltran_n38 = 20;
let JosephBeltran_primes38 = [];
for (let p=2;p<=JosephBeltran_n38;p++){let isP=true;for(let q=2;q<=Math.sqrt(p);q++) if(p%q===0){isP=false;break;} if(isP) JosephBeltran_primes38.push(p);}
console.log(JosephBeltran_primes38);
