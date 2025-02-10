// state => Object to handle data in a component
// Hooks => function to handle life cycle and states in a component

import { useState } from "react";

const States = () => {

    // let counter = 0
    const [counter, setCounter] = useState(10) // [Number, Function]

    const handleClick = () => {
       setCounter((counter) => counter + 1)
       setCounter((counter) => counter + 1)
       setCounter((counter) => counter + 1)
       setCounter((counter) => counter + 1)
       setCounter((counter) => counter + 1)
    }

    return <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <div className="fs-3 fw-bold">{counter}</div>
        <button onClick={handleClick} className="btn btn-primary w-25">Click</button>
    </div>
}

export default States