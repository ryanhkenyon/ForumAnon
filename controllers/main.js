const Thread = require("../models/Thread");

module.exports = function (req, res) {

  Thread.find({})
    .lean()
    .then((allThreads) => {
      let context = {
        threads: allThreads,
      };

      res.render("threads.hbs", context);
    });

};
