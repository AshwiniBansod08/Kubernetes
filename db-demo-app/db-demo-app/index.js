const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/yourDatabaseName')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
    });

// Create Mongoose model
const Email = mongoose.model('Email', {
    email: String
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Add email
app.post('/add-email', async (req, res) => {
    const { email } = req.body;

    try {
        const newEmail = new Email({ email });
        await newEmail.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding email');
    }
});

// Get emails
app.get('/emails', async (req, res) => {
    try {
        const emails = await Email.find({});
        res.json(emails);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching emails');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
