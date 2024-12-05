//synchronous -->  blocking
//asynchronous --> non-blocking


console.log("hello");
console.log("hii");

// this will not be executed because of the above two lines are in
// synchronous mode and it will be executed after the above two lines are executed.

// to create a delay mimicing the sync
waitNsec(0);
console.log("world"); 



function waitAsec(){
    let curr_time = new Date().getTime();
    let fut_time = curr_time + 1000;
    while(new Date().getTime() < fut_time){
        // do nothing   
    }
}

function waitNsec(n){
    for(let i=0;i<n;i++){
        waitAsec();
    }
}

setTimeout(()=>{
    console.log("inside setTimeout");
    
},3000);

let id =setInterval(()=>{
    console.log("inside setInterval");
},4000);

setTimeout(()=>{
    clearInterval(id);
},3000);

console.log("jim");




