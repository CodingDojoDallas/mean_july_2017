var mongoose = require ('mongoose')

//Schemas
var RabbitSchema = new mongoose.Schema ({
  name: {
    type : String,
    required: [true, 'Name cannot be blank']
  },
  ear_length: {
    type : Number,
    min : 4,
    required : [true, 'Ear Length cannot be blank']
  },
  cuteness_level : {
    type : Number,
    required : [true, 'Cuteness level must be entered']
  },

});


// Register
mongoose.model('Rabbit', RabbitSchema);