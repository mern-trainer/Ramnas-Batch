import { useReducer } from "react"

const reducer = (state, action) => {
    const { type, payload } = action
    if (type == "update_todo") {
        return payload
    }
}

const listReducer = (state, action) => {
    const { type, payload } = action
    if (type == "add_todo") {
        return [...state, payload]
    }
}

const Todo = () => {

    const [todo, dispatch] = useReducer(reducer, "")
    const [todos, dispatchList] = useReducer(listReducer, [])

    const handleChange = e => {
        const { value } = e.target
        dispatch({ type: "update_todo", payload: value })
    }

    const handleAddTodo = () => {
        dispatchList({ type: "add_todo", payload: todo })
    }

    return <div>
        <input type="text" name="todo" onChange={handleChange} value={todo} />
        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.join(" , ")}
    </div>
}

export default Todo