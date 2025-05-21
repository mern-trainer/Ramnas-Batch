// useState -> to manage state
// useReducer hook -> to manage state

import { useReducer } from "react"

const reducer = (state, action) => {
    const { type, payload } = action
    if (type == "increment1") {
        return { ...state, counter1: state.counter1 + payload }
    }
    if(type == "increment2") {
        return { ...state, counter2: state.counter2 + payload }
    }
}

const HomePage = () => {

    const [counter, dispatch] = useReducer(reducer, {
        counter1: 0,
        counter2: 0
    })

    const handleGenerateNumber = () => {
        const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1   
        if (randomNumber % 2 == 0) {
            dispatch({ type: "increment1", payload: randomNumber })
        } else {
            dispatch({ type: "increment2", payload: randomNumber })
        }
        
    }

    return <div className="d-flex mt-4 flex-column align-items-center vw-100 vh-100">
        <div>{counter.counter1}</div>
        <div>{counter.counter2}</div>
        <button className="btn btn-primary" onClick={handleGenerateNumber}>Generate Random Number</button>
    </div>
}

export default HomePage