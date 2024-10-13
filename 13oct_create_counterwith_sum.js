//first how to do operaton on number
//how to take input as number and do operation and show result 
//how to declare onChange function in input and update the value
//here e is the object who have target as property who is dom element who intiate the value property to extract the value
//here below the input text we update the value




import {useState} from 'react'
function App(){
  const [count,setCount]=useState(0);
  const [inputvalue,setinputValue]=useState(1);
 let cnt=0;
 for(let i=1;i<=inputvalue;i++){
      cnt+=i;
 }

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
