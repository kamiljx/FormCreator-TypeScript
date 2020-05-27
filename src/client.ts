import { Field } from './field';
let socket = new WebSocket("ws://localhost:8080");


document.getElementById('sendToServer').addEventListener('click', () => {
    socket.send('Client sent request to the server')
})

