const fs= require('fs')
function readfile(resolve){
     fs.readFile('a.txt','utf-8',(err,data)=>{
        console.log("we are goning to read the a.txt file")
        resolve(data);
    })
}
function PromisifiedReadfile(){
    console.log("PromisifiedReadfile has been called");
    return new Promise(readfile);
}

function callback(contents){
    console.log(contents);
}
PromisifiedReadfile().then(callback);