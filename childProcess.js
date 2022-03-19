let cp=require('child_process');
// cp.execFileSync('calc');
let content = cp.execSync('node test.js');
console.log(""+content);