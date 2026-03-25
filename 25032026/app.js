// definir el arreglo
let tareas = [];

// funcion para mostrar el menu
function mostrarMenu(){
    return parseInt(prompt(`
        OPciones disponibles
        1.-Agregar tarea
        2.-Ver todas las tareas
        3.-Marcar tarea como completada
        4.-Salir
        "Elige una opción:"
        `));
}

function agregarTarea(){
    let nombre = prompt("Introduce el nombre de la tarea \n");
    if(nombre){
        let nuevaTarea = {
            nombre: nombre,
            completada: false
        };

        tareas.push(nuevaTarea);

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

function verTarea(){
    if(tareas.length ===0){
        alert("Listas de tareas vacia");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1}.- ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

function marcarTareaComletada(){
    let numero = parseInt(prompt("Ingresa el numero de tarea para marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`
        La tarea : ${tarea[numero-1]} a sido marcada como completada   
            `);
    }else{
        alert("Numero de tarea invalido");
    }
}

//funcion de inicio para el flujo de nuestro programa
function iniciarPrograma(){
    let bandera = true;
    while(bandera){
        let opcion = mostrarMenu();
        
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaComletada();
                break;
            case 4:
                alert("Saliendo del programa");
                bandera = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
}

iniciarPrograma();