const mongoose= require('mongoose')
const todoTaskSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,       
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports= mongoose.model('todoTask',todoTaskSchema,'tasks')
