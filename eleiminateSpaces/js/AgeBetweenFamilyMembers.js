function differenceInAges(ages){
    let min = +Infinity;
    let max = -Infinity;

    for (let i = 0; i < ages.length; i++) {
        const currentmax = ages[i];
        if ( currentmax > max)  {
            max = ages[i];
        }
    }
    for (let i = 0; i < ages.length; i++) {
        const currentmin = ages[i];
        if ( currentmin < min)  {
            min = ages[i];
        }    
    }
return [min, max, (max-min)]
}




console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);