function sum(n){
    let ans=0;
    for(let i=1;i<n;i++){
        ans+=i;
    }
    return ans;
}
const ans1=sum(10000);
console.log(ans1);

const ans2=sum(100);
console.log(ans2);

const ans3=sum(10);
console.log(ans3);

// we use synchrous code here where we have to execution take place line by line..
// it block the main thread untill line of code is executed at which the main thread is...
// simple scripts or tasks where timing is important..
// example: password hashing in setup
// const bcrypt=require("bcryptjs")
// const hash=bcrypt.hashsync('mypassword',10)
// console.log('hashed password:'hash):::: if we want to print the password after hashing then it need to get fetch first then only printing process can take place..
// also used in debugging process where we have to do the debugging sequential by doing console.log