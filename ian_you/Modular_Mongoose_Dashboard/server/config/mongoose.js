// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongooseDash', { useMongoClient: true });
// connect to mongoose!
// create a variable that points to the path where all of the models live
var models_path = __dirname+ '/../models';
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    console.log(`loading ${file}...`);
    require(models_path + '/' + file);
  }
});