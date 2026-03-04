// operadores logicos
/*
&&: si los dos son v = v
||: con que uno sea v = v
!: negacion
*/
/*
var compara = true && true;
console.log(compara);

var compara = true || false;
console.log(compara);

var compara = true || true;
console.log(compara);
*/

var compara = 5>2 && 6 !== 8;
console.log(compara);
//OR
var compara = 4>8 || 5 == 2;  // 0|0=0
console.log(compara);
var compara = 3 == 1 || 7>1; // 0|1=1
console.log(compara);
var compara = 4 !== 5 || 4<9; // 1|0=1
console.log(compara);
var compara = 2 ==2 || 8<9; // 1|1=1
console.log(compara);