// we have created a promisified version of setTimeout
// key concept: promise is an object which represent the eventual completion of an asynchrous function and its resulting value..it make the code cleaner and  more managable
// when we create the new object of the promise then we have to pass a function whose first parameter must be function, and after completion of that function that argurment function must be call, and this treated as callback function
function readfile(resolve){
    console.log("readfile has been called")
    setTimeout(()=>{
        console.log("printed after 3sec");
        resolve()
    },3000)
}
function PromisifiedTimeout(){
    console.log("PromisifiedTimeout has been called");
    return new Promise(readfile);
}
const p=PromisifiedTimeout();
function callback(){
    console.log("callback is called")
}
p.then(callback)
setTimeout(()=>{console.log(p)},5000)