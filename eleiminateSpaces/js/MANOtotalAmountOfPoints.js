"use strict"

function points(games) {
    let resultAComand = 0;
for (let i = 0; i < games.length; i++) {
    var x = games[i].split(':');
    var xy = x.join('');
    var y = parseInt(xy, 10);
        y = y % 10;
// iki čia turiu "y"
// daba ieškau "x":
        x = parseInt(x, 10);
    if ( x > y) {
        resultAComand = resultAComand + 3;
    }
    if ( x === y ) {
        resultAComand = resultAComand + 1;
    }
}
    return resultAComand;
}




//console.log( points ( ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ,'-> 30');
//console.log( points ( ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , '-> 10');
//console.log( points ( ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , '-> 0');
//console.log( points (["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , '-> 15');
console.log( points (["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]), '-> 12');