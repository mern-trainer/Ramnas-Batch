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
                    return {
                        ...todo,
                        title: title
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
                    return {
                        ...todo,
                        status: todo.status == "Pending" ? "Completed" : "Pending"
                    }
                }
                return todo
            })
        }
    }
})

export const { createTodo, removeTodo, updateTodoTitle } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice