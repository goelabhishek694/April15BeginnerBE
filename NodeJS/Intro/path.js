//path -> used to cretea paths, do path manipulations etc. 
const path = require('path');

// //1. path.join
// const fullPath = path.join("folder", "subfolder", 'file.txt');
// console.log(fullPath); // macos path folder/subfolder/file.txt 
// // windows path folder\subfolder\file.txt

//2. path.resolve - used to create absolute paths from relative ones
const fullPath = path.resolve("folder", "subfolder", 'file.txt');
// console.log(fullPath); ///Users/abhishekgoel/15AprilBeginnerBE/NodeJS/Intro/folder/subfolder/file.txt

// //3. path.basename
// const basename = path.basename(fullPath);
// console.log(basename); // file.txt

//4. path.dirname -> returns ther directory name of path
// const dirname = path.dirname(fullPath);
// console.log(dirname); ///Users/abhishekgoel/15AprilBeginnerBE/NodeJS/Intro/folder/subfolder

// //5. path.extname
// const extname = path.extname(fullPath);
// console.log(extname); //.txt

// //6. path.parse -> parses a string into an object with properties like root , dirn , base , name , ext 
// const pathInfo = path.parse(fullPath);
// console.log(pathInfo);

// //7. path.normalize  normalizes a pth by reslving ".." and "." segment and converting slashes to appropriate platform format 
// const normalizedPath = path.normalize("../../NodeJS/Intro/../readme.md");
// console.log(normalizedPath);

// //8. path.isAbsolute -> checks if a path is absolute or not 
// const isAbsolute = path.isAbsolute(fullPath);
// console.log(isAbsolute);

//9. path.relative -> retunr the relative path from one path to another
const relativePath = path.relative("../../NodeJS/Intro", '../Intro/fs.js');
console.log(relativePath);


