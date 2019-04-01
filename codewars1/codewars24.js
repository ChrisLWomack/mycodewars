//find the sum of the digits of a number

function sumDigits(number) {
    console.log(number)
    let sum = 0;
    if(number < 0){
     number *= -1;
    }
    //store number as a string in variable str
    let str = number.toString()
    console.log(typeof(str))
    //loop through the indices of
    //the string and have sum equal the indices
    //added to eachother
    for(let i = 0; i < str.length; i++){
      sum += Number(str[i]);
    }
    return sum;
  }
