const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User connected")

    socket.emit('newEmail', {
        from: "mike@example.com",
        text: "Hey, whats going on?",
        createdAt: new Date()
    });

    socket.on('createEmail', (newEmail) => {
        console.log(newEmail)
    })

    socket.on('createMessage', (message) => {
        console.log('Create Message', message)
    })

    socket.on('disconnect', () => {
        console.log("Disconnected client.")
    })

});

server.listen(port, () => {
    console.log(`Server started on ${port}`);
});