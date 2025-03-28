import { useCallback, useState } from "react"
import CallbackChild from "./CallbackChild"

const Callback = () => {

    const [counter, setCounter] = useState(0)
    const [numbers, setNumbers] = useState([1, 2, 3, 4])

    const handleClick = useCallback(() => {
        setCounter(counter + 1)
    }, [numbers])

    const addNumber = () => {
        setNumbers(numbers => [...numbers, numbers.length + 1])
    }

    return <div className="d-flex flex-column align-items-center gap-4">
        <div>Counter: {counter}</div>
        <div>Numbers: {numbers.join(", ")}</div>
        <button className="btn btn-primary" onClick={addNumber}>Add</button>
        <CallbackChild handleClick={handleClick} />
    </div>
}

export default Callback