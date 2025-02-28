// Hook -> Hooks are functions that let you hook into React features.
// useState -> Function to handle state in a component
// useContext -> Function to handle context in a component
// useEffect => Function to handle life cycle of a component
// 3 stages of life cycle of a component -> mounting, updating, unmounting
// mounting -> called after component is rendered for the first time
// updating -> called when component is updated
// unmounting -> called before component is removed

import { useEffect, useState } from "react"

const EffectPage = () => {

    const [axes, setAxes] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event) => {
        setAxes({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => { 
        document.addEventListener("mousemove", handleMouseMove)
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return <div className="d-flex align-items-center gap-3 justify-content-center vh-100">
        <div>
            <div>x: {axes.x}</div>
            <div>y: {axes.y}</div>
        </div>
        <div className="bg-danger rounded-circle position-absolute" style={{ width: "10px", height: "10px", left: `${axes.x}px`, top: `${axes.y}px`}}></div>
    </div>
}

export default EffectPage

