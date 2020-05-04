"use strict"

function abbrevName(name){
    // paimti pirmas raides 
    // kaip inicialus ir
    // grazinti su tasku tarp ju.*/

  for (let i = 0; i < name.length; i++) {
      let raide = '';
      if (name[i] === ' ') {
        raide = name[0].toUpperCase() + '.' + name[i+1].toUpperCase();   
          return raide;
        }
    }
}

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }


console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");