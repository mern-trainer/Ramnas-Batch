import { useState } from "react"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => setTodo(event.target.value.replace(" ", "_"))

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

    return <div>
        <h1 className="fs-3 text-center mt-3">Todo List</h1>
        <div>
            <form onSubmit={handleSubmit}>
                {/* controlled input */}
                <input type="text" placeholder="Eg: Buy Groceries" name="todo" value={todo} onChange={handleChange}/>
                <button>Add Todo</button>
            </form>
        </div>
        <div>
            {
                todoList.map((data, idx) => {
                    return <div key={idx}>
                        <div>{data}</div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoList