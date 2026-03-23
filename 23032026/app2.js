let productos =[
    {nombre: 'camisa', precio : 300},
    {nombre: 'pantalon', precio : 550},
    {nombre: 'zapatos', precio : 750},
    {nombre: 'sombrero', precio : 550}
];

let carrito=[];
/* ---funcion para mostrar el menu---*/
function mostrarMenu(){
    let menu = "Seleccione un producto para agrgar al carrito\n";
    for (let i = 0;i<productos.length; i++){
        menu += (i+1)+".-"+productos[i].nombre+"- $"+productos[i].precio+"\n";
    }

    menu += (productos.length+1)+".- Ver carrito y total\n";
    menu += (productos.length+2)+".- Salir";

    return menu;
}

function agregarAlCarrito(index){
    let productoSelecconado = productos[index];
    carrito.push(productoSelecconado);
    console.log(`Producto ${productoSelecconado.nombre} se agrego a el carrito `)
}

function mostrarCarritoTotal(){
    if (carrito.length === 0){
        console.log("El carrito esta vacio");
    }else{
        let mensajeCarrito = "Carrito de compras\n";
        let total = 0;
        for (let i = 0; i<carrito.length;i++){
            mensajeCarrito+= (i+1)+".- "+carrito[i].nombre+" -$"+carrito[i].precio+"\n";
            total+= carrito[i].precio;
        }
        mensajeCarrito+="\n Total: $"+total;
        console.log(mensajeCarrito);
    }
}

/*----Menu de inicio----*/ 
let opcion;
do{
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);
    //Verificar si  la opcion es valida
    if(isNaN(opcion)|| opcion <1 || opcion > productos.length+2){
        console.log("Opcion no valida, por favor intenta nuevamente");
    }else if(opcion >= 1 && opcion <= productos.length){
        agregarAlCarrito(opcion-1);
    }else if(opcion === opcion.length+1){
        mostrarCarritoTotal();
    }
}while(opcion !== productos.length+2);

console.log("Gracias por su compra :)");