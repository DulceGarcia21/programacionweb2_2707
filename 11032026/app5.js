const frutas=[];
const fruta = prompt("¿Que fruta quieres comprar?");
// Agrega fruta
frutas.push(fruta);

while(confirm("¿Quieres agregar otra fruta?")){
    const fruta =prompt("Que fruta quieres agregar: ");
    frutas.push(fruta);
}

console.log('Usted compro:');
for (const fruta of frutas) {
    console.log(fruta);
    
}