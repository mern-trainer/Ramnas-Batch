const express = require("express");
const morgan = require("morgan");
const env = require("./env");
const db = require("./config/db");

const app = express();
app.use(morgan("dev"));
app.use(express.json());


app.get("/users", async (req, res) => {
    try {
        const database = await db()
        const users = await database.collection("users").find().toArray();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({
            message: err.message || "Internal server error"
        })
    }
})

app.listen(env.PORT, () => {
    console.log("Server is running on port 8080");
})
