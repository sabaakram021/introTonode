//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs=require('fs');
let path=require('path');

let dicPath=path.join(__dirname,'new_directory');
console.log(dicPath);
if(!fs.existsSync(dicPath))
    fs.mkdirSync(dicPath);

let filePath=path.join(dicPath,'file.txt');

fs.writeFileSync(filePath,"New file has been made");