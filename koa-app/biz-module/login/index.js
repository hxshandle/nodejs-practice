var render = require('co-render'),
  join = require('path').join,
  debug = require('debug')('koa-jenkins:biz:login');

module.exports = function() {
  return function * (next) {
    var view = join(__dirname, 'template', 'index.jade');
    debug('view is %s', view);
    var options = {
      cache: true,
      filename: view,
      timestamp: new Date()
    };
    var t1 = (new Date()).getTime();
    this.body = yield render(view, options);
    debug('render %s jade cost %s', view, (new Date).getTime() - t1);
    yield * next;
  }
}();