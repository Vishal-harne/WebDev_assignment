
import {useState} from "react";
// function App() {
//      const [todos,setTodos]=useState([{
//       id:1,
//       title:"Martial arts",
//       Description:"Do Martial arts from 7 to 9:15"
//      },
//     {
//       id:2,
//       title:"Go to office Gym and take bath and go to office",
//       Description:"9:15 to 10:15"
//     },
//   {
//       id:3,
//       title:"start work at office ",
//       Description:" 10 to 7"
//   }])
//      function updateme(){
//       // setTodos([...todos,{
//       //   id:4,
//       //   title:"web devolopment",
//       //   Description:"9 to 12"
//       // }])
//        const newtodos=[];
//        for(let i=0;i<todos.length;i++){
//         newtodos.push(todos[i]);
//        }
//        newtodos.push({
//         id:4,
//         title:"web development",
//         Description:"do from 9 to 12"
//        })
//        setTodos(newtodos);

//      } 
//    return <div>
//    <button onClick={updateme}>update me</button>
//      {todos.map(function(todo){
//       return  <Todos title={todo.title} Description={todo.Description}></Todos>
//      })}
//    </div>
// }

// function Todos({title,Description}){
//  return <div>
//   <div>{title}</div>
//   <div>{Description}</div>
//  </div>
// }




function App(){
  return <div>
  <CardWrapper>
   <Textcard/>
  </CardWrapper>
  <CardWrapper>
  
   <Clickme/>
  </CardWrapper>
  
  </div>
}
//this cardwrapper take react component as input 
 function CardWrapper({children}){
  return <div style={{border:"2px solid black", padding:20}}>
    {children}
  </div>

 }
 function Clickme(){
  const [messagelove ,setMassagelove]=useState(" ");
  function handlelove(){
    setMassagelove("i love you to ");
  }
  return(
    <div>
      <div style={{ backgroundColor: "blue", color: "white", padding: 10 }}>
        Do you love me?
      </div>
     <button onClick={handlelove}>Yes</button>
     <button onClick={handlelove}>No</button>
     {messagelove && <div>{messagelove}</div>}
    </div>
  )
 }
 function Textcard(){
  return <div>
    hey vishal you lost your path you have to be more discipline to chase the dream
  </div>
 }


//  function Textcomponent(){
//   return <div>
//     hi there whatsapp guys i am here
//   </div>
//  }
export default App
