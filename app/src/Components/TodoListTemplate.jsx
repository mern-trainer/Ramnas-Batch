import { Fragment } from "react";
import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const TodoListTemplate = ({ type, todoList, handleTaskUpdate, editableTask, editedTitle, setEditedTitle, handleDelete, handleStatus, setEditableTask  }) => {
    return <div className="d-flex flex-column gap-2 mt-3 w-100">
        <h3 className="text-center">{type} List ({todoList.filter(item => item.status == type).length})</h3>
        {
            todoList.filter(item => item.status == type).map((data) => {
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
                        {
                            type == "Pending" ? <Fragment>
                                <FaTrash color="red" cursor={"pointer"} onClick={() => handleDelete(data.id)} />
                                <FaCheckCircle color="green" cursor={"pointer"} onClick={() => handleStatus(data.id)}/>    
                                <FaPen color="blue" cursor={"pointer"} onClick={() => { setEditableTask(data.id); setEditedTitle(data.title) }} />
                            </Fragment> : <FaCircleXmark color="red" cursor={"pointer"} onClick={() => handleStatus(data.id)}/>    
                        }
                        
                        
                    </div>
                </div>
            })
        }
    </div>
}

export default TodoListTemplate