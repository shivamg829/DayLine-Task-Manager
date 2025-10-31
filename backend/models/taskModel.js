import mongoose, { Schema } from 'mongoose'

const taskSchema = new mongoose.Schema({
    taskName:{
        type: String,
        required: true
    },
    discription: {
        type: String,
        default: ''
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High' ], defaul: 'Low'
    },
    dueDate: {
        type: Date,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
export default Task;