// interface can also be used to implement a class that class must have the properties and methods that are defined in the interface... we can also add new props and methods...
// difference between implements and extends is that extends inherits all prop and methods from parent class and implements  make sure the class has the props and methods that are defined in the interface...

interface user{
  name:string,
  age:number,
  isLegal():boolean
}

class Manager implements user{
  constructor(public name:string,public age:number){
    this.name=name;
    this.age=age;
  }
   isLegal(){
    return this.age>=18;
}
}
 const user4=new Manager('ghalib',18);
console.log(user4.isLegal())