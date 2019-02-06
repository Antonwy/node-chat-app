const express = require('express');
const socketIO = require('socket.io')
const http = require('http');

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', (socket) => {
    console.log('New User connected!');
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
