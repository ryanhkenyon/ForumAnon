const controllers = require('../controllers/index');
module.exports = (app) => {
    app.get('/',controllers.main);//main page
    app.get('/topic',controllers.topic); //get topic page
    app.get('/thread/:id',controllers.thread); //get thread page
    app.get('/create/topic',controllers.create.topic.get); //??? topic
    app.post('/create/topic',controllers.create.topic.post); //post topic
    app.get('/create/thread',controllers.create.thread.get); //??? topic
    app.post('/create/thread',controllers.create.thread.post); //post topic
    app.get('/create/comment',controllers.create.comment.get); // ??? comment
    app.post('/create/comment',controllers.create.comment.post); //post comment
    app.get('*',controllers.error); //404 page

};