let Thread = require('../models/Thread');

module.exports = function(req,res){

    let threadId = req.params.id;
    // console.log(threadId);

    Thread.findById(threadId).populate('comments').lean().then((thread)=>{
        res.render('thread.hbs',thread);
    });
};