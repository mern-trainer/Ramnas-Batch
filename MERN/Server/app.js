const express = require("express");
const logger = require("./Middleware/Logger");
const apiRoute = require("./Routes/api.route");
const sampleRoute = require("./Routes/sample.route");
const passwordRoute = require("./Routes/password.route");
const authRoute = require("./Routes/auth.route");
require("dotenv").config();
const cors = require("cors");

require("./Config/db")

// cors error -> cross origin resource sharing

// authentication and authorization

// token -> jsonwebtoken (jwt) -> user details encrypted in token

const app = express();

// app.use() // middleware

// Middleware -> function that has access to the request object (req),
// the response object (res), and the next middleware function in the application’s
// request-response cycle. The next middleware function is commonly denoted by a
// variable named next.

// middleware will be executed in every request.

// const sampleMiddleware = (request, response, next) => {
//     console.log("Sample middleware executed");
//     next(); // call next middleware function
// }

// app.use(sampleMiddleware) // application middleware

// Authentication middleware
// Authorization middleware
// Error handling middleware

// Type of middleware

// 1. Application level middleware
// 2. Router level middleware
// 3. Error handling middleware
// 4. Built-in middleware
// 5. Third-party middleware
// 6. Custom middleware
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
// }))
app.use(cors())
app.use(express.json()); // built-in middleware
app.use(logger)
app.use("/api", apiRoute)
app.use("/api2", sampleRoute)
app.use("/password", passwordRoute)
app.use("/auth", authRoute)

// app.get("/", (request, response) => {
//     response.status(200).send("Hello World");
// })

// password encryption, decryption -> hashing
// bcrypt is used for hashing passwords

app.listen(process.env.PORT || 9090, () => {
    console.log("Server is running on port " + process.env.PORT || 9090);
})