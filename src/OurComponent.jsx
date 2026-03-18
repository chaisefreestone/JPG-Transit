import {useState} from  'react'

function OurComponent() {
    const [strawberryCount, setStrawberryCount] = useState(0)
    
    function handleClick() {
        setStrawberryCount((prev)=> prev + 1)
        
    }

return (
<div>
    <h3> our cool component</h3>
    <p> there are {strawberryCount} berries</p> 
    <button onClick={handleClick}> increase berries </button>


</div>
)
}

export default OurComponent
