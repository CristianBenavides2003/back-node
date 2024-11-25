const swaggerJSDoc = require('swagger-jsdoc');

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'API para gestionar usuarios con id, nombre y correo.',
    },
    servers: [
      {
        url: 'http://localhost:8001', // URL base de la API
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta a los archivos con anotaciones de Swagger
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
