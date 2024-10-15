


import React, { Suspense, lazy } from 'react';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./Component/Dashboard'));
const LandingPage=lazy(()=>import('./Component/LandingPage'))
function App() {

  return (
   <div>
     <div>
      <BrowserRouter>
      <Menubar/>
      
      <Routes>
       <Route path="/dashboard" element={<Suspense fallback={"loading"}><Dashboard/></Suspense>}/>
       <Route path="/" element={<Suspense fallback={"loading"}><LandingPage/></Suspense>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
   </div>
  )
}
 function Menubar(){
  const navigate=useNavigate();
  return (
   <div>
     <div>
      <button onClick={()=>{
        navigate("/");
      }}>LandingPage</button>
    </div>
    
      <button   onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
   
   </div>
   
  )
 }

export default App
