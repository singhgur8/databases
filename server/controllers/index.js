var models = require('../models');

var headers = {
  'access-control-allow-origin': "*",
  'access-control-allow-methods': "GET, POST, PUT, DELETE, OPTIONS",
  'access-control-allow-headers': "content-type, accept"
};

module.exports = {
  messages: {
    get: function (req, res) {
      var callback = (data) => {

        res.writeHead(200, headers);
        res.end(data);
      };
      console.log('rq.body', req.body);
      models.messages.get(req.body, callback);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var callback = () => {
        res.writeHead(200, headers);
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
        res.writeHead(200, headers);
        res.end();
      };
      models.users.post(req.body.username, callback);
    }
  }
};

