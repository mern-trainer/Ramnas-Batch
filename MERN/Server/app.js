// import http

const http = require("http")
const url = require("url")

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
    
    const method = request.method
    const { pathname, query } = url.parse(request.url, true)
    const { hi, hello } = query
    response.end(hi + " " + hello)
    
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})

