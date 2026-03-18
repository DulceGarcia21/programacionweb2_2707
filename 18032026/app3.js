let alumno={
    id: 321137104,
    nombre: "Dulce",
    primerApellido: "Garcia",
    segundoApellido: "Cruz",
    edad: 20,
    titulado: false, 
    egresado:{ 
        egresados: false,
        semestreCursado: 6,
        materiasDever: false,
        turno: "matutino",
        promedio: 9.3,
    },
    domicilio:{
        calle: "Regina",
        numero: {
            exterior: 61,
            interior: "F201",
        },
        colonia: "Centro",
        alcaldia: "Cuautemoc",
        estado: "CDMX",
        pais: "Mexico",
        continente: "latinoamerica",
    },
    kinder:{
        nombre: "Instituto Villa de Cortes",
        actividadesPrimerdia: function(){
            console.log("llorar");
        },
        actividadesRecurentes: function(){
            console.log("Jugar");
        }
    },
    primaria:{
        nombre: "Instituto Villa de Cortes",
        comer (comida){
            return "Ahora esta comiendo "+comida;
        },
        mensaje (mensajeAlumno){
            return `${this.nombre} es la primaria y el alumno tiene que ir a ${mensajeAlumno}`
        }
    }
}
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("nuggets"));