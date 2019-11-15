var db = require('../db');

module.exports = {
  messages: {
    get: function (body, cb) {
      var queryString = `SELECT * FROM messages;`;
      var queryArgs = [];
      db.db.query(queryString, queryArgs, function (err, results) {
        console.log('results**************', results);
        if (err) {
          console.log('err on get: ', err);
        }
        console.log(JSON.stringify(results));
        cb(JSON.stringify(results));
      });
    }, // a function which produces all the messages
    post: function (body, cb) {
      console.log(body);
      var queryString = `INSERT INTO rooms(RoomName) VALUES ('${body.roomname}');`;
      var queryString2 = `INSERT INTO messages(MSG, userID, roomID) VALUES ('${body.message}', (SELECT id FROM users WHERE username = '${body.username}'), (SELECT id FROM rooms WHERE roomname = '${body.roomname}'));`;
      var queryArgs = [];
      db.db.query(queryString, queryArgs, function (err, results) {
        console.log('results', results);
        if (err) {
          console.log('duplicate rooms');
        }
        db.db.query(queryString2, queryArgs, function (err, results) {
          console.log('results2', results);
          if (err) {
            console.log('error in post query: ', err);
            return;
          }

          cb();
          console.log('query post success 2');
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function (username, cb) {
      //want to post into db frmo here, its loaded in
      // console.log('database: ', db.db);
      var queryString = `INSERT INTO users(username) VALUES ('${username}');`;
      var queryArgs = [];
      db.db.query(queryString, queryArgs, function (err, results) {
        // Should have one result:
        if (err) {
          console.log('duplicate entry');
        }
        console.log('query post success');
        cb();
      });

    }
  }
};

