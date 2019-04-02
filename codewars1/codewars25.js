//write a function that takes a str, and returns a reversed version of the strings with no numbers

function reverseLetter(str) {
let splitString = str.split('')
let reverseString = splitString.reverse()
let joinString = reverseString.join('')

let withNoNums = joinString.replace(/[0-9]/g, '')


  return withNoNums

}
