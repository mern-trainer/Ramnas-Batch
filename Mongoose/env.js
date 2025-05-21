require("dotenv").config()

const env = {
    port: process.env.PORT || 8081,    
    connection_string: process.env.MONGO_URL,
    db_name: process.env.DB_NAME,
    user_email: process.env.EMAIL,
    user_password: process.env.PASSWORD,
}

module.exports = env