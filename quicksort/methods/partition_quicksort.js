/**
 * Created by i073349 on 11/17/14.
 */
var _ = require('lodash');

function swap(arr, lIndex, rIndex) {
  var tmp = arr[lIndex];
  arr[lIndex] = arr[rIndex];
  arr[rIndex] = tmp;
}

function partition(arr, left, right) {
  //console.log("partition-> "+left+','+right);
  var pivotValue = arr[right],
      storedIndex = left;
  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, storedIndex++, i);
    }
  }
  swap(arr, storedIndex, right);
  return storedIndex;

}

function Quicksort(arr, left, right) {

  left = left || 0;
  right = right == undefined ? arr.length - 1 : right;
  if (left > right) {
    return;
  }

  var p = partition(arr, left, right);
  Quicksort(arr, left, p - 1);
  Quicksort(arr, p + 1, right);

}

exports.QuickSort = Quicksort;