import { createContext, useContext, useState } from "react"

 const Counter=createContext();
export default function App(){
  const [count,setCount]=useState(0);
  return (
    <>
      <Counter.Provider value={{count,setCount}}>
        <Value/>
        <Increase/>
        <Decrease/>
      </Counter.Provider>
    </>
  )
}

function Increase(){
  const {setCount}=useContext(Counter);
  const handle=()=>{
    setCount((prev)=>prev+1);
  }
  return(
    <button onClick={handle}>
      Increase
    </button>
  )
}
function Decrease(){
  const {setCount}=useContext(Counter);
    const handle=()=>{
      setCount((prev)=>prev-1);
    }
    return(
      <button onClick={handle}>
        Decrease
      </button>
    )
  
}
function Value(){
  const {count}=useContext(Counter);
  return(
    <h1>{count}</h1>
  )
}