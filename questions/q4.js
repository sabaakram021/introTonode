// read content of unorganised folder and make  an array which has extension name of each file

let path=require('path');
let fs=require('fs');

let source=path.join(__dirname,"..","unorganized");
let content=fs.readdirSync(source);
extention_arr=[];
for(let i=0;i<content.length;i++)
{
     let element=content[i];
     let extention=path.extname(element);
     extention_arr.push(extention);
}
console.log(extention_arr);
