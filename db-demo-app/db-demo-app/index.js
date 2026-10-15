const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
<<<<<<< HEAD
mongoose.connect('mongodb://mongo:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a Mongoose model
const Email = mongoose.model('Email', {
    email: String,
=======
mongoose.connect('mongodb://mongo:27017/yourDatabaseName')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error);
    });

// Create Mongoose model
const Email = mongoose.model('Email', {
    email: String
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
// Routes
=======
// Home page
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
app.post('/add-email', async (req, res) => {
    const { email } = req.body;
    try {
        const newEmail = new Email({ email });
        await newEmail.save();
        res.redirect('/');
    } catch (error) {
=======
// Add email
app.post('/add-email', async (req, res) => {
    const { email } = req.body;

    try {
        const newEmail = new Email({ email });
        await newEmail.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
        res.status(500).send('Error adding email');
    }
});

<<<<<<< HEAD
=======
// Get emails
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
app.get('/emails', async (req, res) => {
    try {
        const emails = await Email.find({});
        res.json(emails);
    } catch (error) {
<<<<<<< HEAD
=======
        console.error(error);
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
        res.status(500).send('Error fetching emails');
    }
});

<<<<<<< HEAD
app.get('/exit', (req, res) => {
    // Perform actions to stop the server or any other desired actions
    res.send('Server stopped');
    process.exit(0); // This stops the server (not recommended in production)
});

=======
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
