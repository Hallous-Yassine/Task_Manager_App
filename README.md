# Task Manager App

A task management app with a user-friendly interface and a powerful backend. It supports user authentication, project management, and task assignment to streamline team workflows.

## Features
- **User Authentication:** Secure login and registration with JWT-based token authentication.
- **Project Management:** Create, update, and delete projects.
- **Task Management:** Assign tasks, set priorities, update statuses, and manage deadlines.
- **Role-Based Access:** Tasks and projects are linked to specific users for controlled access.

## Tech Stack

### Client-Side
- **Developed Using:** React.js (Handled by our collaborator).

### Server-Side
- **Built With:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT for secure token-based sessions

---

## Installation and Setup

### Clone the Repository
```bash
git clone https://github.com/YourUsername/Task_Manager_App.git
```
## Server-Side Setup

1. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Configure environment variables in a .env file for database connection and JWT secrets.
3. Start the server:
    ```bash
   npm start
   ```
## Client-Side Setup
1. Navigate to the client directory and install dependencies:
    ```bash
   cd client
   npm install
   ```
2. Start the client:
    ```bash
   npm start
   ```
---

## API Endpoints

### Authentication
- **POST** `/register`: User registration
- **POST** `/login`: User login

### Projects
- **POST** `/projects`: Create a new project
- **PUT** `/projects/:id`: Update an existing project
- **DELETE** `/projects/:id`: Delete a project

### Tasks
- **POST** `/tasks`: Create a new task
- **PUT** `/tasks/:id`: Update an existing task
- **DELETE** `/tasks/:id`: Delete a task

---

## How It Works
- Users can register and securely log in to access their projects and tasks.
- JWT tokens ensure secure session management.
- Projects can be created, updated, or deleted and are tied to authenticated users.
- Tasks can be assigned to team members, prioritized, and tracked through their statuses.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request for improvements or new features.

---

## License
This project is licensed under the [MIT License](LICENSE).

