// String.prototype.allReplace =
//  function(obj) {
//     var retStr = this;
//     for (var x in obj) {
//         retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
//     }
//     return retStr;
// };

// console.log('masina'.allReplace({'a': 'h', 'b': 'o'}));


var chars = {'a':'x','b':'y','c':'z'};
var s = '234abc567bbbbac';
s = s.replace(/[abc]/g, m => chars[m]);
console.log(s);