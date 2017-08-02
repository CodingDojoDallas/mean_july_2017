var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');

module.exports = {
    index : function (req, res){
        Rabbit.find({}, function (err, rabbits) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            } else {
                res.render('index', {
                    rabbits: rabbits
                })
            }
        })
    },
    newRabbit : function (req, res){
        res.render('newRabbit')
    },

    showRabbit : function (req, res) {
        Rabbit.findById(req.params.id, function (err, rabbit) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            } else {
                res.render('showRabbit', {
                    rabbit: rabbit
                })
            }
        })
    },

    editRabbit : function(req, res){
        Rabbit.findById(req.params.id, function (err, rabbit) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            } else {
                res.render('updateRabbit', {
                    'rabbit': rabbit
                })
            }
        })
    },

    create : function( req, res){
        Rabbit.create(req.body, function (err, rabbit) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            } else {
                res.redirect('/')
            }
        })
    },

    update : function (req, res){
        Rabbit.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, function (err, rabbit) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            }
            res.redirect(`/rabbits/edit/${req.params.id}`)

        })
    },

    destroy : function (req, res){
        Rabbit.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                let errors_arr = []
                for (key in err.errors) {
                    let error = err.errors[key];
                    errors_arr.push(error.message);
                }
            }
            res.redirect('/')
        })
    }

    
    
}