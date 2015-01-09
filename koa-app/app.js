"use strict";
var app = module.exports = require('koa')();
var favicon = require('koa-favicon'),
  logger = require('koa-logger'),
  mount = require('koa-mount'),
  session = require('koa-generic-session'),
  serve = require('koa-static'),
  debug = require('debug')('koa-jenkins'),
  redisStore = require('koa-redis');

// biz-module
var bizModule = require('./biz-module-initializer'),
  home = require('./biz-module/home'),
  login = require('./biz-module/login'),
  userauth = require('./biz-module/auth');



app.keys = ["I'm a key"];
app.use(logger());
app.use(favicon(__dirname + '/public/favicon.ico'));
// Session
app.use(session({
  //store: redisStore()
}));
// Auth
app.use(bizModule['auth']());
app.use(serve(__dirname + '/public'));

//mount
app.use(mount('/', bizModule['home']));
app.use(mount('/login', bizModule['login']));
app.use(bizModule['404']);


if (!module.parent) {
  app.listen(3000);
}