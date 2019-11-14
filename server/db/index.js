var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.db = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});
module.exports.db.connect((err) => {
  if (err) {
    console.log('err: ', err);
    return;
  }
  console.log('connection made');
});
// console.log('init db', module.exports.db);
