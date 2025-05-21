const { Schema, model } = require("mongoose");
// title, description, completed, createdAt, updatedAt
const schema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: [true, "Title must be unique"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const TodoModel = model("todos", schema)

module.exports = TodoModel;