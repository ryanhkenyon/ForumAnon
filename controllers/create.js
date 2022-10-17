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
        console.log(result);
        res.redirect("/");
      });
      console.log(body);
    },
  },
  comment: {
    get: function (req, res) {
       let threadId = Object.values(req.params)[0];

        Thread.findById(threadId).lean().then((thread)=>{
             console.log(thread);
             res.render('createComment.hbs',thread);
        });
      
    },

    post: function (req, res) {
      let threadId = Object.values(req.params)[0];
      let body = req.body;

      new Comment(req.body).save().then((comment)=>{
        console.log(comment)
        Thread.findById(threadId).then(thread=>{
          console.log(thread)
          thread.comments.push(comment);
          thread.save();
        });
        return comment.save();
      });
    },
  },
};
