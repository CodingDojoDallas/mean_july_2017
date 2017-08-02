let express = require('express');
let bp = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(express.static(__dirname+'/static') );
app.use(bp.urlencoded({ extended: true}));

app.set('views', __dirname+'/views/');
app.set('view engine' , 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongooseDash', { useMongoClient: true });

//Schemas
let RabbitSchema = new mongoose.Schema ({
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

let Rabbit = mongoose.model('Rabbit', RabbitSchema);

// Routes

//getting all
app.get('/', function(req, res){
  Rabbit.find({}, function(err, rabbits){
    if (err){
    } else{
      res.render('index', {rabbits: rabbits})
    }
  })
});
// adding new
app.get('/rabbits/new', function(req, res){
  res.render('newRabbit')

});

//showing one
app.get('/rabbits/:id', function(req,res){
  Rabbit.findById(req.params.id, function(err, rabbit){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    } else {
      res.render('showRabbit', {rabbit: rabbit})
    }
  })
});
  

//showing to edit one
app.get('/rabbits/edit/:id', function(req, res){
  Rabbit.findById(req.params.id, function (err, rabbit){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }}
    else {
       res.render ('updateRabbit', {'rabbit' : rabbit})
    }    
  })
});

// add new
app.post('/rabbits', function (req, res){
  Rabbit.create(req.body, function(err, rabbit){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    } else{
      res.redirect('/')
    }
  })
});

//edit one rabbit
app.post('/rabbits/:id', function(req, res){
  Rabbit.findByIdAndUpdate(req.params.id, { $set : req.body }, function(err, rabbit){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    } 
    res.redirect(`/rabbits/edit/${req.params.id}`)
    
  })
});

app.post('/rabbits/destroy/:id', function(req, res){
  Rabbit.findByIdAndRemove(req.params.id, function(err){
    if (err){
      let errors_arr =[]
      for (key in err.errors){
        let error = err.errors[key];
        errors_arr.push(error.message);
      }
    }
    res.redirect('/')
  })
})



app.listen(8000, function(){
  console.log("Listening on port 8000...");
});
