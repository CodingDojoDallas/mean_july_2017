let express = require('express')
// let session = require('express-session')
let bp = require ('body-parser')
let mongoose = require('mongoose')

let app = express()

app.use(bp.json())
app.use(express.static(__dirname+ "/public/dist"));
// app.use(session({secret: 'secretkey'}));

// app.set('views', (__dirname+'/views'));
// app.set('view engine', 'ejs');


require('./server/config/mongoose.js')

var route_setters = require('./server/config/routes.js')
route_setters(app);

app.listen(8000, function(){
    console.log('------------------------------------');
    console.log('Listening on port 8000...');
    console.log('------------------------------------');
})