const Thread = require(`../models/Thread.js`);
const Comment = require(`../models/Comment.js`);
const thread = require("./thread.js");

module.exports =  {

     thread: {
        get: function(req,res){
            let threadId = req.params.threadId;
            Thread.findById(threadId).lean().then((thread)=>{
                res.render('editThread.hbs', thread);
            });
        },
        post: function(req, res) {
            let threadId = req.params.threadId;
            let body = req.body;
            Thread.findByIdAndUpdate(threadId, {
                $set: {...body}
            }).then(result=>{
                console.log(result)
                res.redirect(`/thread/${threadId}`);
            })
        }
     },
     comment: {
        get: function(req,res){
            let commentId = req.params.commentId;
            
            Comment.findById(commentId).lean().then((comment)=>{
                res.render('editComment.hbs', comment);
            });
        },
        post: function(req, res) {
            let commentId = req.params.commentId;
            let body = req.body;
            console.log(req.body);
            Comment.findByIdAndUpdate(commentId, {
                $set: {...body}
            }).then(result=>{
                console.log(result)
                res.redirect(`/thread/${result.thread}`);
            })
        }
     }
};
