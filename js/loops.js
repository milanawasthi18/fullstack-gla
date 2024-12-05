// //1
// for(let i=0;i<10;i++){
//     console.log(i);
    
// }

// //2
// let i =5,k=10;
// while(i<k){
//     console.log(i--);
    
// }

// //3
// do{
//     console.log("at least print once even if the condition is false");
    
// }while(i>k);

//4
// arr = [2,3,4,5,6];
// for(let idx in arr){    //idx ==> index of the arr
//     console.log(arr[idx]);
// }

//5
// arr = [2,3,4,5,6];
// for(let idx of arr){   //idx ==> elements of the array
//     console.log(idx);
// }

//examples

let person = {
    name :"himanshu",
    age : 25,
    address:"gonda",
    active: true
}

for(let idx in person){
    console.log( idx ,person[idx]);
    
}

// for(let idx of person){
//     // console.log(idx);  will give error
//     console.log(person["idx"]); 
// }
