import { RecoilRoot,useSetRecoilState,useRecoilValue } from 'recoil'
import './App.css'

import {total_cntAtom } from './atom'
import { allNetwork } from './atom';


function App() {


  return (
    <>
   <RecoilRoot>
    <MainApp/>
   </RecoilRoot>
   </>
  )
}
function MainApp() {
const cnt=useRecoilValue(allNetwork);

 const total_cnt=useRecoilValue(total_cntAtom)

  return (
    <>
    <button>Home</button>
    <button>My network({cnt.network>99?"99+":cnt.network})</button>
    <button>Jobs({cnt.jobs})</button>
    <button>Messaging({cnt.messages})</button>
    <button>Notification({cnt.notification})</button>
    <button >Me({total_cnt})</button>
   </>
  );
}

export default App
