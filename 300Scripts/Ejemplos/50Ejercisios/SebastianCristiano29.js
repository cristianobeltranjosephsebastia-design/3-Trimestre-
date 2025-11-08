let JosephBeltran_list29 = [2,3,2,4,2,5];
let JosephBeltran_find29 = 2;
let JosephBeltran_action29 = 1;
let JosephBeltran_count29 = 0;
switch (JosephBeltran_action29) {
  case 1:
    for (let n of JosephBeltran_list29) if (n === JosephBeltran_find29) JosephBeltran_count29++;
    break;
  case 2:
    JosephBeltran_count29 = JosephBeltran_list29.includes(JosephBeltran_find29);
    break;
  default:
    JosephBeltran_count29 = null;
}
console.log(JosephBeltran_count29);
