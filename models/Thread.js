const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    threadName: {type:String, required: true},
    threadContent: {type: String, required: true},
    comments:[{type:mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Thread', threadSchema);