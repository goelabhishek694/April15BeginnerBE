const express = require('express');
const app = express();

//it parses incoming JSON and makes it available in req.body
// req.body = JSON.parse(data)
app.use(express.json());
//serves the static html css or js files from public folder 
app.use(express.static("public"));

const middleware1 = async(req, res ,next) => {
    console.log(req.method);
    console.log(req.url);
    console.log("This is first checkpoint");
    next(); 
}

const middleware2 = async(req, res ,next) => {
    console.log("This is 2nd checkpoint");
    next(); 
}
//general / global middleware
// log/transform data 
//validate the data
//perform auth checks 
app.use(middleware1);
app.use(middleware2);

const performSanity = async(req, res, next) => {
    if(!req.body.email || !req.body.password){
        console.log("error");
        return res.send("bad request");
    }
    console.log("performing basic sanity");
    console.log("checked the data");
    next();
}

const checkAuth = async(req, res, next) => {
    console.log("checking for valid email");
    console.log("checked the data");
    next();
}


app.get("/", (req, res) => {
    res.send("Hello World !")
});

app.get("/login", (req, res) => {
    res.send("Please Login !")
});

app.post("/login", performSanity, checkAuth,(req, res) => {
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