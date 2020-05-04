function highAndLow(numbers){

    let high = -Infinity;
    // let low = 0;
    for (let i = 1; i < numbers.length; i++) {
        let currentH = numbers[i];
        // let currentL = numbers[0];
        
        if ( currentH > high) {
            high = currentH;
        }
        // if ( currentL < numbers[i]) {
        //     low = currentL;
        // }
        
    }
    return (`high= ${high}`);
  }

5,10,3,15,55,11
// antra lyginti su pirmu, is santykio pasiimti didesni
// tada trecia lyginti su didesniu



console.log(highAndLow([1000, 2000, 60, 1050, 100]));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5"); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5"); // return "9 -5"