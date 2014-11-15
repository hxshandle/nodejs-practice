/**
 * Created by 123 on 2014/11/15.
 */
var mysql = require('mysql');
var dbPool = mysql.createPool({
  host: '127.0.0.1',
  database:'jenkins_asia',
  user: 'root',
  password: '!qaz2wsx'
});

function query(sql, param,callback) {
  dbPool.getConnection(function (err, connection) {
    param = param || [];
    connection.query(sql, param, function (err, results) {
      connection.release();
      callback(err,results);
    });
  });
}

exports.query = query;