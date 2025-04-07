// express -> to create server

// express -> Framework for node js
// npm i express

// features
// 1. Easy Routing -> Routing
// 2. Middleware -> Functions that run between request and response
// 3. Static files -> Serve static files
// 4. request and response -> objects that contain information about request and response.

// create a server

const express = require("express")

const app = express()

app.use(express.json()) // middleware

// write and send -> write -> multiple times, send -> one time

app.get("/:id", (request, response) => {
    // const query = request.query.q -> accessing query parameters
    // const params = request.params.id -> accessing route parameters
    return response.status(200).send("params")
})

app.post("/", (request, response) => {
    const body = request.body
    return response.status(200).send(body)
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

