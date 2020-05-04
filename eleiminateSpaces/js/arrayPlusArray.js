function arrayPlusArray(masyvas) {
    let suma = masyvas.reduce((a,b) => a + b, 0)
    return suma;
  }

  console.log(arrayPlusArray([10,10,5,5,]));