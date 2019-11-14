var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log('users ran');
      //controller calls the mo
      del post req
      // console.log(req);
      models.users.post(req.body.username);
      // res.sendStatus(201);
    }
  }
};

