module.exports = function(){
  return function *(next){
    if(this.status == 404){
      this.redirect('/404.html');
    }
  }
}();