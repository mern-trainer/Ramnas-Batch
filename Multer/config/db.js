const { connect } = require("mongoose");
const env = require("../env");

const createDatabaseConnection = async () => {
    try{
        const response = await connect(env.MONGO_URI, {
            dbName: "RAMNAS"
        })
        console.log(`Database ${response.connection.db.databaseName} connected successfully`);
        
    } catch (error) {
        return process.exit(1);
    }
}
module.exports = createDatabaseConnection;