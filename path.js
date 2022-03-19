// "C:\Users\HP\Desktop\fjp6-dev\module2\introTonode\path.js"
let path =require('path');
// let extensionName=path.extname("C:\Users\HP\Desktop\fjp6-dev\module2\introTonode\path.js");

// console.log(extensionName);
let extensionName=path.extname("C:\Users\HP\Desktop\fjp6-dev\module2\introTonode\path.js");
let baseName=path.basename(__filename);

// console.log(extensionName);
// console.log(baseName);

// console.log(__dirname);
// console.log(__filename);
let dirPath=__dirname;
let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);
