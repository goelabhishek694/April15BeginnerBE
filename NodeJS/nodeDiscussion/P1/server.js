const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
const filePath = path.join(__dirname, "big.file");
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream("./copyofBig.file");


// readableStream.on("data", (chunk) => {
//     writableStream.write(chunk);
//     console.log(`Received ${chunk.length} bytes of data`);
// });

// readableStream.on("end", () => {
//     writableStream.end();
//     console.log(`Finished Reading File`);
// });

//pipe function -> it is a method in readable strea. it connects a readbale stream to a writable stream

// readableStream.pipe(writableStream);

// readableStream.on("error", (err) => {
//     console.log(`Error while reading`, err);
// });

// writableStream.on("error", (err) => {
//     console.log(`Error while writing`, err);
// });

server.on('request', (req, res) => {
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(res);
    
    readableStream.on("error", (err) => {
    console.log(`Error while reading`, err);
});
    // fs.readFile('./big.file', (err, data) => {
    //     if(err) throw err;
    //     res.end(data);
    // })
 })

server.listen(3000, () => {
    console.log("Server started at 3000")
 })
 