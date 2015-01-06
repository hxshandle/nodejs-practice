"use strict";
var app = module.exports = require('koa')();
var favicon = require('koa-favicon'),
  router = require('koa-route'),
  logger = require('koa-logger'),
  session = require('koa-generic-session'),
  userauth = require('koa-userauth'),
  redisStore = require('koa-redis');


app.keys = ["I'm a key"];
app.use(logger());
app.use(favicon(__dirname + '/public/favicon.ico'));
// Session
app.use(session({
  //store: redisStore()
}));
// User Auth
app.use(userauth({
  match: '',
  // auth system login url
  loginURLFormater: function (url,rootPath) {
    return '/login?redirect=' + url;
  },
  // login callback and getUser info handler
  getUser: function* (ctx) {
    var token = ctx.query.token;
    // get user
    return null;
  }
}));


app.use(function * (next) {
  this.body = "Hello World";
  var session = this.session;
  session.abc = "abc";
  session.ad = "ad";
  yield next;
});


if (!module.parent) {
  app.listen(3000);
}