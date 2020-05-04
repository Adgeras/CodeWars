"use strict"

// function arrayPlusArray(masyvas) {
//     let suma = masyvas.reduce((a,b) => a + b, 0);
//     return suma;
//   }

//   console.log(arrayPlusArray([10,10,5,5,]));

function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((a,b) => a+b, 0);
  let sum2 = arr2.reduce((a,b) => a+b, 0);
  
  return sum1 + sum2; //something went wrong
}

console.log(arrayPlusArray([10,10,5,5], [10,10,5,5]));