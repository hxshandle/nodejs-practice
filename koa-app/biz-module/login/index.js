module.exports = function(){
  return function *(next){
    this.body = "this is login";
    yield *next;
  }
}();