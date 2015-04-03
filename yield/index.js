/**
 * Created by I073349 on 4/3/2015.
 */
var co = require('co');


function getText(str){
    return function(done){
        console.log(done);
        //return  str+"abc";
        console.log('original str -> %s',str);
        done.call(this,null,str+"abc");
    };
}

function getText2(){
    return {a:123,b:"123"};
}

function getText3(){
    return ["abc"];
}
// this is wrong
function getText4(){
    return "abc";
}

co(function *(){
    console.log('A1');
    var str = yield getText4("123");
    console.log(str);
    console.log('A2');
    return str;
}).catch(onerror);


function onerror(err){
    console.log('error %s',err);
}
//.then(function(val){
//    console.log('var %s',val);
//},function(err){
//    console.log('err %s',err);
//});
