let Thread = require('../models/Thread');

module.exports = function(req,res){

    let threadId = req.params.id;
    // console.log(threadId);

    Thread.findById(threadId).lean().then((thread)=>{
        // console.log(thread);
        res.render('thread.hbs',thread);
    });
};