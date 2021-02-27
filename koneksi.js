var mysql = require('mysql');

const conn = mysql.createConnection({
    host: '192.168.64.2',
    user: 'root',
    password: 'password',
    database: 'dbrestapi',
});

conn.connect((err) => {
  if (err) throw (err);
  else console.log('Mysql terkoneksi');
});

module.exports = conn;

