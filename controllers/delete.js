const Thread = require(`../models/Thread.js`);
const Comment = require(`../models/Comment.js`);

module.exports = {

    thread: {
        get: function(req,res){
            let threadId = req.params.threadId;
            Thread.findByIdAndRemove(threadId).then(result=>{
                console.log(result);
                res.redirect('/');
            });
        }
    },
    comment: {
        get: function(req,res){
            let commentId = req.params.commentId;
        
            Comment.find({}).then(comments => {
                let filtered = comments.filter(comment => comment.id === commentId);
                let threadId = filtered[0].thread._id.toString();
                Thread.find({_id: threadId}).then(thread => {
                    let threadArr = thread[0];
                    let newArr = threadArr.comments.filter(threadComment => threadComment._id.toString() !== commentId);
                    Thread.findOneAndUpdate({_id: threadId}, {comments: newArr}).then();
                });
                Comment.findByIdAndDelete(commentId).then();
                res.redirect(`/thread/${threadId}`);
            });
        }
    }
        
};