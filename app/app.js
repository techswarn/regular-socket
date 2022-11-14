// Regular Websockets

const socket = new WebSocket('ws://localhost:8080/');


socket.addEventListener('open', (event) => {
    console.log('connected');
});

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Message from server ', data);
};

setTimeout(() => {
    socket.send('Hello Server!');
 }, 1000) // 120 sec
 
document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.send(text);
}