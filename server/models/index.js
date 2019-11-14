var db = require('../db');

module.exports = {
  messages: {
    get: function () { }, // a function which produces all the messages
    post: function (body, cb) {
      var queryString = `INSERT INTO messages(MSG) VALUES ('${username}'); `;
      var queryArgs = [];
      db.db.query(queryString, queryArgs, function(err, results) {
        // Should have one result:
        if (err) {
          console.log('error in post query: ', err);
          return;
        }
        console.log('query post success');
        cb();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function (username, cb) {
      //want to post into db frmo here, its loaded in
      // console.log('database: ', db.db);
      var queryString = `INSERT INTO users(UserName) VALUES ('${username}');`;
      var queryArgs = [];
      db.db.query(queryString, queryArgs, function(err, results) {
        // Should have one result:
        if (err) {
          console.log('error in post query: ', err);
          return;
        }
        console.log('query post success');
        cb();
      });

    }
  }
};

