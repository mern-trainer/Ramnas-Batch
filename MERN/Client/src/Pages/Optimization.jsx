import { useMemo, useState } from "react"
import ChildComponent from "./Child"

// memo, useMemo
// memo -> Avoid re-rendering of child component
// useMemo -> Cache the result of a calculation between re-renders
// useCallback -> Memoize a function

const Optimization = () => {

    const [counter, setCounter] = useState(0)
    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    
    const sumOfNumbers = useMemo(() => {
        console.log("Sum of numbers");
        return numbers.reduce((total, num) => total + num, 0)
    }, [numbers])

    const handleAddNumbers = () => {
        setNumbers(numbers => [...numbers, numbers.length + 1])
    }

    return <div>
        <h2>Optimization</h2>
        {/* <div>Current Clicks: {counter}</div>
        <div><button onClick={handleClick}>Update Click</button></div>
        <ChildComponent counter={counter} /> */}
        <button onClick={handleAddNumbers}>Add Numbers</button>
        Result: {sumOfNumbers}
        <button onClick={() => setCounter(counter + 1)}>Update Click - {counter}</button>
    </div>
}

export default Optimization