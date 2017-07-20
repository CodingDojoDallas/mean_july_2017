let mongoose = require('mongoose');
let bcrypt=require('bcryptjs');

let UserSchema = new mongoose.Schema({
  first_name:{
    type: String,
    //validations
    required: [true, 'First name cannot be blank']
  },
  last_name:{
    type: String,
    //validations
    required: [true, 'Last name cannot be blank']
  },
  email:{
    type: String,
    required: [true, 'Email cannot be blank']
  },
  birthday:{
    type: Date,
    required: [true, 'Birthday cannot be blank']
  },
  password:{
    type: String,
    required: [true, 'Password cannot be blank']
  },
  password_conf:{
    type: String,
    required: [true, 'Password confirmation cannot be blank']
  }
}, {timestamps: true});

UserSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
})

UserSchema.methods.authenticate= function(password){
  return bcrypt.compareSync(password, this.password)
}

mongoose.model('User', UserSchema);
