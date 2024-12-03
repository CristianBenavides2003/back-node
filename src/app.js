const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors'); // Importa cors

const app = express();

// Middleware para parsear JSON
app.use(express.json());

const dbOptions = {
    host: 'mysql-service',
    port: 3306,
    user: 'root',
    password: '', // Cambia esto si tu contraseña es diferente
    database: 'dbusers' // Base de datos actualizada
};

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(myconn(mysql, dbOptions, 'single'));
app.use(cors()); 

// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes.js');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Usuarios');
});

module.exports = app;