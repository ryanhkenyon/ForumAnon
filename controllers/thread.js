let Thread = require('../models/Thread');

module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    let threadId = req.params.id;

    Thread.findById(threadId).populate('comments').lean().then((thread)=>{
        let context = {
            thread,
            loggedIn,
        };

        res.render('thread.hbs', context);
    });
};