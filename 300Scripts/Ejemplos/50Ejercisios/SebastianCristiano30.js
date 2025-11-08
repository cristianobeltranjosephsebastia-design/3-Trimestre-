let JosephBeltran_nums30 = [9,2,7,1,5];
let JosephBeltran_ord30 = 1;
let JosephBeltran_r30;
switch (JosephBeltran_ord30) {
  case 1:
    JosephBeltran_r30 = [...JosephBeltran_nums30].sort((a,b)=>a-b);
    break;
  case 2:
    JosephBeltran_r30 = [...JosephBeltran_nums30].sort((a,b)=>b-a);
    break;
  default:
    JosephBeltran_r30 = null;
}
console.log(JosephBeltran_r30);
