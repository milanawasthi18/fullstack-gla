//ArrayMethods  ==> to transform an array and return a new array 
/*
Map
Filter
Reduce
For-each
*/

// ************************Map*********************

// let arr = [1,2,3,4,5,6];
// console.log(arr.map(mymap));

// function mymap(x){
//     return  x*2;

// }

// console.log(arr.map((x)=>{
//     return x*2;
// })
// );

// console.log(arr.map(x => x*2));

//***************************Filter******************
// let arr1 = [1,2,3,4,5,6];
// console.log(arr1.filter(myfilter));
// function myfilter(x){
//     return x>3;
// }

// console.log(arr1.filter(x => x%2));

//*****************Reduce****************************
//Reduce() 
// let arr2 = [1,2,3,4,5,6];
// console.log(arr2.reduce(myreduce));
// function myreduce(x,y){
    
//     return x+y;
// }

// console.log(arr2.reduce((x,y)=> x+y));

//************For Each***************************** */
// for each dosent return new Array
let arr3 = [1,2,3,4,5,6];
let arr =arr3.forEach(myforeach);
function myforeach(x){
    return  x*2;
}
console.log(arr3); // it will print the original array
console.log(arr);  // it will print undefined because for each dosent return anything
console.log(arr3.forEach((x)=>{
    //it is only for looping
    console.log(x*2);
}
));









