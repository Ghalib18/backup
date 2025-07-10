// here we have discussed about the recoil state management libray which is used to manage the state of the application in a more effiecient way by reducing the re-renders of unnessary components..

// to use it we have to install it as it is external dependency(npm install recoil) and  wrap the components that use the recoil state management with the <RecoilRoot> components.

// we have three hooks in the recoil
// 1.useRecoilvalue( atom or selector):it is used to read the value of the atom or selector.
// 2. useRecoilState(atom or selector):it is used to read and write the value of the atom orselector.
// 3.useSetRecoilState(atom or slector): it is used to write the value only...
import './App.css'
import{RecoilRoot, useRecoilValue,useRecoilState, useSetRecoilState} from 'recoil'
import{counterAtom, evenSelector} from '../store/counter.js'

export default function App() {
  return (
 <>
   <RecoilRoot>
   <Counter/>
   <Increase/>
   <Decrease/>
   <Even/>
   </RecoilRoot>
 </>
  )
}
function Counter(){
  const count=useRecoilValue(counterAtom);
  return<h1>Count:{count}</h1>
}
 function Increase(){
   const setCount=useSetRecoilState(counterAtom);
   return <button onClick={()=>
     setCount((prev)=>prev+2)
   }>INCREASE++</button>
 }
function Decrease(){
   const setCount=useSetRecoilState(counterAtom);
   return <button onClick={()=>
               setCount((prev)=>prev-1)
             }>Decraese--</button>
 }

function Even(){
  const even=useRecoilValue(evenSelector);
  return <h1>Even: {even?"yes":"No"}</h1>
}
