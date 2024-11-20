
function useDebounce(value,timeout){
const [dbouncevalue,setDbouncevalue]=useState(value);
useEffect(()=>{
   let Intervalnumber=setInterval(()=>{
    setDbouncevalue(value);
   },timeout)
  
   return()=>{
    clearInterval(Intervalnumber)
   }
},[value])

return dbouncevalue
}

function App(){
  const [value,setValue]=useState(0);
  const Debouncevalue=useDebounce(value,500);
  return(
    <div>
      debounce value is {Debouncevalue}
      <input type="text" onChange={e=>setValue(e.target.value)}/>
    </div>
  )
}
