
let numeroaleat = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroaleat);

let adivinanza = parseInt(prompt("Ingresa un numero del 1 al 10"));
let vidas = 3;

while(numeroaleat !== adivinanza && vidas > 1){
    vidas --;
    adivinanza = parseInt(prompt("Intenta nuevamente"));
}

if(numeroaleat == adivinanza){
    console.log("Ganaste");
}else{
    console.log("Perdiste el numero corecto era:"+numeroaleat);
}