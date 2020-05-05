function strCount(str, letter){  
    //code here
    let counter = 0;
for (let i = 0; i < str.length; i++) {
   if (str[i] === letter){
       counter++
   }
    }
return counter;
}


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);