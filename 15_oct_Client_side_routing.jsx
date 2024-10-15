


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './Component/Dashboard'
import { LandingPage } from './Component/LandingPage'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App
export function LandingPage(){
    return <div>
        Landing Page
    </div>
}


export function Dashboard(){
    return <div>
        Dashboard
    </div>
}

