const pool = require('../config/db');

exports.createUser = async (username, email, hashedPassword) => {
    return await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );
};

exports.getUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0]; // Return the user object if found, otherwise undefined
};
