import { useState } from "react"
import { FaList } from "react-icons/fa6"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => setTodo(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo == "") {
            return alert("Please enter a todo")
        }
        if (todoList.includes(todo)) {
            return alert("Todo already exists")
        }
        setTodoList([todo, ...todoList])
        setTodo("")
    }

    return <div className="d-flex justify-content-center pt-4 px-2">
        <div className="w-100" style={{maxWidth: "500px"}}>
            <h1 className="fs-3 text-center">Todo List</h1>
            <div className="mt-3 w-100">
                <form onSubmit={handleSubmit} className="d-flex gap-2 flex-column">
                    <div className="bg-light d-flex align-items-center rounded border border-2 border-secondary rounded">
                        <div className="p-2">
                            <FaList />
                        </div>
                        <input className="p-2 w-100 border-0 rounded" style={{outline: 0}} type="text" placeholder="Eg: Buy Groceries" name="todo" value={todo} onChange={handleChange}/>
                    </div>
                    <button className="btn btn-secondary rounded">Add Todo</button>
                </form>
            </div>
            <div className="d-flex flex-column gap-2 mt-3">
                {
                    todoList.map((data, idx) => {
                        return <div key={idx} className="d-flex border border-2 border-secondary justify-content-between rounded p-3 text-secondary">
                            <div>{idx+1}. {data}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default TodoList