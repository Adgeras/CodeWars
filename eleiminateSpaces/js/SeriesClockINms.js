function past(h, m, s){
    //#Happy Coding! ^_^
    let result = s*1000+m*60000+h*3600000;
    return result;
  }

// h, min, s;

console.log(past(0,1,1),61000);
console.log(past(1,1,1),3661000);
console.log(past(0,0,0),0);
console.log(past(1,0,1),3601000);
console.log(past(1,0,0),3600000);

/*
1 s = 1000 milliseconds
1 minute = 60 000 milliseconds
1 hour = 3 600 000 milliseconds */