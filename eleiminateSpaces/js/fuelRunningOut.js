const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
return ((fuelLeft * mpg) >= distanceToPump);
}

// distanceToPump - miles 100
// mpg - miles per gallon 20
// fuelLeft - gallons      5

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);