let alumno = {
    id: 987654321,
    nombre: "Dulce",
    primerApellido: "Garcia",
    segundoApellido: "Cruz",
    edad: 22,
    titulado: true, 
    egresado: { 
        egresados: true,
        semestreCursado: 10,
        materiasDever: true,
        turno: "matutino", // se mantiene igual
        promedio: 9.3,     // se mantiene igual
    },
    domicilio: {
        calle: "Av. Insurgentes",
        numero: {
            exterior: 1500,
            interior: "A302",
        },
        colonia: "Del Valle",
        alcaldia: "Benito Juarez",
        estado: "CDMX",
        pais: "Mexico",
        continente: "America",
    },
    kinder: {
        nombre: "Colegio Pequeños Genios",
        actividadesPrimerdia: function(){
            console.log("saludar");
        },
        actividadesRecurentes: function(){
            console.log("dibujar");
        },
        datosMiss: {
            nombre: "Laura",
            edad: 35,
            estudios: "Licenciatura"
        }
    },
    primaria: {
        nombre: "Escuela Benito Juarez",
        comer(comida){
            return "Ahora está comiendo " + comida;
        },
        mensaje(mensajeAlumno){
            return `${this.nombre} es la primaria y el alumno tiene que ir a ${mensajeAlumno}`;
        }
    }
};
console.log(alumno.kinder.datosMiss.nombre);
console.log(alumno.primaria.mensaje("Direccion"));
console.log(alumno.primaria.comer("nuggets"));