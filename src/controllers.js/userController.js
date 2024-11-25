const db = require('../config/db');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    const { id, nombre, correo } = req.body;
    try {
        await db.query('INSERT INTO users (id, nombre, correo) VALUES (?, ?, ?)', [id, nombre, correo]);
        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    try {
        const [result] = await db.query('UPDATE users SET nombre = ?, correo = ? WHERE id = ?', [nombre, correo, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};