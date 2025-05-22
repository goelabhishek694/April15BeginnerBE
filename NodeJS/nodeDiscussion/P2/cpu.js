const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors);

function calculateFibonacci(number){
    if(number<=1) return number;
    return calculateFibonacci(number -1 ) + calculateFibonacci(number-2);
}

app.get("/fib", (req, res) => {
    const {number, requestNumber} = req.query;
    if(!number || isNaN(number) || number <=0 ){
        return res.status(400).json({
            success: false,
            message: "pls provide a valid postitive number"
        })
    }
    const answer = calculateFibonacci(number);
    return res.status(200).json({
        success: true,
        message: "got the answer",
        data: answer
    })
});