// ar is duotu krastiniu susidaro trikampis
//The sum of the lengths of any two sides of 
//a triangle is always larger than the length 
//of the third side

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}


console.log(isTriangle(10,6,3));
   
