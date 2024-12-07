import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function MainPage() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [currentTask, setCurrentTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  // Handle creating a new project
  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: Date.now(),
        name: newProjectName,
        tasks: [],
      };
      setProjects([...projects, newProject]);
      setNewProjectName('');
    } else {
      alert('Please provide a project name.');
    }
  };

  // Handle adding a task to a project
  const handleAddTask = (projectId) => {
    if (currentTask.trim()) {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectId
            ? { ...project, tasks: [...project.tasks, { text: currentTask, completed: false }] }
            : project
        )
      );
      setCurrentTask('');
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (projectId, taskIndex) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((_, index) => index !== taskIndex),
            }
          : project
      )
    );
  };

  // Handle starting the task editing process
  const handleEditTask = (projectId, taskIndex) => {
    const project = projects.find((project) => project.id === projectId);
    setCurrentTask(project.tasks[taskIndex].text);
    setEditingTaskIndex(taskIndex);
  };

  // Handle saving the edited task
  const handleSaveTask = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task, index) =>
                index === editingTaskIndex ? { ...task, text: currentTask } : task
              ),
            }
          : project
      )
    );
    setEditingTaskIndex(null);
    setCurrentTask('');
  };

  // Toggle task completion status
  const toggleTaskCompletion = (projectId, taskIndex) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task, index) =>
                index === taskIndex ? { ...task, completed: !task.completed } : task
              ),
            }
          : project
      )
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <button className="w-full p-2 text-left bg-blue-600 rounded hover:bg-blue-700">
              Projects
            </button>
          </li>
          <li className="mb-4">
            <Link to="/profile">
            <button className="w-full p-2 text-left bg-blue-600 rounded hover:bg-blue-700">
              Settings
            </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Projects Dashboard</h1>
        </div>

        {/* Add New Project */}
        <div className="mb-8">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            placeholder="Enter project name"
            className="p-2 border border-gray-300 rounded-lg w-full mb-4"
          />
          <button
            onClick={handleCreateProject}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Create Project
          </button>
        </div>

        {/* Display Projects and Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <p>No projects yet. Add a new project.</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>

                {/* Task input and add button */}
                <input
                  type="text"
                  value={currentTask}
                  onChange={(e) => setCurrentTask(e.target.value)}
                  placeholder="Enter task"
                  className="p-2 border border-gray-300 rounded-lg w-full my-4"
                />
                {editingTaskIndex === null ? (
                  <button
                    onClick={() => handleAddTask(project.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Add Task
                  </button>
                ) : (
                  <button
                    onClick={() => handleSaveTask(project.id)}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                  >
                    Save Task
                  </button>
                )}

                {/* Task List */}
                <ul className="mt-4">
                  {project.tasks.length === 0 ? (
                    <li className="text-gray-600">No tasks yet.</li>
                  ) : (
                    project.tasks.map((task, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(project.id, index)}
                            className="mr-2"
                          />
                          <span
                            style={{
                              textDecoration: task.completed ? 'line-through' : 'none',
                            }}
                          >
                            {task.text}
                          </span>
                        </div>
                        <div>
                          <button
                            onClick={() => handleEditTask(project.id, index)}
                            className="px-2 py-1 bg-blue-600 text-white rounded mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTask(project.id, index)}
                            className="px-2 py-1 bg-red-600 text-white rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
