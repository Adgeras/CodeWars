"use strict"

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < a.length; i++) {
       counter1 += Math.pow(a[i], 2);
     }
    for (let h = 0; h < b.length; h++) {
        counter2 += Math.pow(b[h], 3);
        
    }
    return (counter1 > counter2)
  }




console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);
console.log(arrayMadness([3,4,5],[2,3,4]), false);
console.log(arrayMadness([2,3,4],[1,2,3]), false);
console.log(arrayMadness([1,2,3],[0,1,2]), true);
console.log(arrayMadness([5,3,2,4,1],[15]), false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);

// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1.
// Create a program that returns true if the sum 
// of the squares of each element in a is strictly 
// greater than the sum of the cubes of each element in b.