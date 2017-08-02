let express = require('express')
let bp = require('body-parser')
let mongoose = require("mongoose")

let app = express()

app.use(express.static(__dirname+'/static'));
app.use(bp.urlencoded({ extended: true}))

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/message_board' , {useMongoClient : true })

var Schema = mongoose.Schema;

let MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        required: [true, 'Name cannot be blank']
    },
    content: {
        type: String,
        maxlength: 200,
        required: [true, 'Message cannot be blank']
    },
    comments: [{
        type: Schema.Types.ObjectId, 
        ref : "Comment"
    }]
}, { timestamps: true })

let CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        required: [true, 'Name cannot be blank']
    },
    content: {
        type: String,
        maxlength: 200,
        required: [true, 'Message cannot be blank']
    },
    _message : {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, { timestamps: true })

var Message = mongoose.model('Message', MessageSchema)
var Comment = mongoose.model('Comment', CommentSchema)

//search all
app.get('/', function(req, res){
    Message.remove();
    Comment.remove();
    Message.find({}).populate('comments').exec(function(err, messages){
        if (err){
            let error_arr=[]
            for (key in err.errors){
                let error= err.errors[key]
                error_arr.push(error.message)
            }
            console.log('------------------------------------');
            console.log(error_arr);
            console.log('------------------------------------');
        }
        
        res.render('index', { 'messages' : messages })
    })
})

//create
app.post('/messages/create', function(req, res){
    Message.create(req.body, function(err, message){
        if(err){
            let error_arr=[]
            for (key in err.errors){
                let error= err.errors[key]
                error_arr.push(error.message)
            }
            console.log('------------------------------------');
            console.log(error_arr);
            console.log('------------------------------------');
        } else {
            res.redirect('/')
        }
    })
})

//create and adding relating
app.post('/comments/create/:id', function(req, res){
    Message.findById({ _id : req.params.id}, function(err, message){
        var comment = new Comment(req.body); //save comment
        comment._message = message._id;
        comment.save(function (err){
            message.comments.push(comment);
            message.save(function(err){
                if(err){
                    let error_arr=[]
                    for (key in err.errors){
                        let error= err.errors[key]
                        error_arr.push(error.message)
                    }   
                    console.log('------------------------------------');
                    console.log(error_arr);
                    console.log('------------------------------------');
                } else {
                    res.redirect('/')
                }
            })
        })
    })
})

app.listen(8000, function(){
    console.log('------------------------------------');
    console.log('Listening on port 8000...');
    console.log('------------------------------------');
})