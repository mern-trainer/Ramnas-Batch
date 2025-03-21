// useState -> to manage state
// useReducer hook -> to manage state

import { useReducer } from "react"

const reducer = (state, action) => {
    const { type, payload } = action
    if (type == "random_number") {
        return payload
    }
}

const HomePage = () => {

    const [counter, dispatch] = useReducer(reducer, 0)

    const handleGenerateNumber = () => {
        const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1    
        dispatch({ type: "random_number", payload: randomNumber })
    }

    return <div className="d-flex mt-4 flex-column align-items-center vw-100 vh-100">
        <div>{counter}</div>
        <button className="btn btn-primary" onClick={handleGenerateNumber}>Generate Random Number</button>
    </div>
}

export default HomePage