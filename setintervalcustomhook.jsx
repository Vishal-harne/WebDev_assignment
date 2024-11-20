
function useInterval(fn,timeout){
  useEffect(()=>{
   const value= setInterval(()=>{
      fn()
    },timeout);
    return()=>{
     clearInterval(value);
    }
   
  },[])
}

function App(){
  const [count,setCount]=useState(0);

  useInterval(()=>{
    setCount(c=>c+1);
  },1000);
  return(
    <div>
      Time count is {count}
    </div>
  )
}
 export default App
