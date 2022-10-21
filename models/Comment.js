const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {type:String, required:true, match: /((\w)+( )*)/g, maxlength: 5000},
    thread: {type:mongoose.Schema.Types.ObjectId, ref: 'Thread'},
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});



module.exports = mongoose.model('Comment',commentSchema);