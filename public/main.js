const socket = io();

socket.on('connect', () => {
    console.log("Connected to server!");
    
    socket.emit('createMessage', {
        from: "Andrew",
        message: "Yup, that works"
    })
})

socket.on('disconnect', () => {
    console.log("Disconnected from server!");
})

socket.on('newEmail', (email) => {
    console.log(email)
})

