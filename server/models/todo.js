const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    Priority: {
        type: String,
        required: true,
    },
    checklist: {
        type: [String],
        require: false
    },
    dueDate:{
        type:Date,
        required:false
    }


});

module.exports = mongoose.model('Todo', todoSchema);

