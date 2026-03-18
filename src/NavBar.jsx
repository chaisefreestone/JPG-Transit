import {useState} from  'react'
import {Link, useMatch, useResolvedPath } from "react-router-dom"

function NavBar() {
    const [strawberryCount, setStrawberryCount] = useState(0)
    
    function handleClick() {
        setStrawberryCount((prev)=> prev + 1)
        
    }

return (
<>
    <nav id="nav-bar">
                <Link class="nav-link" to="/">HOME</Link>
                <Link class="nav-link" to="about">ABOUT</Link>
                <Link class="nav-link" to="services">SERVICES</Link>
                <Link class="nav-link" to="history">HISTORY</Link>

    </nav>
    <br></br>
</>
)
}

export default NavBar




