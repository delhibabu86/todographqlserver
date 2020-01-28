const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const TodoSchema = new Schema({
    text: String,
    completed: Boolean

});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = { Todo };