const db = require("../config/database.js");
const Thread = require("../models/Thread");
const Comment = require("../models/Comment");
const bodyParser = require("body-parser");
const thread = require("./thread.js");

module.exports = {
  topic: {
    get: function (req, res) {},

    post: function (req, res) {
      let body = req.body;
    },
  },
  thread: {
    get: function (req, res) {
      res.render("createThread.hbs");
    },
    post: function (req, res) {
      let body = req.body;
      new Thread(body).save().then((result) => {
        res.redirect("/");
      });
    },
  },
  comment: {
    get: function (req, res) {
       let threadId = Object.values(req.params)[0];

        Thread.findById(threadId).populate('comments').lean().then((thread)=>{
             res.render('thread.hbs',thread);
        });
      
    },

    post: function (req, res) {
      let threadId = Object.values(req.params)[0];

      new Comment(req.body).save().then((comment)=>{
        Thread.findById(threadId).then(thread=>{
          thread.comments.push(comment);
          thread.save();
        });
        comment.save();
        res.redirect(`/thread/${threadId}`);
      });
    },
  },
};
