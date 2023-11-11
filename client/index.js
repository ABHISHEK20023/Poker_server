const io=require('socket.io-client') 
const socket=io.connect('http://localhost:8000');

socket.emit("message","hello from client")