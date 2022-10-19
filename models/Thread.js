const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    threadName: {type:String, required: true, match: /((\w)+( )*)/g, maxlength: 50},
    threadContent: {type: String, required: true, match: /((\w)+( )*)/g, maxlength: 5000},
    comments:[{type:mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});

module.exports = mongoose.model('Thread', threadSchema);