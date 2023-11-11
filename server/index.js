const PORT=8000;
const express = require('express');
const {Server}=require('socket.io');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io=new Server(server,{
    cors : 'http://localhost:3000'
});



io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.on("message",(data)=>{
        console.log("received message: " ,data);
    })
})



server.listen(PORT,()=>{
    console.log("listening on port",PORT)
})