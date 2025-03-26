import { useState } from "react"
import ChildComponent from "./Child"

const Optimization = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return <div>
        <h2>Optimization</h2>
        <div>Current Clicks: {counter}</div>
        <div><button onClick={handleClick}>Update Click</button></div>
        <ChildComponent counter={counter} />
    </div>
}

export default Optimization