const Thread = require(`../models/Thread.js`);
const Comment = require(`../models/Comment.js`);
const thread = require("./thread.js");

module.exports =  {

     thread: {
        get: function(req,res){
            let threadId = req.params.threadId;
            let loggedIn = req.loggedIn;
            Thread.findById(threadId).lean().then((thread)=>{
                let context = {
                    thread,
                    loggedIn,
                };
                res.render('editThread.hbs', context);
            });
        },
        post: function(req, res) {
            let threadId = req.params.threadId;
            let body = req.body;
            if (!body.threadContent.endsWith("(Edited)")) {
                body.threadContent = body.threadContent + " (Edited)";
            }
            Thread.findByIdAndUpdate(threadId, {
                $set: {...body}
            }).then(result=>{
                // console.log(result);
                res.redirect(`/thread/${threadId}`);
            });
        }
     },
     comment: {
        get: function(req,res){
            let commentId = req.params.commentId;
            let loggedIn = req.loggedIn;
            
            Comment.findById(commentId).lean().then((comment)=>{
                let context = {
                    comment,
                    loggedIn,
                };
                res.render('editComment.hbs', context);
            });
        },
        post: function(req, res) {
            let commentId = req.params.commentId;
            let body = req.body;
            if (!body.comment.includes("(Edited)")) {
                body.comment = body.comment + " (Edited)";
            }
            // console.log(req.body);
            Comment.findByIdAndUpdate(commentId, {
                $set: {...body}
            }).then(result=>{
                // console.log(result);
                res.redirect(`/thread/${result.thread}`);
            })
        }
     }
};
