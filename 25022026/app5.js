console.log("------------------OR-------------------");
//OR
var compara = 4>8 || 5 == 2;  // 0||0=0
console.log(compara);

var compara = 3 == 1 || 7>1; // 0||1=1
console.log(compara);

var compara = 4 !== 5 || 9<4; // 1||0=1
console.log(compara);

var compara = 2 ==2 || 8<9; // 1||1=1
console.log(compara);

//AND
console.log("------------------AND-------------------");
var compara = 6 < 2 && 10 == 5; // 0&&0=0
console.log(compara);

var compara = 9 == 3 && 12 > 4; // 0&&1=0
console.log(compara);

var compara = 15 > 7 && 8 < 3; // 1&&0=0
console.log(compara);

var compara = 20 >= 10 && 14 != 9; // 1&&1=1
console.log(compara);

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
var compara = 5>2 && 6 !== 8;
console.log(compara);
*/