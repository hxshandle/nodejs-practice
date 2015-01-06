"use strict";

var app = module.exports = require('koa')();
var favicon = require('koa-favicon'),
router = require('koa-route'),
logger = require('koa-logger'),
session = require('koa-generic-session'),
redisStore = require('koa-redis');

app.keys = ["I'm a key"];
app.use(logger());
app.use(favicon(__dirname + '/public/favicon.ico'));
//session
app.use(session({
  //store: redisStore()
}));

app.use(function * (next) {
  this.body = "Helloaaa World";
  var session = this.session;
  session.abc = "abc";
  session.ad = "ad";
  yield next;
});

if (!module.parent) {
  app.listen(3000);
}

