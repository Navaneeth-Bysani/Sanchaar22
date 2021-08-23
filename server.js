const app = require('./app');
const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


const MONGO_URL = "mongodb+srv://LinX:Navaneeth@LiX@linx.xx7ku.mongodb.net/LinX?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
})


// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Listening to PORT - ${PORT}`);
})

process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection!! Shutting Down the server....');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    })
})