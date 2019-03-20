//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  let myArray = array
  let endArray = []
  for(i=0; i<myArray.length; i++){
 let answer = myArray[i] * -1
 endArray[i] = answer

}

  return endArray ;
}
