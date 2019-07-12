var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var data = [{item:'get milk'},{item:'walk dog'},{item:'Learn nodejs'}];

var urlencoderParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

    app.get('/todo',(req,res)=>{
        res.render('todo',{todos:data});
    });

    app.post('/todo',urlencoderParser,(req,res)=>{
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',(req,res)=>{
        data =  data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==req.params.item;
        });
        res.json(data);
    });

};