import express from 'express';
import mongoose from 'mongoose';
const app = express();

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/patient', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((error) => {
//         console.error('Error connecting to the database:', error);
//     });

// Define your server-side routes and logic
// ...

const uri = "mongodb://127.0.0.1:27017/";
const dbName = "patient";
//connect to db
mongoose.connect(uri + dbName,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
    console.log("connected");
});

// createa a insert endpoint that takes 3 arguments
// 1. Patient data as json
// 2. cid of the file
// 3. hash of the file
app.post('/insert', (req, res) => {
});
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
    


});
