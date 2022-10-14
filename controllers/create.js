const db = require("../config/database.js");
const Thread = require('../models/Thread');
const bodyParser = require('body-parser');

module.exports = {
    topic: {
        get:function(req,res){

        },

        post:function(req, res){
            let body = req.body;
        }
    },
    thread: {
        get: function(req, res){
            res.render('createThread.hbs');
        },
        post:function(req,res){
            let body = req.body;
            new Thread(body).save().then((result)=>{
                console.log(result);
                res.redirect('/');

            });
            console.log(body);
        }
    },
    comment: {
        get: function(req,res){

        },
        post:function(req,res){
            let body = req.body;
            console.log(body);
        }
    }
};