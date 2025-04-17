const express = require('express');
const app = express();

//it parses incoming JSON and makes it available in req.body
// req.body = JSON.parse(data)
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World !")
});

app.get("/login", (req, res) => {
    res.send("Please Login !")
});

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("Login successfull!")
});

//query params
app.get("/electronics", (req, res) => {
    console.log(req.query);
    res.send(`Showing items in order`)
})

//path params
app.get("/profile/:id", (req, res) => {
    console.log(req.params);
    res.send(`Showing profile page of ${req.params.id}`)
})



app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});