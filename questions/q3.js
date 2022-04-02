//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let path=require("path");
let fs=require("fs");

let sourcePath=path.join(__dirname,"..","..","..","module1","project","index.html");
// console.log(sourcePath);
let destiPath=path.join(__dirname,"..","..","index.html");
// console.log(destiPath);

fs.copyFileSync(sourcePath,destiPath);

