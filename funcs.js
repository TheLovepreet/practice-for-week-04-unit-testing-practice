function isFive(num) {
  // Your code here
  if(num === 5){
    return true;
  }
  else{
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if(typeof number !== "number"){
    throw new Error("Please Enter a Number");
  }
  else{
  if(number % 2 == 0){
    return false;
  }
  return true;
}/*
try{
  isOdd("ello");
}
catch(e){
  console.error(e.message);
}*/
}



function myRange(min, max, step = 1) {
  // Your code here
  let answer = [];
  for(let i = min; i <=max; i += step){
    answer.push(i);
  }
  return answer;
}


module.exports = { isFive, isOdd, myRange };