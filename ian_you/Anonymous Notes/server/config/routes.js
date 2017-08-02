var mongoose = require('mongoose')
var Note = mongoose.model('Note')
var notes = require('../controllers/notes.js')

module.exports = function (app) {
    app.get('/note', notes.index);
    app.post('/note', notes.create);

    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
}