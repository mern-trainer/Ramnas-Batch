import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        createTodo: (state, action) => {
            // {id:xxxxxx, title:xxxxx, status: xxxxxx, createdAt:xxxxx, updatedAt:xxxxx}
            const { payload } = action
            state.todoList = [payload, ...state.todoList]
        },
        removeTodo: (state, action) => {
            // {id: xxxxxxxxx}
            const { id } = action.payload
            state.todoList = state.todoList.filter((item) => item.id !== id)
        },
        updateTodoTitle: (state, action) => {
            // { id: xxxxxxxxxxxx, title: xxxxxxxx}
            const { id, title } = action.payload
            state.todoList = state.todoList.map(todo => {
                if (todo.id == id) {
                    const dateTime = new Date().toLocaleString("en-IN").toUpperCase()
                    return {
                        ...todo,
                        title: title,
                        updatedAt: dateTime
                    }
                }
                return todo
            })
        },
        updateTodoStatus: (state, action) => {
            // { id: xxxxxxxxxxxx }
            const { id } = action.payload
            state.todoList = state.todoList.map(todo => {
                if (todo.id == id) {
                    const dateTime = new Date().toLocaleString("en-IN").toUpperCase()
                    return {
                        ...todo,
                        status: todo.status == "Pending" ? "Completed" : "Pending",
                        updatedAt: dateTime
                    }
                }
                return todo
            })
        }
    }
})

export const { createTodo, removeTodo, updateTodoTitle, updateTodoStatus } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice