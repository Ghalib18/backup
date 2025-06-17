// App.jsx
// here we  are using useEffect, which is  ahook that allows you to perform side effects in functional components such as feteching data when the components mount or any state changes which is present in dependency array,if we dont use useEffect then it will create infinte loop of fetching data as it will keep on rendering the components again and again
// useeffect have 3 componets
// 1. perform the side effect function
// 2.array dependecny the above function will be call then ever the values of array dependency changes...
import './App.css'
import { useEffect, useState } from 'react'


export default function App() {
  const [curtab,setCurTab]=useState("1")
  const[data,setData]=useState([])
  useEffect(()=>{
    async function fetchData(){
      const data1= await fetch("https://jsonplaceholder.typicode.com/posts/"+curtab)
      const res=await data1.json()
      setData(res.title)
    }
    fetchData();
  },[curtab])
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
     <div >
       <button onClick={() => setCurTab("1")}
        style={{color:(curtab==="1")?"red":"black",cursor:"pointer"}}>Todo1</button>
       <button onClick={() => setCurTab("2")} style={{cursor:"pointer" ,color:(curtab==="2")?"red":"black"}}>Todo2</button>
       <button onClick={() => setCurTab("3")} style={{cursor:"pointer",color:(curtab==="3")?"red":"black"}}>Todo3</button>
       <button onClick={() => setCurTab("4")} style={{cursor:"pointer",color:(curtab==="4")?"red":"black"}}>Todo4</button>
     </div>
      <h1>{data}</h1>
    </div>
  )
}
