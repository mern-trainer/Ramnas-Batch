const { MongoClient } = require("mongodb");

const mongodbString = "mongodb://localhost:27017";

MongoClient.connect(mongodbString).then(client => {
    console.log("Connected to database");
    const db = client.db("Ramnas");
   
    db.collection("users").find().toArray().then(result => {
        console.log(result);
    })

    db.collection("users").insertOne({
        name: "Ram",
        age: 25,
        place: "Chennai"
    }).then(result => {
        console.log(result);
    })
    
}).catch(error => {
    console.log(error);
})