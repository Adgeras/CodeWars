
function enough(cap, on, wait) {
    // your code here
    let freeSpace = cap - on; 40
    if ( freeSpace - wait > 0) {
        return 0;
    } else {
        let notFit = wait - freeSpace;
        return notFit
    }
       
    }


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.


/***** IMODMUS SPRENDIMAS ***** */
// function enough(cap, on, wait) {
//     return (on+wait > cap) ? on+wait-cap : 0;
//   }