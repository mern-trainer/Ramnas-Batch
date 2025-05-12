const { connect } = require("mongoose")
const env = require("../env")

const configDB = async () => {
    try {
        const res = await connect(env.connection_string, {
            dbName: env.db_name
        })
        console.log("Connected to DB", res.connection.db.databaseName);
    } catch (error) {
        return process.exit(1)
    }
}

module.exports = configDB