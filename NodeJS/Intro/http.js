const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //handle the incoming requests
  //req is basoically request object
  //we are not checking the route and also the method
  console.log(req.method);
  console.log(req.url);
  if (req.url == "/login") {
    if (req.method == "GET") {
      res.setHeader("Content-Type", "application/json");
      const jsonData = {
        message: "Hello, World !",
        date: new Date(),
      };
      res.write(JSON.stringify(jsonData));
    } else if (req.method == "POST") {
      //get data from req object , process it and store in db
    }
  } else {
    // res.setHeader("Content-Type","text/plain");
    res.setHeader("Content-Type", "text/html");

    //write the reponse content
    // res.write("Hello World !");
    const htmlContent = fs.readFileSync("index.html", "utf-8");
    // res.write("<html><head><title>Node.js HTTP Server</title></head><body>");
    // res.write("<h1>Hello World ! </h1>");
    // res.write('</body></html>');
    res.write(htmlContent);
  }

  //end the repsonse
  res.end();
});

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
