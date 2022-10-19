const controllers = require('../controllers/index');
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
    app.get(`/delete/:commentId`, controllers.delete); //delete
    app.get('/edit/thread/:threadId',controllers.edit.thread.get); //get edit thread page
    app.post('/edit/thread/:threadId',controllers.edit.thread.post); //update thread
    app.get('/edit/comment/:commentId',controllers.edit.comment.get); //get edit thread page
    app.post('/edit/comment/:commentId',controllers.edit.comment.post); //update thread
    app.get('*',controllers.error); //404 page

};