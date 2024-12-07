const pool = require('../config/db');

exports.createProject = async (owner_id, project_name, description) => {
    return await pool.query(
        'INSERT INTO projects (owner_id, project_name, description) VALUES ($1, $2, $3) RETURNING *',
        [owner_id, project_name, description]
    );
};

// Retrieve project by ID
exports.getProjectById = async (id) => {
    const result = await pool.query('SELECT * FROM projects WHERE project_id = $1', [id]);
    return result.rows[0];
};

// Delete project by ID
exports.deleteProjectById = async (id) => {
    return await pool.query('DELETE FROM projects WHERE project_id = $1', [id]);
};

// Function to modify an existing project
exports.modifyProject = async (id, ownerId, projectName, description) => {
    return await pool.query(
        `UPDATE projects 
         SET project_name = $1, description = $2 
         WHERE project_id = $3 AND owner_id = $4 
         RETURNING *`,
        [projectName, description, id, ownerId]
    );
};