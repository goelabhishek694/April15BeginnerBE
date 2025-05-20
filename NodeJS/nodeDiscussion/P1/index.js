const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "big.file");
const content = Math.random().toString(36).repeat(10000000); //130 MB
fs.writeFileSync(fileName, content);

