atom.js file

import {atomFamily} from "recoil"
export const Todos=[
    {
        id:1,
        title:"Martial Arts",
        description:"7:30 to 9:30"
    },
    {
        id:2,
        title:"Office",
        description:"10:30 to 7:30",
    },
    {
        id:3,
        title:"Web Devolopment",
        description:"8 to 9 and 10 to 12"
    }
];

export const Atomfamily=atomFamily({
    key:"Atomfamily",
    default:(id)=>Todos.find(todo=>todo.id===id),
})



jsx file

import {Atomfamily} from './atom'
import{RecoilRoot,useRecoilState} from "recoil"
function App(){
  return(
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={3}/>
      </RecoilRoot>
    </div>
  )
}


function Todo ({id}){
const [todo,setTodo]=useRecoilState(Atomfamily(id))
  return (
    <div>
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
    </div>
  )
}
export default App;




