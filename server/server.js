

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./characters');

const server = express();


// write image name instead of localhost(e.g. mongo)
mongoose.connect("mongodb://mongo:27017/characters", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', err => {
    console.log(`An error occured: ${err}`);
});

db.once('open', () => {
    console.log("Connected to the database!");
});


server.use(express.json());
server.use(cors());

server.get("/", (_req, res) => {
    res.send("Hello World!");
});


server.use('/characters', router);

const port = 3031;

server.listen(port, () => {
    console.log(`Server started to run on port ${port}`);
});