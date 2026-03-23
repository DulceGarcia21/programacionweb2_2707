let nombres = [];
function agregarNombre(){
    let nombre = prompt("Ingresa el nombre a agregar");
    if(nombre){
        nombres.push(nombre);
        alert(`! Nombre ${nombre} - Se agrego de manera exitosa `);
    } else {
        alert(`El nombre no puede estar vacio`);
    }
}
function mostrarNombres(){
    console.log(nombres);
}

function agregarNombre(){
    let nombre = prompt("Ingresa el nombre a agregar");
    
    if(nombre){
        nombres.push(nombre); // aquí estaba el error
        alert(`¡Nombre ${nombre} agregado de manera exitosa!`);
    } else {
        alert("El nombre no puede estar vacío");
    }
}

function mostrarNombres(){
    if(nombres.length === 0){
        alert("NO hay nombre en el arreglo porque esta vacio");
    }else{
        let mensaje = "Nombres almacenados\n";
        nombres.forEach((nombre,indice)=>{
            mensaje+=`${indice+1}.- ${nombre}\n`;
        });

        alert(mensaje)
    }
}

function mostrarMenu(){
    let opcion;
    
    do{
        opcion = prompt(`
            1.- Agregar nombre
            2.- Mostrar nombres
            3.- Salir
            Elige una opción:
        `);
        
        switch(opcion){
            case "1":
                agregarNombre(); // corregido
                break;
            case "2":
                mostrarNombres(); // corregido
                break;
            case "3":
                alert("Saliendo del programa");
                break;
            default:
                alert("Opción no válida");
        }
    } while(opcion !== "3"); // faltaba la condición
}
mostrarMenu();
