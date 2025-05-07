const { MongoClient } = require("mongodb");
const env = require("../env");

const db = async () => {
    try {
        const client = new MongoClient(env.MONGO_URI);
        await client.connect();
        const database = client.db("Ramnas")
        console.log(database);
        return database;
    } catch (error) {
        return console.log(error);
    }
}

module.exports = db;