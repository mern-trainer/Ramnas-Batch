require("dotenv").config()

const env = {
    port: process.env.PORT || 8081,    
    connection_string: process.env.MONGO_URL,
    db_name: process.env.DB_NAME
}

module.exports = env