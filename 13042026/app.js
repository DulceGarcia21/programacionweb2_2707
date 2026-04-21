function agregarPantalla(value) {
    document.getElementById("pantalla").value += value;
}
function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}
function calcularResultado() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }

}

document.addEventListener("keydown", function(event) {
    const tecla = event.key;
    if ((tecla >= '0' && tecla <= '9') || ['+', '-', '*', '/', '.'].includes(tecla)) {
        agregarPantalla(tecla);
    } else if (tecla === 'Enter') {
        event.preventDefault();
        calcularResultado();
    } else if (tecla === 'Backspace') {
        let pantalla = document.getElementById("pantalla");
        pantalla.value = pantalla.value.slice(0, -1);
    } else if (tecla === 'Escape') {
        limpiarPantalla();
    }
});