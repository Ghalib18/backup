const express= require("express")
const app=express();
 const factorial=(a)=>{
    let ans=1;
    while(a!=0){
      ans*=(a);
      a--;
    }
    return ans;

 }
 app.get("/",function(req,res){
    const n=req.query.n;
    const ans=factorial(n);
    res.send(ans.toString());
 })

 app.get("/hello",function(req,res){
    res.send("hello");
 })
 app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});
