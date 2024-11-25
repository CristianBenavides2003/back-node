const express = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers.js/userController.js');


const router = express.Router();

// Define las rutas
router.get('/', getAllUsers);       // Obtener todos los usuarios
router.get('/:id', getUserById);   // Obtener un usuario por ID
router.post('/', createUser);      // Crear un usuario
router.put('/:id', updateUser);    // Actualizar un usuario
router.delete('/:id', deleteUser); // Eliminar un usuario

module.exports = router;