var _ = require("underscore");

var _q = require('./methods/quicksort');

var arr = _.shuffle(_.range(10));
console.log(arr);
var sortArr = _q.QuickSort(arr);
console.log(sortArr);