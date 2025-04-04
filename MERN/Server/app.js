// import http

const http = require("http")

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

server.on("request", (request, response) => {
    
    const path_name = request.url
    
    if (path_name == "/") {
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({ name: "Rahul", age: 30 }))    
    }

    return response.end("404")
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})

