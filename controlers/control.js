var bodyparser = require('body-parser'); //body parser
var mongoose = require('mongoose'); //mongoose
//connecting to database
mongoose.connect('mongodb://test:test@ds041496.mlab.com:41496/todo-aayush');
//setting the scheme
var todoschema = new mongoose.Schema({
    item: String
});
//model or colection
var todo = mongoose.model('todo', todoschema);
var urlencodedparser = bodyparser.urlencoded({
    extended: false
});
module.exports = function (app) {
    app.get('/todo', function (req, res) {
        todo.find({}, function (err, data) {
            if (err) {
                console.log(err);
            }
            res.render('todo', {
                todos: data
            });
        });
    });
    app.post('/todo', urlencodedparser, function (req, res) {
        var newtodo = todo(req.body).save(function (err, data) {
            if (err) {
                console.log(err);
            }
            res.json(data);
        });
    });
    app.delete('/todo', urlencodedparser, function (req, res) {
        todo.find({
            item: req.query.item.trim()
        }).remove(function (err, data) {
            if (err) {
                console.log(err);
            }
            res.json(data);
        })
    });
};