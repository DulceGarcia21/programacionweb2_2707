//Cargar las variables de entorno desde el archivo .env
require('dotenv').config();
//Cargar el módulo mysql2 para conectarse a la base de datos
const mysql = require('mysql2');
//Crear una conexión a la base de datos utilizando las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//validar  si la conexion se ha establecido correctamente
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});
//Exportar la conexión para que pueda ser utilizada en otros archivos
module.exports = connection;