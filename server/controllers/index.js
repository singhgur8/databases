var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var callback = () => {
        res.writeHead(200);
        res.end();
      };
      models.messages.post(req.body, callback);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('controller ran');
      var callback = () => {
        res.writeHead(200);
        res.end();
      };
      models.users.post(req.body.username, callback);
    }
  }
};

