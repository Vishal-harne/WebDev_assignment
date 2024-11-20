function useDiamention(){
  const [resizewindow,setSize]=useState({h:window.innerWidth,w:window.innerHeight,});
  
  const handleheightwith=(e)=>{
    setSize({h:window.innerWidth,w:window.innerHeight});
  }

  useEffect(()=>{
    window.addEventListener('resize',handleheightwith);
    return()=>{
    window.removeEventListener('resize',handleheightwith);
    }
  },[]);
  return resizewindow
}

function App(){
  const diamention=useDiamention();
  return(
    <div>
     The current position of the mouse is: X: {diamention.h}, Y: {diamention.w}
    </div>
  )
}
export default App
