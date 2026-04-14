document.getElementById("calculadora-form").addEventListener("submit", 
    function(event){
        event.preventDefault(); // Evite que el fromulario se envie y recargue la pagina
        let numero1 = parseFloat(document.getElementById("numero1").value);
        let numero2 = parseFloat(document.getElementById("numero2").value);

        let operador = document.getElementById("operacion").value;
        let resultado;

        switch(operador){
            case "sum":
                resultado = numero1 + numero2;
                break;
            case "sub":
                resultado = numero1 - numero2;
                break;
            case "mul":
                resultado = numero1 * numero2;
                break;
            case "div":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = "Error: División por cero";
                }
                break;
            default:
                resultado = "Operador no válida";
        }

        document.getElementById("resultado").textContent = "El resultado es: " + resultado;
    }
);