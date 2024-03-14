// Regular Websockets

const socket = new WebSocket(
  "https://walrus-app-q2hd7.ondigitalocean.app/server"
);

//const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener("open", (event) => {
  console.log("connected");
});

// Listen for messages
socket.onmessage = ({ data }) => {
  console.log("Message from server ", data);
  const el = document.createElement("li");
  el.innerHTML = data;
  document.querySelector("ul").appendChild(el);
};

// Send hello to from client to server after 120000 seconds.
setTimeout(() => {
  socket.send("Hello Server!");
}, 120000); // 120 sec

// If you wish you can send message through form
document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.send(text);
};
