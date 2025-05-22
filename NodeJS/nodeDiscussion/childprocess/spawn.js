//used to run different programms


const {spawn} = require("child_process");

spawn("/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", ['https://www.scaler.com', "--incognito"]);