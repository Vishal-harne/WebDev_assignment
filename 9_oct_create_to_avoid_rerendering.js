import {useState} from "react";

function App() {
  
  return (
    <div>
      <Handwithbutton/>
      <Header1 title="i am vishal harne"></Header1>
      
    </div>
  )
}
  function Handwithbutton(){
    const [title,setTitle]=useState("i am real vishal");
    function changeme(){
      setTitle("i am real"+Math.random());
     }
     return<div>
      <button onClick={changeme}>click me</button>
      <Header1 title={title}></Header1>
     </div>
  }
  function Header1({title}){
    return <div>
      {title}
    </div>
  }
  //how to make component 

export default App


//this is old version of code where we create saparate component in which we write the 
//state of whom we need to make dynamic the content like the randomise the string atr runtime to aboid the rerendering of that element again again 
