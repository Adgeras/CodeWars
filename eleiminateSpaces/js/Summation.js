//var summation = 
function summation(num) {
    // Code here
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += i ; 
    }
    return count;
  }

console.log(summation(1), 1);
console.log(summation(8), 36);