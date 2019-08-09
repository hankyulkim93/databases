var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messages) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(messages);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('msg log: ', req); //req.body.message
      console.log(req.body);
      console.log('req.body.message: ', req.body.userMessage)
      models.messages.post(req.body.userMessage, (err, message) => {
        if(err) {
          console.log(err);
        } else {
          res.send(req.body);
        }
      })

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // res.send(models.users.get(err, data));
      models.users.get((err, users) => {
        if (err) {
          console.log(err);
        } else {
          res.send(users);
        }
      })
    },
    post: function (req, res) {
      // console.log(req);
      models.users.post(req.body.username, (err, users) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(req.body);
          res.send(req.body);
        }
      })
    }

  }
};

