const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

//export modules
module.exports = mongoose.model('Author', authorSchema)