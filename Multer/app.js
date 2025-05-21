const express = require('express');
const env = require('./env');
const cors = require("cors");
const createDatabaseConnection = require('./config/db');
const fileRoute = require('./routes/file.route');

createDatabaseConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static("assets"));

app.use("/api", fileRoute)

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
})