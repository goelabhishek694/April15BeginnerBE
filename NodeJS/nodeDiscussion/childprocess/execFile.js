const {execFile} = require("child_process");

const scriptPath = './script.sh' ; // user script.bat fro windows

const args = ['hello', 'world'];

//executing the script with arguments 
execFile(scriptPath, args, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
 
})

// chmod +x script.sh

