import { Fragment, useState } from "react"
import { FaCheckCircle, FaEdit, FaPen } from "react-icons/fa"
import { FaCircleXmark, FaList, FaTrash, FaXmark } from "react-icons/fa6"
import { toast } from "react-toastify"
import { v4 } from "uuid"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editableTask, setEditableTask] = useState("")
    const [editedTitle, setEditedTitle] = useState("")

    const handleChange = (event) => setTodo(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo == "") {
            return toast.error("Task is required")
        }
        if (todoList.includes(todo)) {
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
        if(editedTitle == "") {
            return toast.error("Task is required")
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
                <div className="d-flex flex-column gap-2 mt-3 w-100">
                    <h3 className="text-center">Pending List ({todoList.filter(item => item.status == "Pending").length})</h3>
                    {
                        todoList.filter(item => item.status == "Pending").map((data) => {
                            return <div key={data.id} className="d-flex border border-2 border-secondary justify-content-between rounded p-3 text-secondary">
                                <div>
                                    <div>
                                        {
                                            // Optional Chaining
                                            editableTask == data?.id ? <Fragment>
                                                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                                                <button className="btn btn-success" onClick={handleTaskUpdate}>Save</button>
                                            </Fragment> : data.title
                                        }
                                    </div>
                                    <div>{data.status}</div>
                                    <div>{data.createdAt}</div>
                                    <div>{data.updatedAt}</div>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-around">
                                    <FaTrash color="red" cursor={"pointer"} onClick={() => handleDelete(data.id)} />
                                    <FaCheckCircle color="green" cursor={"pointer"} onClick={() => handleStatus(data.id)}/>    
                                    <FaPen color="blue" cursor={"pointer"} onClick={() => { setEditableTask(data.id); setEditedTitle(data.title) }}/>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="d-flex flex-column gap-2 mt-3 w-100">
                    <h3 className="text-center">Completed List ({todoList.filter(item => item.status == "Completed").length})</h3>
                    {
                        todoList.filter(item => item.status == "Completed").map((data) => {
                            return <div key={data.id} className="d-flex border border-2 border-secondary justify-content-between rounded p-3 text-secondary">
                                <div>
                                    <div>
                                        {
                                            // Optional Chaining
                                            editableTask == data?.id ? <Fragment>
                                                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                                                <button className="btn btn-success" onClick={handleTaskUpdate}>Save</button>
                                            </Fragment> : data.title
                                        }
                                    </div>
                                    <div>{data.status}</div>
                                    <div>{data.createdAt}</div>
                                    <div>{data.updatedAt}</div>
                                </div>
                                <div className="d-flex flex-column align-items-center justify-content-around">
                                    <FaCircleXmark color="red" cursor={"pointer"} onClick={() => handleStatus(data.id)}/>    
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default TodoList