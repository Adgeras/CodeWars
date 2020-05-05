"use strict"

function countSheeps(arrayOfSheep) {
     let count = 0;
    // TODO May the force be with you
      for (let i=0; i<arrayOfSheep.length; i++){
        if (arrayOfSheep[i] === true){
            count += 1;
        }
    }
    return count;
  }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));

   