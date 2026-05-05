const express = require('express'); //import express module
const router = express.Router(); //create a new router object
const db = require('../db'); //import the database connection

//mostrar todos los usuarios en raiz
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users'; //query to select all users from the database
    db.query(sql, (err, results) => { //query to select all users from the database
        if (err) {
            console.error(err); //log any errors
            res.status(500).json({ error: 'Error fetching users' });
        } else {
            res.render('index', { users: results });
        }
    });
});

//agregar un nuevo usuario
router.post('/add', (req, res) => {
    const {nombre, correo} = req.body; //get the name and email from the request body
    const sql = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';
    db.query(sql, [nombre, correo], (err, result) => { 
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error adding user' });
        } else {
            res.redirect('/');
        }
    });
});

//mostrar el formulario para el usuario existente
router.get('/edit/:id', (req, res) => {
    const id = req.params.id; //get the user id from the request parameters
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error fetching user' });
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

//actualizar un usuario existente
router.post('/update/:id', (req, res) => {
    const{nombre, correo} = req.body;
    const id = req.params.id;
    const sql = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';
    db.query(sql, [nombre, correo,id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        } else {
            res.redirect('/');
        }
    });
});

//eliminar usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;

