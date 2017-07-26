var mongoose = require('mongoose')
var Note = mongoose.model('Note')

module.exports = {
    index : function(req, res){
        Note.find({}, function (err, notes) {
            if (err) {
                return res.json(err)
            }
            return res.json(notes)
        })
    },
    create : function(req, res){
        console.log(req.body)
        Note.create(req.body, function (err, note) {
            if (err) {
                return res.json(err)
            }
            return res.json(note)
        })
    }
        
}