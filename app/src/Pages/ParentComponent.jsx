// properties (props) -> data passed from parent to child component

import { Fragment, useState } from "react"
import ChildComponent from "./ChildComponent"

// Unidirectional Data Flow

const ParentComponent = () => {

    const [counter, setCounter] = useState(0)

    const handleDataFromChild = (data) => {
        console.log(data);
    }

    return <Fragment>
        <div>Count: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Inc</button>
        <ChildComponent setCounter={setCounter} counter={counter} handleDataFromChild={handleDataFromChild}/>
    </Fragment>
}

export default ParentComponent