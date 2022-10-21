const controllers = require('../controllers/index');
const { body } = require('express-validator');
module.exports = (app) => {
    app.get('/',controllers.main);//main page
    app.get('/topic',controllers.topic); //get topic page
    app.get('/thread/:id',controllers.thread); //get thread page
    app.get('/create/topic',controllers.create.topic.get); //??? topic
    app.post('/create/topic',controllers.create.topic.post); //post topic
    app.get('/create/thread/',controllers.create.thread.get); //??? topic
    app.post('/create/thread',controllers.create.thread.post); //post topic
    app.get('/create/comment/:threadId',controllers.create.comment.get); // ??? comment
    app.post('/create/comment/:threadId',controllers.create.comment.post); //post comment
    app.get('/delete/comment/:commentId', controllers.delete.comment.get); //delete comment
    app.get('/delete/thread/:threadId', controllers.delete.thread.get); //delete thread
    app.get('/edit/thread/:threadId',controllers.edit.thread.get); //get edit thread page
    app.post('/edit/thread/:threadId',controllers.edit.thread.post); //update thread
    app.get('/edit/comment/:commentId',controllers.edit.comment.get); //get edit thread page
    app.post('/edit/comment/:commentId',controllers.edit.comment.post); //update thread

    app.get("/user/login",controllers.user.login.get); // get the login page
    app.post("/user/login",controllers.user.login.post); // log user in;
    app.get("/user/register",controllers.user.register.get); // get the register page
    app.post("/user/register",body("username").trim().isLength({min:5}),body("password").trim().isLength({min:5}),controllers.user.register.post); // log user in;
    app.get("/user/logout",controllers.user.logout.get); // log user out;

    app.get('*',controllers.error); //404 page

};