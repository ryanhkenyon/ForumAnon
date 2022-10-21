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
      let loggedIn = req.loggedIn;
      res.render("createThread.hbs",{loggedIn});
    },
    post: function (req, res) {
      let body = req.body;
      let user = req.user;
      console.log(user)

      let newThread = {
        ...req.body,
        creatorId:user.id
      }

      new Thread(newThread).save().then((result) => {
        res.redirect("/");
      });
    },
  },
  comment: {
    get: function (req, res) {
       let threadId = req.params.threadId;

        Thread.findById(threadId).populate('comments').lean().then((thread)=>{
          res.render('thread.hbs',thread);
        });
      
    },

    post: function (req, res) {
      let threadId = req.params.threadId;
      let user = req.user;

      let newComment = {
        ...req.body,
        creatorId: user.id
      }
      new Comment(newComment).save().then((comment)=>{
        comment.thread = threadId;
        return comment.save();
      }).then((comment) => {
        Thread.findById(threadId).then(thread=>{
          thread.comments.push(comment);
          return thread.save();
        });
      }).then(
        res.redirect(`/thread/${threadId}`)
      );
    },
  },
};