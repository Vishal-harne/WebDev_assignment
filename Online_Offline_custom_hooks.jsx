
function useIsOnline(){
  const [IsOnline,setIsOnline]=useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener("online",()=>{
      setIsOnline(true);
    })
    window.addEventListener("offline",()=>{
      setIsOnline(false);
    })

  },[])
  return IsOnline
}

function App(){
  // const todo=useTodos();
  const isonline=useIsOnline();
  if(isonline){
    return "you are online";
  }
  return "you are offline";
}
export default App
