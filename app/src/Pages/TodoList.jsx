import { Fragment, useState } from "react"
import { FaCheckCircle, FaEdit, FaPen } from "react-icons/fa"
import { FaCircleXmark, FaList, FaTrash, FaXmark } from "react-icons/fa6"
import { toast } from "react-toastify"
import { v4 } from "uuid"
import TodoListTemplate from "../Components/TodoListTemplate"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editableTask, setEditableTask] = useState("")
    const [editedTitle, setEditedTitle] = useState("")

    const handleChange = (event) => setTodo(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() == "") {
            return toast.error("Task is required")
        }
        const index = todoList.findIndex((item) => item.title.toLowerCase() == todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exists")
        }
        const dateTime = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObj = {
            id: v4(),
            title: todo,
            status: "Pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
        return toast.success("Task added successfully")
    }

    const handleDelete = id => {
        const res = todoList.filter((item) => item.id !== id)
        setTodoList(res)
        return toast.success("Task deleted successfully")
    }

    const handleStatus = id => {
        const res = todoList.map(item => {
            if (item.id == id) {
                const dt = new Date().toLocaleString("en-IN").toUpperCase()
                return { ...item, status: item.status == "Pending" ? "Completed" : "Pending", updatedAt: dt }
            }
            return item
        })
        setTodoList(res)
        return toast.success("Task status updated successfully")
    }

    const handleTaskUpdate = () => {
        if(editedTitle.trim() == "") {
            return toast.error("Task is required")
        }
        const index = todoList.findIndex((item) => item.title.toLowerCase() == editedTitle.toLowerCase() && item.id != editableTask)
        if (index > -1) {
            return toast.error("Task already exists")
        }
        const res = todoList.map(item => {
            if (item.id == editableTask) {
                const dt = new Date().toLocaleString("en-IN").toUpperCase()
                return {...item, title: editedTitle, updatedAt: dt}
            }
            return item
        })
        setTodoList(res)
        setEditableTask("")
        setEditedTitle("")
        return toast.success("Task updated successfully")
    }

    return <div className="d-flex justify-content-center pt-4 px-2">
        <div className="w-100 d-flex flex-column align-items-center">
            <h1 className="fs-3 text-center">Todo List</h1>
            <div className="mt-3 w-100" style={{maxWidth: "500px"}}>
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
            
            <div className="d-flex flex-column flex-md-row gap-4 w-100">
                <TodoListTemplate type="Pending" setEditableTask={setEditableTask} editableTask={editableTask} editedTitle={editedTitle} setEditedTitle={setEditedTitle} handleDelete={handleDelete} handleStatus={handleStatus} handleTaskUpdate={handleTaskUpdate} todoList={todoList} />
                <TodoListTemplate type="Completed" setEditableTask={setEditableTask} editableTask={editableTask} editedTitle={editedTitle} setEditedTitle={setEditedTitle} handleDelete={handleDelete} handleStatus={handleStatus} handleTaskUpdate={handleTaskUpdate} todoList={todoList} />
            </div>
        </div>
    </div>
}

export default TodoList