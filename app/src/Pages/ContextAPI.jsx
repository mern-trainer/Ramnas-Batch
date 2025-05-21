// context api -> To share data between components -> global state management
// props -> Unidirectional Data Flow -> Parent to Child

import { Link } from "react-router"
import { useCounter } from "../Providers/CounterProvider"

const ContextAPI = () => {

    const { counter } = useCounter()

    return <div>
        <h1>Context API</h1>
        {counter}<br/>
        <Link to={"/context2"}>Go to 2nd Context Page</Link>
    </div>
}

export default ContextAPI
