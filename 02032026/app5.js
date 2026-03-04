function saludar (){
    console.log("Hola como estas");
}

saludar();

function saludar2(nombre){
    console.log("Hola como estas "+nombre);
}
saludar2("Dulce");

function saludar3(nombre){
    return "Hola como estas "+ nombre;
}
console.log(saludar3("Dulce"));