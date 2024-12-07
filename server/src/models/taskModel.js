// models/taskModel.js
const pool = require('../config/db');

// Create a new task
exports.createTask = async (projectId, assignedTo, taskName, description, status, priority, dueDate) => {
    return await pool.query(
        `INSERT INTO tasks (project_id, assigned_to, task_name, description, status, priority, due_date) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [projectId, assignedTo, taskName, description, status, priority, dueDate]
    );
};

// Delete a task
exports.deleteTask = async (taskId) => {
    return await pool.query(
        'DELETE FROM tasks WHERE task_id = $1',
        [taskId]
    );
};

// Modify an existing task
exports.modifyTask = async (taskId, assignedTo, taskName, description, status, priority, dueDate) => {
    return await pool.query(
        `UPDATE tasks 
         SET assigned_to = $1, task_name = $2, description = $3, status = $4, priority = $5, due_date = $6 
         WHERE task_id = $7 
         RETURNING *`,
        [assignedTo, taskName, description, status, priority, dueDate, taskId]
    );
};
