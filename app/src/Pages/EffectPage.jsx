// Hook -> Hooks are functions that let you hook into React features.
// useState -> Function to handle state in a component
// useContext -> Function to handle context in a component
// useEffect => Function to handle life cycle of a component
// 3 stages of life cycle of a component -> mounting, updating, unmounting
// mounting -> called after component is rendered for the first time
// updating -> called when component is updated
// unmounting -> called when component is removed

import { useEffect, useState } from "react"

const EffectPage = () => {
    
    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => { // mounting
        console.log(counter);
    }, [])

    return <div className="d-flex align-items-center gap-3 justify-content-center vh-100">
        <button className="btn btn-success" onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
        <button className="btn btn-danger" onClick={() => setTimer((prev) => prev + 1)}>Timer</button>
    </div>
}

export default EffectPage

