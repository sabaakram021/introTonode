let fs=require('fs');
// console.log(fs);
 
let path=require('path');

let filePath=path.join(__dirname,"file.txt");
// console.log(filePath);


//it create file if not exist else if override
// c-create
fs.writeFileSync(filePath,"hi, this is inside file folder");

//r-read
console.log("before :");
let content=fs.readFileSync(filePath,'utf-8');
console.log(content);

//update
console.log("After : ");
fs.appendFileSync(filePath,'\nthis is added further');
console.log(fs.readFileSync(filePath,'utf-8'));


// Delete

fs.unlinkSync(filePath);


