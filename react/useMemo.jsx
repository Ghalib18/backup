// here we can see the usecase of useMemo hook which is used to memoize the value of the function and it will only run when the dependency changes..(it prevents us from unnessary rerun of expensive funtion when unrelated state or props chnages..)

// talking about it sytnax it takes two arguments first is the function and second is the depenceny value...

// it only remembers the lastvalue of the function andif the value changes it will run again and remember the new value....
import React, { useMemo,useState } from 'react';

function ClickCounter() {
 const[count, setCount]=useState(0)
  const[input, setInput]=useState(0)
const double =useMemo(()=>{
  for(let i=0;i<1000000000;i++){}
  return input*2;
},[input])
  const handleClick=()=>{
    setCount((prev)=>prev+1);
  }
  return<>
    <input 
      type="number" 
      placeholder="enter number"
      onChange={(e)=>setInput(e.target.value)}/>
    <br/>
    <br/>
  <button onClick={handleClick}>Increment</button>
    <h2>{count}</h2>
    <h1>ans:{double}</h1>
    
    
  </> 
}
export default ClickCounter;
