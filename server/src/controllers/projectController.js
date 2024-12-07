const projectModel = require('../models/projectModel');

exports.createProject = async (req, res) => {
    const { project_name, description } = req.body;

    try {
        // Call the createProject function from the model
        const result = await projectModel.createProject(req.user.userId, project_name, description);

        res.status(201).json({ message: 'Project created', project: result.rows[0] });
    } catch (err) {
        console.error('Error creating project:', err);
        res.status(500).json({ error: 'Error creating project', details: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params;  // Get the project ID from the URL
    const userId = req.user.userId;  // Get the user ID from the JWT

    try {
        // Check if the project exists and belongs to the user
        const project = await projectModel.getProjectById(id);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        if (project.owner_id !== userId) {
            return res.status(403).json({ error: 'You are not authorized to delete this project' });
        }

        // Delete the project
        await projectModel.deleteProjectById(id);

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (err) {
        console.error('Error deleting project:', err);
        res.status(500).json({ error: 'Error deleting project', details: err.message });
    }
};

exports.modifyProject = async (req, res) => {
    const { id } = req.params;  // Get project ID from the URL
    const { project_name, description } = req.body;  // Get updated project details from the request body
    const userId = req.user.userId;  // Get the user ID from the JWT

    try {
        // Call the model function to modify the project
        const result = await projectModel.modifyProject(id, userId, project_name, description);
        
        const updatedProject = result.rows[0];
        if (!updatedProject) {
            return res.status(404).json({ error: 'Project not found or you are not authorized to update this project' });
        }

        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (err) {
        console.error('Error updating project:', err);
        res.status(500).json({ error: 'Error updating project', details: err.message });
    }
};
