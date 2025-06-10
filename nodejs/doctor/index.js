const express= require("express")
const app=express();
const user=[{
    name:"ghalib",
    kidenys:[{
        healthy:false
    }]
}]
app.use(express.json()); 
 app.get("/",function(req,res){
const johnKidenys= user[0].kidenys;
const totalkidenys=johnKidenys.length;
let detectKidenys=0;
for(let i=0;i<totalkidenys;i++){
    if(!johnKidenys[i].healthy) detectKidenys++;
}
res.json({
   totalKideny:totalkidenys,
   healthyKideny:totalkidenys-detectKidenys,
   unhealthyKideny:detectKidenys
})
 })

 app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    user[0].kidenys.push({
        healthy:isHealthy
    })
    res.json({
       msg:"added successfully"
    })
 })
 app.put("/",function(req,res){
    const johnKidenys= user[0].kidenys;
    const totalkidenys=johnKidenys.length;
    for(let i=0;i<totalkidenys;i++){
    if(!johnKidenys[i].healthy){
        johnKidenys[i].healthy=true;
    }
}
res.json({
    msg:"done"
})
 })
 app.delete("/",function(req,res){
    const temp=[];
    for(let i=0;i<user[0].kidenys.length;i++){
        if(user[0].kidenys[i].healthy){
            temp.push({
                healthy:true
            })
        }
    }
    user[0].kidenys=temp;
    res.json({
        msg:"deleted"
    })
 })
app.listen(3000);