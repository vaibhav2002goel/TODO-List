const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    year:{
        type:Number,
        required:false
    },

    month:{
        type:String,
        required:true
    },

    day:{
        type:Number,
        required:false
    },

    completed:{
        type:Boolean,
        required:true
    }
})

const TodoList = mongoose.model('TodoList',listSchema);

module.exports = TodoList;