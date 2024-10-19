//here we have added the state object atom and the selector 

import{atom,selector} from 'recoil';
export const countAtom=atom({
    key:'countAtom',
    default:0
})


export const evenSelector=selector(
    {
        key:'evenSelector',
        get:({get})=>{
            const count=get(countAtom);
            return count%2==0;
        }
    }
);


import './App.css';
import { countAtom } from './Store/atom/count';
import { useRecoilState, useRecoilValue ,RecoilRoot} from 'recoil';
import { evenSelector } from './Store/atom/count'; // Adjust the path according to your structure

//import all the varieb;e and the custom varieble made by user


//inside the function trap the component inside the root component of Recoil library to provide the funciton 
//of giving props to the element 
function App() {
  return (
   <div>
    <RecoilRoot>
    <Count/>
    </RecoilRoot>
   </div>
  )
}

function Count(){
  return(
    <div>
      <CountRender />
      <Button />
    </div>
  )
}

function CountRender(){
  const count=useRecoilValue(countAtom);
  return(
    <div>
    {count}
    </div>
  )
}
function EvenCount(){
  const isEven=useRecoilValue(evenSelector);
  return(
    <div>
    {isEven%2==0 ?"it is even":"it is odd"}
    </div>
  )

}
function Button(){
  const [count, setCount] = useRecoilState(countAtom); 
  //const [count,setCount]=useRecoilState(countAtom);
    return(
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <EvenCount/>
        <div ></div>
      </div>
     
    )
}



export default App

