import './App.css'
import OurComponent from './OurComponent'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import NavBar from './NavBar'
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
    </Routes>
    <div>
    <p>hello world</p>
    </div>
    </>
  )
}

export default App
