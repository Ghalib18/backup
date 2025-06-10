// interface is a way to define the type of an non-primitive data type such as object or complex objects..


 interface Address{
   city:string,
     country:string,
     pincode:number
 }
// as the Address interface is use in more than one interface so it better to define in the separate interface and can be use or update  whenever we required.

interface User{
  name:string,
  age:number,
  address?:Address  
}

 interface Office{
   address:Address
 }
 const user2:User={
   name:"mahesh",
   age:1,
   // as address is optional here so we can skip it or we can add it ,it will not give error
     
 }

const user1:User={
  name:"ghalib",
  age:11,
  address:{
    city:"hazaribag",
    country:"india",
    pincode:825301
  }
}
 function legal(user:User):boolean{
   return user.age>18?true:false;
 }
const ans=legal(user2);
if(ans){
  console.log("you are eligible")
}
else{
  console.log("you are not eligible")
}