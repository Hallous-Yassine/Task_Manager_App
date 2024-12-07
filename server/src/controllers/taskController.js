// controllers/taskController.js
const taskModel = require('../models/taskModel');

// Controller to create a new task
exports.createTask = async (req, res) => {
    const { project_id, assigned_to, task_name, description, status, priority, due_date } = req.body;

    try {
        const result = await taskModel.createTask(project_id, assigned_to, task_name, description, status, priority, due_date);
        res.status(201).json({ message: 'Task created successfully', task: result.rows[0] });
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ error: 'Error creating task', details: err.message });
    }
};

// Controller to delete a task
exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        await taskModel.deleteTask(taskId);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        console.error('Error deleting task:', err);
        res.status(500).json({ error: 'Error deleting task', details: err.message });
    }
};

// Controller to modify a task
exports.modifyTask = async (req, res) => {
    const { taskId } = req.params;
    const { assigned_to, task_name, description, status, priority, due_date } = req.body;

    try {
        const result = await taskModel.modifyTask(taskId, assigned_to, task_name, description, status, priority, due_date);
        
        const updatedTask = result.rows[0];
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found or you are not authorized to modify this task' });
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (err) {
        console.error('Error updating task:', err);
        res.status(500).json({ error: 'Error updating task', details: err.message });
    }
};
