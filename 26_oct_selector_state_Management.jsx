atom.js file

import {atom, selector} from "recoil";

export const NotificationAtom=atom({
    key:"Notificationcount",
    default:102,
})


export const NetworkAtom=atom({
    key:"Networkcount",
    default:102,
})

export const JobsAtom=atom({
    key:"Jobscount",
    default:12,
})

export const MessagesAtom=atom({
    key:"Messagescount",
    default:1,
})


export const TotalNotification=selector({
    key:"TotalNotification",
    get:({get})=>{
        const Notificationcount=get(NotificationAtom);
        const NetworkAtomcount=get(NetworkAtom);
        const JobsAtomcount=get(JobsAtom);
        const MessagesAtomcount=get(MessagesAtom);

        return Notificationcount+NetworkAtomcount+JobsAtomcount+MessagesAtomcount;
    }
})

App.jsx  file

import { RecoilRoot,useRecoilState,useRecoilValue } from 'recoil';
import {NotificationAtom,NetworkAtom,JobsAtom,MessagesAtom,TotalNotification} from './atom'
import './App.css'

function App() {
return(
  <div>
<RecoilRoot>
  <Mainapp/>
</RecoilRoot>
  </div>
)
}

function Mainapp(){
  const Notificationcount=useRecoilValue(NotificationAtom);
  const Networkcount= useRecoilValue(NetworkAtom);
  const Jobcount =useRecoilValue(JobsAtom);
  const [Messagescount,setMessagescount]=useRecoilState(MessagesAtom);
  //here how to use selector to get the output value depend on selector
  const TotalNotificationcount=useRecoilState(TotalNotification);
    return (
      <div>
      <button>Home</button>
      <button>Notifications({Notificationcount>=100?"99+":Notificationcount})</button>
      <button>Messages({Messagescount>=100?"99+":Messagescount})</button>
      <button>MyNetwork({Networkcount>=100?"99+":Networkcount})</button>
      <button>Jobs({Jobcount>=100?"99+":Jobcount})</button>
      <button>Me({TotalNotificationcount})</button>
      </div>      
    )
}

export default App
