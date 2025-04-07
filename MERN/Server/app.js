// // express -> to create server

// // express -> Framework for node js
// // npm i express

// // features
// // 1. Easy Routing -> Routing
// // 2. Middleware -> Functions that run between request and response
// // 3. Static files -> Serve static files
// // 4. request and response -> objects that contain information about request and response.

// // create a server

// const express = require("express")

// const app = express()

// app.use(express.json()) // middleware

// // write and send -> write -> multiple times, send -> one time

// app.get("/:id", (request, response) => {
//     // const query = request.query.q -> accessing query parameters
//     // const params = request.params.id -> accessing route parameters
//     return response.status(200).send("params")
// })

// app.post("/", (request, response) => {
//     const body = request.body
//     return response.status(200).send(body)
// })

// app.listen(9090, () => {
//     console.log("Server is running on port 9090");
// })

const express = require("express")
require("dotenv").config()  // to access environment variables
const cors = require("cors")

// cors -> cross origin resource sharing

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api", (request, response) => {
    try {
        const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1
        return response.status(200).send({
            number: randomNumber
        })
    } catch (error) {
        return response.status(500).send({
            message: "Internal server error"
        })   
    }
})

app.listen(process.env.PORT || 9090, () => {
    console.log(`Server is running on port ${process.env.PORT || 9090}`);
})