const {exec} = require("child_process");

//list all the files in current directory in long format with human readable format 
exec("ls -lh", (error, stdout, stderr) => {
    if(error){
        console.error(`exec eror: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

});

exec('somerandomcommand',(err,stdout,stderr)=>{
    if(err){
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(`Number of files ${stdout}`);
    console.error(`stderr: ${stderr}`);
 })