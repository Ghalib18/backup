// here we are going to use context api which is used to share data between components without passing props from the parent to child components  this is the best way through which we can do the state management in react ,no external library is arrived to do so such as redux recoil. it also helps in avoiding prop drilling which is a commom probelm in react
// step to implement context api is    1. create context  2.wrap the component with provider 3.by destucturing the value from the context through use of usecontext can be take at wherever we want.
// limitations of context api is that it is not good for large scale application as  some extra renders aslo take place... 

import React from 'react';
import { createContext } from "react";
import { useState ,useContext} from "react"
 const Bulbcontext=createContext();

function App(){
  const [isOn,setIsOn]=useState(true);
  return (
  <>
    <Bulbcontext.Provider value={{isOn,setIsOn}}>
    <Light />
      </Bulbcontext.Provider>
  </>  
  )
}
 function Light(){

   return (
     <>
     <Bulb />
     <Toggle/>
    </>
   )
 }
 function Bulb(){
   const {isOn}=useContext(Bulbcontext);
   return <>
     {(isOn)?<h1>bulb is on</h1>:<h1>bulb is off</h1>}
   </>
 }
function Toggle(){
   const {isOn,setIsOn}=useContext(Bulbcontext);
  return(
    <button onClick={()=>setIsOn(prev=>!prev)}>toggle-It</button>
  )
}
export default App;
