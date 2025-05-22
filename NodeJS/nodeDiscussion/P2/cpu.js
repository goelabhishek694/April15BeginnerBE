//fibonacci computation
const express = require("express");
const cors = require("cors");
const app = express();
const {fork} = require("child_process");
const path = require("path");
app.use(cors());

app.get("/fib", (req, res) => {
    const {number, requestNumber} = req.query;
    console.log("handler fn ran for req", requestNumber);
    if(!number || isNaN(number) || number<=0){
        return res.status(400).json({
            success: false,
            message: "please provide a valid positive number"
        })
    }

    // const answer = calculateFibonacci(number);
    //creating a child process
    const fiboRes = fork(path.join(__dirname, 'fiboWorker.js'));
    //sending data to child process -> can be done viar fork only. spwan cannot be used ot send data form parent to child . IPC at play 
    fiboRes.send({number:parseInt(number,10)});
    //receiving data from child process 
    fiboRes.on("message", (answer) => {
        console.log("sending response for req ", requestNumber);
        res.status(200).json({
            success: true,
            message: "fibonacci calculated",
            data: answer,
            requestNumber
        })
        //kill the child process
        fiboRes.kill();
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");  
})