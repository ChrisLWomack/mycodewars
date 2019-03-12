//Every day you rent a car it cost 40 dollars, if renting for 7 or more days its 50 dollars off your total, if 3 or mor days its 20 dollars off your total

function rentalCarCost(d) {
console.log(d)
 let total = d * 40;
 if(d>=7){
 return total -= 50
 } else if(d>=3 && d<7){
 return total -= 20
 }else{
 return total
 }
  // Your solution here
}
