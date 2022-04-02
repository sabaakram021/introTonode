//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type
let path=require('path');
let fs=require('fs');

let arr=['audio','video','image','software','documents','applications','other'];
let file_name=['abc','def','ghi','jkl'];
let extent_name=['.mp3','.mp4','.png','.exe','.rar','.apk','.pdf'];
for(let i=0;i<arr.length;i++)
{
    let dirPath=path.join(__dirname,arr[i]);
    if(!fs.existsSync(dirPath))
        fs.mkdirSync(dirPath);
    // for(let j=0;j<file_name.length;j++)
    // {
    //     let filePath=file_name[j]+extent_name[i];
    //     let new_file_path=path.join(dirPath,filePath);
    //     fs.writeFileSync(new_file_path,'');
    // }
    for(let j=0;j<file_name.length;j++)
    {
        let filePath=file_name[j]+extent_name[6];
        let new_file_path=path.join(dirPath,filePath);
        fs.writeFileSync(new_file_path,'');
    }

}
