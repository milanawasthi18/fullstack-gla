// function fun1 (){
//     console.log("fun1");
    
//     function fun2(){
//         console.log("fun2"); 
//     }
//     return fun2;
// }
//****************************************************************** */
// function fun1 (){
//     let a = 2;
//     let b = 5;
    
//     function fun2(){
//         return a+b;
//     } 
//     return fun2;
// }

// fun1 will return fun2 with its lexical(parent scope)

// console.log(fun1());
// let returnFun = fun1();
// console.log(returnFun());

//********************************************************************** */

// function fun1 (){
//     let a = 2;
//     let b = 5;
    
//     function fun2(){
//         let c =4;
//         function fun3(){
//             return a+b+c;
//         }
//         return fun3;

//     } 
//     return fun2;
// }

// console.log(fun1());
// let returnFun1 = fun1();

// instead of this we can do
// fun1()(); //==> calling fun2 directly
// console.log(fun1()()()); //==> calling fun3 directly using ();

/************************************************************************ */

function fun1 (){
    let a = 2;
    let b = 5;
    
    return ()=>{
        let c = 4;
        return ()=>{
            return a+b+c;
        }
    }

} 

console.log(fun1()()());










