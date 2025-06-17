// useState hook|| fconditinal rendering
// here we learn the concept of usestate hook and how it use in react,it always return two value first is current state and sceond is function which is used to update the state and when ever the value of the state is changes the component is re-rendered,while using the simple dom the whole page is re-rendered when ever the value of any state is chnged..
import './App.css'
import {useState} from 'react'
export default function App() {
  const [visible,setvisible]=useState(true);
   const handle=()=>{
     setvisible(!visible);
   }
   console.log("rendering");
  return (
    <div>
      <button onClick={handle}>toggle</button>
      {
        visible&&<div>hello everyone how are you hoping you are fine....</div>
      }

    </div>
  )
}
