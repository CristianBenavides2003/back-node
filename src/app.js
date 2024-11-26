const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes.js');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Usuarios');
});

module.exports = app;