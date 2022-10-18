const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {type:String, required:true},
    thread:{type:mongoose.Schema.Types.ObjectId, ref: 'Thread'}
});

module.exports = mongoose.model('Comment',commentSchema);