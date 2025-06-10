// in  async  thread parllelly excutes the codes, which ever finishes first will appers first ..
// in most of the javascript we use the async code as it parllely run and save the time and improve the performance
// uses:: fetching the data from database
//  reading or writing the data from the i/o devices..

const fs=require('fs');
fs.readFile('a.txt','utf-8',function(err,contents){
    console.log(contents)
})
console.log("it will be printed first")
// line no. 10 will executed first as we use the async function here so both run parllely which ever finish first will be printed and we know that reading a file takes more time than printing any thing on the screen...

// one more example of async function

function help(){
    console.log("It will be printed after 5 sec");
}
setTimeout(help,5000);