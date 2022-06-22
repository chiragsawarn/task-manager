const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    frequency:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true,
    },
    durationHours:{
        type:String,
        required:true,
    },
    durationMinutes:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    subtasks:{
        type:Array,
        required:true,
    },
    weekdays:{
        type:String,
        required:false,
    },
    monthdays:{
        type:JSON,
        required:false,
    },
})

module.exports = mongoose.model('task',taskSchema);