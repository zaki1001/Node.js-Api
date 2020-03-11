const mongoose = require('mongoose')

const userSchema = new  mongoose.Schema({

    name:{
        type:String,
        required:true,
        min:6,
        max:233
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:222
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:222
    }
})


module.exports = mongoose.model('User',userSchema)