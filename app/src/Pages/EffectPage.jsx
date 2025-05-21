// Hook -> Hooks are functions that let you hook into React features.
// useState -> Function to handle state in a component
// useContext -> Function to handle context in a component
// useEffect => Function to handle life cycle of a component
// 3 stages of life cycle of a component -> mounting, updating, unmounting
// mounting -> called after component is rendered for the first time
// updating -> called when component is updated
// unmounting -> called before component is removed -> cleanup function

import { useEffect, useState } from "react"

const EffectPage = () => {

    const [axes, setAxes] = useState({ x: 0, y: 0 })
    const [text, setText] = useState("")

    const handleMouseMove = (event) => {
        setAxes({ x: event.clientX, y: event.clientY })
    }

    

    useEffect(() => { 
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("keypress", (e) => setText(text => text + e.key))
        document.addEventListener("wheel", (e) => console.log(e))
        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("keypress", (e) => setText(text => text + e.key))
            document.removeEventListener("wheel", (e) => console.log(e))
        }
    }, [])

    return <div className="d-flex align-items-center gap-3 justify-content-center vh-100">
        <div>
            {text}
            <div>x: {axes.x}</div>
            <div>y: {axes.y}</div>
        </div>
        <div className="bg-danger rounded-circle position-absolute" style={{ width: "10px", height: "10px", left: `${axes.x}px`, top: `${axes.y}px`}}></div>
    </div>
}

export default EffectPage

