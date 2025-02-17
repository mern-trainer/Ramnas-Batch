// properties (props) -> data passed from parent to child component

import { Fragment, useState } from "react"
import ChildComponent from "./ChildComponent"

// Unidirectional Data Flow

const ParentComponent = () => {

    const [counter, setCounter] = useState(0)

    const handleDataFromChild = (data) => {
        console.log(data);
    }

    return <div className="d-flex mt-5 flex-column align-items-center gap-3">
        <div className="fs-3 fw-bold text-uppercase">Count: {counter}</div>
        <div className="d-flex gap-2 w-100 justify-content-center">
            <button className="btn btn-success w-25 " onClick={() => setCounter(counter + 1)}>Increment</button>
            <ChildComponent setCounter={setCounter} counter={counter} handleDataFromChild={handleDataFromChild}/>
        </div>
    </div>
}

export default ParentComponent