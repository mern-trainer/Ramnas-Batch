// import http

const http = require("http")
const url = require("url")
const { v4: uuidv4 } = require("uuid")

const server = http.createServer()

// http status code

// 200 -> OK
// 201 -> Created
// 400 -> Bad Request
// 401 -> Unauthorized
// 403 -> Forbidden
// 404 -> Not Found
// 409 -> Conflict
// 500 -> Internal server error

let todoList = []

server.on("request", (request, response) => {
    
    const method = request.method
    const { pathname: path_name, query } = url.parse(request.url, true)

    if (path_name == "/api/todo" && method == "POST") {
        const { title, description } = query
        if (!title || !description) {
            response.writeHead(400, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Title and Description are required." }))
        }
        const dateTime = new Date().toISOString()
        const taskObj = {
            id: uuidv4(),
            title,
            description,
            status: "Pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        todoList.push(taskObj)
        response.writeHead(201, { "content-type": "application/json" })
        return response.end(JSON.stringify({ message: "Task created", task: taskObj }))
    }

    if (path_name == "/api/todo" && method == "GET") {
        response.writeHead(200, { "content-type": "application/json" })
        return response.end(JSON.stringify({ message: "Task fetched", tasks: todoList }))
    }

    if (path_name == "/api/todo" && method == "DELETE") {
        const { id } = query
        if (!id) {
            response.writeHead(400, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Id is required" }))
        }
        const index = todoList.findIndex(todo => todo.id == id)
        if (index == -1) {
            response.writeHead(404, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Task does not exist" }))
        }
        const res = todoList.splice(index, 1)
        response.writeHead(200, { "content-type": "application/json" })
        return response.end(JSON.stringify({ message: "task deleted", deleted: res }))
    }

    if (path_name == "/api/todo" && method == "PATCH") {
        const { id, title, description, status } = query
        if (!id) {
            response.writeHead(400, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Id is required" }))
        }
        const obj = {}
        if (title) obj.title = title
        if (description) obj.description = description
        if (status) obj.status = status
        if (title || description || status) {
            obj.updatedAt = new Date().toISOString()
        }
        if(!title && !description && !status) {
            response.writeHead(400, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Title, Description or Status required." }))
        }
        const index = todoList.findIndex(todo => todo.id == id)
        if (index == -1) {
            response.writeHead(404, { "content-type": "application/json" })
            return response.end(JSON.stringify({ error: "Task does not exist" }))
        }
        todoList[index] = { ...todoList[index], ...obj }
        response.writeHead(200, { "content-type": "application/json" })
        return response.end(JSON.stringify({ message: "task updated", updated: todoList[index] }))
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})

