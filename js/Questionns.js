//Given an arrays of numbers, filter out the even numbers than double the remaining values and then calculate the sum
let arr = [15,19,20,22,18,13,16,11];
let result = arr.filter(x => x % 2).map(x => x *2).reduce((x,y)=>x+y);
console.log(result);
