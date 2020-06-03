import { Field } from './field';
let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function(e) {
  console.log('Connected <3 ')
};

document.getElementById('sendToServer').addEventListener('click', () => {
    socket.send('Client sent request to the server')
})


