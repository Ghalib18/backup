const express=require("express")
const app= express();
 app.get("/add",function(req,res){
   const x=Number(req.query.a);
   const y=Number(req.query.b);
   res.send((x+y).toString());
 })
 app.get("/sub",function(req,res){
    const x=req.query.a;
   const y=req.query.b;
   res.send((x-y));
 })
 app.get("/div",function(req,res){
    const x=req.query.a;
   const y=req.query.b;
   res.send((x/y));
 })
 app.get("/mul",function(req,res){
    const x=req.query.a;
   const y=req.query.b;
   res.send((x*y));
 })
app.listen(3000,function(){
    console.log("server is started....")
})