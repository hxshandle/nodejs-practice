var fs = require('fs'),
debug = require('debug')('koa-jenkins:biz-module:init'),
path = require('path');

var bizModules = [];

var files = fs.readdirSync(path.join(__dirname,'biz-module'));
files.forEach(function(item){
  debug('load biz module %s',item);
  bizModules[item] = require('./biz-module/'+item);

});
module.exports = bizModules;