var result = 30>20 ? "didesnis" : "mazesnis"
console.log( result );

const medziagos = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(medziagos.map(narys => narys.length));
  // expected output: Array [8, 6, 7, 9]

// 

// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }

//************************************************* */
//************************************************* */
//************************************************* */
//************************************************* */

//const points=games=>games.reduce((output,current)=>{
   // return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
 // },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }


// console.log( points ( ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ,'-> 30');
// console.log( points ( ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , '-> 10');
// console.log( points ( ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , '-> 0');
// console.log( points (["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , '-> 15');
// console.log( points (["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]), '-> 12');