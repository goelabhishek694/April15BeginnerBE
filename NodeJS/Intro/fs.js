//fs - file system
const fs = require("fs")

//1. reading files

// fs.readFile('./f1.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

//fs.readfileSync -> this is an synchtonous operation , it blocks the main thread.

//2. Writing files

// const content = 'Hello World !';
// fs.writeFile('f1.txt', content, 'utf-8', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been written");
// })

//3. rename a file 

// fs.rename("./f1.txt", 'greet.txt', (err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been renamed");
// })

//4. delete a file
// fs.unlink('greet.txt', (err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File has been deleted");
// })

//5. info of a file
fs.stat("./f1.txt", (err, stats) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("file size", stats.size);
    console.log("is directory ?", stats.isDirectory());
    
})

//6. Create a directory

// const directoryName = "fs-dir";
// fs.mkdir(directoryName, (err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(`Directory ${directoryName} created successfully`);
    
// })

//7. delete a directory

// const directoryName = "fs-dir";
// fs.rmdir(directoryName, {recursive: true}, (err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(`Directory ${directoryName} deleted successfully`);
    
// })

//8. checking if dir exists
// const directoryPath = '../Intro'
// if(fs.existsSync(directoryPath)){
//     console.log(`directory ${directoryPath} exists`);
//     return;
// }
// else {
//     console.log(`directory ${directoryPath} does not exists`);
// }

//fs.access -> async way of existsSync method
const directoryPath = '../Intro';
fs.access(directoryPath, fs.constants.F_OK, (err) => {
    if(err){
        console.log(`The path ${directoryPath} does not exist.`);
    }else{
        console.log(`The path ${directoryPath} exists.`);
    }
})

