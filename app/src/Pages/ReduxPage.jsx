// ReduxJS -> Javascript library to manage state globally in a React application

import { useSelector, useDispatch } from "react-redux"
import { changeName } from "../Redux/sampleSlice"
import { decrement, increment, reset } from "../Redux/counterSlice"

const ReduxPage = () => {

    const { name } = useSelector(state => state.sample)
    const { value } = useSelector(state => state.counter)

    const dispatch = useDispatch()

    const handleUpdateName = () => {
        dispatch(changeName({ value: name === "John" ? "Jane" : "John" }))
    }

    const handleUpdate = (type) => {
        if (type == "-") {
            dispatch(decrement(10))
        }else if(type == "+") {
            dispatch(increment(20))
        }else if(type == "0") {
            dispatch(reset())
        } else {
            console.log("Invalid");
        }
    }

    return <div>
        Redux Value: {name} <button onClick={handleUpdateName}>update name</button>
        <div>{value}</div>
        <div className="d-flex gap-2">
            <button className="btn btn-danger" onClick={() => handleUpdate("-")}>-</button>
            <button className="btn btn-danger" onClick={() => handleUpdate("0")}>0</button>
            <button className="btn btn-danger" onClick={() => handleUpdate("+")}>+</button>
        </div>
    </div>
}

export default ReduxPage