const express = require("express")
const env = require("./env")
const configDB = require("./config/db")
const TodoModel = require("./models/todo.model")
const otpRouter = require("./routes/otp.route")

const app = express()

configDB()

app.use(express.json())

app.get("/todo", async (req, res) => {
    try {
        const todos = await TodoModel.find()
        return res.status(200).send(todos)
    } catch (err) {
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

app.use("/mail", otpRouter)

app.listen(env.port, () => {
    console.log(`Server is running on port ${env.port}`)
})