// callback:it is nothing but a function which is passed as the argument to the another function, it executed when the other function is completed..
// in most of the cases we simply uses the callback, but for better practice we also used promises...
// in callback we used functional argument as function is passed as a argument...
// it is used in many cases such as onclick(),map,filter,setInterval() and many more.
const fs = require("fs");

const sum = (a, b) => {
  console.log("helloworld");
};
setTimeout(sum, 3000);

fs.readFile("a.txt", "utf-8", function (err, contents) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents);
});
