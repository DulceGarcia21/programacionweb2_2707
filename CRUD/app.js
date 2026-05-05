// cargar variables de entorno
require('dotenv').config();

// importar el módulo express
const express = require('express');

// importar modulo para el uso de rutas
const path = require('path');

//crear una instancia de express
const app = express();

//importar el archivo de rutas donde se maneja la logica del crud
const userRoutes = require('./routes/users');

//configurar el motor de plantillas ejs
app.set('view engine', 'ejs');

//definir la carpeta donde guardamos las  vistas
app.set('views', path.join(__dirname, 'views'));

// poner de forma publica la carpeta de public para css, js, imagenes, etc
app.use(express.static(path.join(__dirname, 'public')));

//middleware para parsear el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

//usar las rutas definidas en el archivo de rutas
app.use('/', userRoutes);

//puerto de escucha
const PORT = process.env.PORT || 3000;

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
