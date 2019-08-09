var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function (err, messages) {
        if (err) {
          console.log(err);
        } else {
          callback(null, messages);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      let instruction =`INSERT INTO messages (userMessage) VALUES('${message}')`;
      console.log('instruction: ', instruction);
      db.connection.query(instruction, function (err) {
        if (err) {
          console.log(err);
        } else {
          callback(null, console.log('message posted!'));
          // callback(null, messages);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query(`SELECT username FROM users`, function (err, users) {
        if (err) {
          console.log(err);
        } else {
          callback(null, users);
        }
      })
    },
    post: function (user, callback) {
      let instruction = `INSERT INTO users (username) VALUES ('${user}')`;
      db.connection.query(instruction, function (err) {
        if (err) {
          console.log(err);
        } else {
          callback(null, console.log('yay'));
        }
      })
    }
  }
};

