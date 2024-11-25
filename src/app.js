const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes.js');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Usuarios');
});

module.exports = app;