const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
const io = new Server(server); 

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    //message being sent from server to client 
    
    // setInterval(() => {
    //     socket.emit("message", "hi this is server at "+ new Date()+ "to" + socket.id);
    // }, 2000);

    socket.on("disconnect", () => {
        console.log("user disconnected ", + socket.id);  
    });

    socket.on("message", (data) => {
        socket.broadcast.emit("broadcast", data);
    })
})

app.get("/", (req, res) => {
    res.send("hello world")
});

server.listen(3000, () => console.log("listening at 3000"));