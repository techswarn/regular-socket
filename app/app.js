// Regular Websockets

const socket = new WebSocket('wss://whale-app-hppm6.ondigitalocean.app/');

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.send(text);
}