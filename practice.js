let path=require("path");
// let new_path=path.join(__dirname,'file.txt');

let fs=require('fs');
// fs.writeFileSync(new_path,'hi there');
// fs.appendFileSync(new_path," hi all, how are you");
// console.log(new_path);
// let content=fs.readFileSync(new_path,'utf-8');
// console.log(content);
// fs.unlinkSync(new_path);
// if(!fs.existsSync(new_path)){
//     fs.writeFileSync(new_path,"hi I am new");
// }
// else
// {
//     fs.appendFileSync(new_path,"file already exist,...");
//     // error;
// }
// let dirpath=path.join(__dirname,'new_directory');

// fs.mkdirSync('new_dirctory');
// fs.rmdirSync("C:\\Users\\HP\\Desktop\\fjp6-dev\\module2\\introTonode\\new_dirctory");

let sourcePath=path.join(__dirname,'file.txt');
let destnPath=path.join(__dirname,'module','file.txt');

fs.copyFileSync(sourcePath,destnPath);