const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line
const app = express();

// Use CORS to allow requests from any origin
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Path to your JSON file
const userFile = 'users.json';

// Endpoint to handle user registration
app.post('/register', (req, res) => {
    const newUser = req.body;

    // Read existing users
    fs.readFile(userFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user file');
        }

        let users = data ? JSON.parse(data) : [];

        // Check if email already exists
        if (users.some(user => user.email === newUser.email)) {
            return res.status(400).send('Email already exists');
        }

        // Add new user to the array
        users.push(newUser);

        // Write updated users to file
        fs.writeFile(userFile, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing to user file');
            }
            res.send('User registered successfully');
        });
    });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Read existing users
    fs.readFile(userFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading user file');
        }

        const users = data ? JSON.parse(data) : [];

        // Find user with matching email and password
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            res.json({ name: user.name, email: user.email });
        } else {
            res.status(400).send('Invalid email or password');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
