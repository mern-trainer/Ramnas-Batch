require("dotenv").config();

const env = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI
}

module.exports = env;