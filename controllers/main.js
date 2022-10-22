const Thread = require("../models/Thread");

module.exports = function (req, res) {

  let loggedIn = req.loggedIn;

  Thread.find({})
    .lean()
    .then((allThreads) => {
      let context = {
        threads: allThreads,
        loggedIn,
      };

      res.render("threads.hbs", context);
    });

};
