import { RecoilRoot,useSetRecoilState,useRecoilValue } from 'recoil'
import './App.css'

import { networkAtom,messagingAtom, notificationAtom, jobsAtom,total_cntAtom } from './atom'


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
const network_cnt=useRecoilValue(networkAtom);
const message_cnt=useRecoilValue(messagingAtom);
const notification_cnt=useRecoilValue(notificationAtom)
const jobs_cnt=useRecoilValue(jobsAtom)
 const total_cnt=useRecoilValue(total_cntAtom)

  return (
    <>
    <button>Home</button>
    <button>My network({network_cnt>99?"99+":network_cnt})</button>
    <button>Jobs({jobs_cnt})</button>
    <button>Messaging({message_cnt})</button>
    <button>Notification({notification_cnt})</button>
    <button >Me({total_cnt})</button>
   </>
  );
}

export default App
