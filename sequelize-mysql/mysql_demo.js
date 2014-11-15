/**
 * Created by 123 on 2014/11/15.
 */
var db = require('./lib/mysql_pool');
db.query("select * from user",null,function(err,results){
  console.log(results);
});