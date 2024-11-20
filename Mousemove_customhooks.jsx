
//lets make custom hooks for mousehover
function useMousehover(){
  const [position,setPosition]=useState({x:0,y:0});
  const HandleMousePosition=(e)=>{
    setPosition({x:e.clientX , y:e.clientY});
  };

  useEffect(()=>{
    window.addEventListener('mousemove',HandleMousePosition);

    return()=>{
      window.removeEventListener('mousemove',HandleMousePosition);
    };

  },[])
  return position;
}

function App(){
  const mousemount=useMousehover();
  return(
    <div>
     The current position of the mouse is: X: {mousemount.x}, Y: {mousemount.y}
    </div>
  )
}
export default App
