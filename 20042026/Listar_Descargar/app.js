// variable y referencias al Dom
const form = document.getElementById("userForm");
const salida = document.getElementById("salidaJSON");
const descargarBtn = document.getElementById("descargarBtn");

// Inicializar el array de usuarios desde localStorage o crear uno nuevo 
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//mostrar los usuarios en la salida
mostrarUsuarios();

// Evento para enviar datos desde el formulario
form.addEventListener("submit",
    function (e) {
        e.preventDefault(); // Evitar el envío del formulario
        //Obtener valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value.trim();
        // crear un objeto con los datos del usuario
        const nuevoUsuario = {
            nombre: nombre,
            email: email
        };
        // Agregar a el array
        usuarios.push(nuevoUsuario);
        // Guardar en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        // Mostrar los usuarios actualizados
        mostrarUsuarios();
        // Limpiar el formulario
        form.reset();
    });

function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2); 
}

// Evento para descargar el JSON
descargarBtn.addEventListener("click", 
    function () {
        const contenidoJSON = JSON.stringify(usuarios, null, 2);
    //creacion de un blob con el contenido JSON
    // Blob es un objeto que representa un archivo con datos, en este caso el JSON de usuarios
    const blob = new Blob([contenidoJSON], { type: "application/json" });
    // Crear una url para el blob
    const url = URL.createObjectURL(blob);
    // Crear un enlace de descarga <a> y simular un clic para descargar el archivo
    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.json";
    a.click(); // ejecutar el clic para iniciar la descarga
    // Liberar la URL del blob después de la descarga
    URL.revokeObjectURL(url);
    });