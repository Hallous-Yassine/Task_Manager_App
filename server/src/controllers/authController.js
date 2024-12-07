const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel'); // Import the user model

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Call the model's function to create a new user
        const result = await userModel.createUser(username, email, hashedPassword);

        res.status(201).json({ message: 'User created', user: result.rows[0] });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Login route
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Fetch user by email from the database
        const user = await userModel.getUserByEmail(email);

        if (user && (await bcrypt.compare(password, user.password))) {
            // Generate JWT token with userId
            const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        } else {
            // Return 401 for unauthorized access
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ error: 'Error logging in' });
    }
};