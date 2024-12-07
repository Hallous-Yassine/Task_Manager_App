const express = require('express');
const projectController = require('../controllers/projectController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, projectController.createProject);

router.delete('/:id', authenticateToken, projectController.deleteProject);

router.put('/:id', authenticateToken, projectController.modifyProject);

module.exports = router;
