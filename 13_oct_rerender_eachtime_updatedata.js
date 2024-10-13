//just make sure toi install axios
//first create 4-5 buttuon 
//each gonna take out data from the backend
//via clicking on particuler id button
// but to rerender the data every time you click the button you have to 
//mention the state in useeffect hook that whgen to rerender the page or fdata form the backend 

//steps to ipmlement
/*have working http backend server where you have already writtent this logic of to store the data 
you need to create a state which will going to update the id value
You hav 4 button, where you will goning to write the onCLick funciton in that you will use the state hooks to set the button value inside the 
todo component 
then this function will deliever the cuurent value  of buuton which user click to the Todo component it get aupopped into the component funciton the cuurent value of buttonn 
boom value update and once user click it shows on ui 


*/
import {useState,useEffect} from 'react'
import axios from 'axios'
function App(){
  //you have to use hook to get the implementation done
  const [clickid,setCLickid]=useState(1);//i have created the state 
  return <div>
    <button onCLick={function(){
     setCLickid(1);
    }}>1</button>

    <button onClick={function(){
      setCLickid(2);
    }}>2</button>
    <button onClick={function(){
      setCLickid(3);
    }}>3</button>
    <button onCLick={function(){
      setCLickid(4);
    }}>4</button>
    <Todo id={clickid}/>
    </div> 
}

  function Todo({id}){
    const [todo,setTodo]=useState({})
    
     useEffect(()=>{
      axios.get("https://sum-server100xdevs.com/id"+${id})
        .then(function (response){
          setTodo(response.data.todo)
        })
     },
     //here we mention when  to extract  the data from backend
     [id])

      return(
        <div>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      )
  }

export default App;
