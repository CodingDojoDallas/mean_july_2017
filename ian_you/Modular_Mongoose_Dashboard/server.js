let express = require('express');
let bp = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(express.static(__dirname+'/client/static') );
app.use(bp.urlencoded({ extended: true}));

app.set('views', __dirname+'/client/views/');
app.set('view engine' , 'ejs');



require('./server/config/mongoose.js')

// Routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function(){
  console.log("Listening on port 8000...");
});
