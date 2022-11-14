// Regular Websockets

const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.send(text);
}