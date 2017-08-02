var rabbits = require('../controllers/rabbits.js')

module.exports = function (app) {
    // index
    app.get('/', function (req, res) {
        rabbits.index(req,res)
    });
    // adding new
    app.get('/rabbits/new', function (req, res) {
        rabbits.newRabbit (req, res)
    });

    //showing one
    app.get('/rabbits/:id', function (req, res) {
        rabbits.showRabbit (req, res)
    });

    //showing to edit one
    app.get('/rabbits/edit/:id', function (req, res) {
        rabbits.editRabbit(req, res)
    });

    // add new
    app.post('/rabbits', function (req, res) {
        rabbits.create(req,res);
    });

    //edit one rabbit
    app.post('/rabbits/:id', function (req, res) {
        rabbits.update(req, res)
    });

    // delete rabbit
    app.post('/rabbits/destroy/:id', function (req, res) {
        rabbits.destroy(req, res)
    })
}