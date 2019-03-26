//Complete the function that takes a non-negative integer n as input, and returns a list
//of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

function powersOfTwo(n){

 let myArray = []
 let num = 0

 for(i=0; i<=n; i++){
 num = 2**i
 myArray.push(num)

 }


  return myArray
}
