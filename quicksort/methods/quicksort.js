/**
 * Created by I073349 on 11/13/2014.
 */
var _ = require('lodash');

function QuickSort (arr){
  if(arr.length ==1 || arr.length ==0){
    return arr;
  }
  var seed = arr.shift();
  var leftArr =[],rightArr=[];
  _.each(arr,function(item){
    if(item < seed){
      leftArr.push(item);
    }else{
      rightArr.push(item);
    }
  });
  return QuickSort(leftArr).concat([seed]).concat(QuickSort(rightArr));
}
exports.QuickSort = QuickSort;