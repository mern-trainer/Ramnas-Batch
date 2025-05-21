// state => Object to handle data in a component
// Hooks => function to handle life cycle and states in a component

import { useState } from "react";
import { Link } from "react-router";

const States = () => {

    // let counter = 0
    const [counters, setCounters] = useState({one: 10, two: 20}) // [Number, Function]

    // const h = "one"
    // counters[h]
    const handleClick = (key, operation) => {
        // if (operation === "+") {
        //     setCounters({...counters, [key]: counters[key] + 1})
        // }
        // else {
        //     setCounters({...counters, [key]: counters[key] - 1})
        // }
        setCounters({ ...counters, [key]: counters[key] + (operation == "+" ? 1 : -1) })
    }

    return <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <Link to="/password-generate">Go to passwords</Link>
        <div className="fs-3 fw-bold">{counters.one}</div>
        <div className="d-flex gap-2">
            <button onClick={() => handleClick("one", "+")} className="btn btn-success">Increment</button>
            <button onClick={() => handleClick("one", "-")} className="btn btn-danger">Decrement</button>
        </div>
        <div className="fs-3 fw-bold">{counters.two}</div>
        <div className="d-flex gap-2">
            <button onClick={() => handleClick("two", "+")} className="btn btn-success">Increment</button>
            <button onClick={() => handleClick("two", "-")} className="btn btn-danger">Decrement</button>
        </div>
    </div>
}

export default States