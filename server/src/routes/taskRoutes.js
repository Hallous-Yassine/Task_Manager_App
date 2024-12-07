// routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a task
router.post('/', authenticateToken, taskController.createTask);

// Route to delete a task by ID
router.delete('/:taskId', authenticateToken, taskController.deleteTask);

// Route to modify a task by ID
router.put('/:taskId', authenticateToken, taskController.modifyTask);

module.exports = router;
