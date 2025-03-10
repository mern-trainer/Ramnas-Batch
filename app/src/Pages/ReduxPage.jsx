// ReduxJS -> Javascript library to manage state globally in a React application

import { useSelector, useDispatch } from "react-redux"
import { changeName } from "../Redux/sampleSlice"

const ReduxPage = () => {

    const { name } = useSelector(state => state.sample)
    const dispatch = useDispatch()

    const handleUpdateName = () => {
        dispatch(changeName({ value: name === "John" ? "Jane" : "John" }))
    }

    return <div>
        Redux Value: {name} <button onClick={handleUpdateName}>update name</button>
    </div>
}

export default ReduxPage