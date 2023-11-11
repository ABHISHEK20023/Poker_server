const io=require('socket.io-client') 
const socket=io.connect('http://localhost:8000');

socket.emit("message","hello from client")
const roomId=0;
socket.emit('join_room',roomId);
const message="hello"
socket.emit("message_from_user_to_room",message,roomId);

socket.on("message_for_room",(data)=>{
    console.log("message received from server",data)
})