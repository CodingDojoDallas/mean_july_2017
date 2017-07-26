var mongoose = require('mongoose')

let NoteSchema = new mongoose.Schema({
    content : {
        type : String,
        minlength : 3,
        required : [true , "Note cannot be blank"]
    }
} , { timestamps : true })

mongoose.model('Note', NoteSchema)