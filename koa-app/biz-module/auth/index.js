'use strict';
var debug = require('debug')('koa-jenkins:auth'),
  copy = require('copy-to'),
  route = require('path-match')({
    end: false,
    strict: false,
    sensitive: false
  }),
  defaultOptions = {
    userField: 'user',
    rootPath: '/',
    loginPath: '/login',
    logoutPath: '/logout',
    match: '',
    ignore:'/404.html'
  };

var needLogin = route(defaultOptions.match);

module.exports = function(options) {
  options = options || {};
  copy(defaultOptions).to(options);

  function isIgnorePath(path){
    var ret = false;
    var ignoreList = options.ignore.split(',');
    for (var i = ignoreList.length - 1; i >= 0; i--) {
      var p = ignoreList[i];
      if(path == p){
        ret = true;
        break;
      }
    };
    return ret;
  }
  /**
   * Login flow
   * 1. unauth user will redirect to options.loginPath
   *
   */
  return function * userauth(next) {
    var loginRequired = !! needLogin(this.path);
    debug('url: %s, path: %s, loginPath: %s, session exists: %s, login required: %s',
      this.url, this.path, options.loginPath, !! this.session, loginRequired);

    if (this.path == options.loginPath) {
      debug('login pass');
      return yield * next;
    }

    if(isIgnorePath(this.path)){
      debug('path %s is a ignore path',this.path);
      return yield * next;
    }

    if (loginRequired && this.session[options.userField]) {
      debug('alreay logined pass');
      return yield * next;
    }

    if(this.path == options.ignore){

    }

    var ctx = this;
    var nextGen = (function * nextHandler() {
      var redirectURL = ctx.url;
      try {
        redirectURL = encodeURIComponent(redirectURL);
      } catch (e) {
        // URIError: URI malformed use source url
      }
      var loginURL = options.loginPath + '?redirect=' + redirectURL;
      debug('redirect to %s', loginURL);
      redirect(ctx, loginURL);
    })();

    yield *nextGen;

  }
}



/**
 * Send redirect response.
 *
 * @param  {Context} ctx
 * @param  {String} url, redirect URL
 * @param  {Number|String} status, response status code, default is `302`
 *
 * @api public
 */

function redirect(ctx, url, status) {
  if (ctx.accepts('html', 'json') === 'json') {
    ctx.set('Location', url);
    ctx.status = 401;
    ctx.body = {
      error: '401 Unauthorized'
    };
    return;
  }
  return ctx.redirect(url, status);
}