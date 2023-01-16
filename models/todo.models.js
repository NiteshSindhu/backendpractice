const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title:{
    type: String,
        required:true
    },
    status: {
        type: Boolean,
        required:true
    }
})

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = { TodoModel };