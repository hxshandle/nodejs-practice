var _ = require("underscore");

var _q = require('./methods/quicksort');
var _pq = require('./methods/partition_quicksort');

var arr = _.shuffle(_.range(10));
console.log(arr);
var sortArr = _q.QuickSort(arr);
console.log(sortArr);


console.log('partition quick sort');
var arr2 = _.shuffle(_.range(8));
arr2 = [5, 3, 7, 4, 1, 9, 8, 6, 2];
console.log(arr2);
_pq.QuickSort(arr2);
console.log(arr2);

