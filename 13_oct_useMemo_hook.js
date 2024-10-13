import {useState,useMemo} from 'react'
function App(){
  const [count,setCount]=useState(0);
  const [inputvalue,setinputValue]=useState(1);
  //just create a variele which will store the value using usememo
  let cnt=useMemo(()=>{
    let cnt=0;
    for(let i=1;i<=inputvalue;i++){
         cnt+=i;
    }
    return cnt
  },[inputvalue]);


  return(
    <div>
    <input type="number" onChange={function(e){
      setinputValue(e.target.value)
    }}  placeholder={"find the sum from 1 to n"}/><br></br>
    sum from 1 to {inputvalue} is{cnt}<br></br>
    <button onClick={function(){
      setCount(c=>c+1);
    }}>Counter {count}</button>
    </div>
  )
}
export default App
