
//***********callback function****************** */
// function calc(add, sub, mul, div){
//     let a = 10;
//     let b = 2;  
//     add(a,b);
//     sub(a,b);
//     mul(a,b);
//     div(a,b);
// }

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }

//****************Normal Function********************************** */
function calc(sign,a,b){
    switch (sign){
    case '+':  console.log(add(a,b));
    break;
    case '-':  console.log(sub(a,b));
    break;
    case '*':  console.log(mul(a,b));
    break;
    case '/':  console.log(div(a,b));
    break;
    }
    
}

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

calc('+',2,3);
