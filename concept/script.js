// console.log(x);
// console.log(getName)
// var x = 10;
// function getName(){
//     console.log("Hello")
// }
// console.log(x)
// getName()

// // scope chainig

// function a(){
//     var m = 10
//     let n = 100
//     const o = 1000
//     b()
//     function b(){
//         console.log(m)
//         console.log(n)
//         console.log(o)

//         console.log(h)
//         console.log(i)
//         console.log(j)
//     }

//     console.log(h) 
//     console.log(i)
//     console.log(j)

// }

// var h = 10
// let i = 100
// const j = 1000


// // console.log(m) //All outputs are not defined
// // console.log(n)
// // console.log(o)

// console.log(h) 
// console.log(i)
// console.log(j)


// a()

// console.log(a)
// console.log(b)
// let a = 10
// var b = 100
// console.log(a)
// console.log(b)
// const v = 10

// {
//     let f=0
//     console.log(a)
// }
// // let and const get diffrent output
// let m = 18
// var p = 90
// {
//     let m = 16
//     var p = 80
//     console.log(m)
//     console.log(p)
// }
// console.log(m)
// console.log(p)

// shadowing 
// let g= 10
// {
//     const g = 8
//     console.log(g)
// }
// console.log(g)

// closure
// function x(){
//     var c = 8
//     function y(){
//         console.log(c)
//     }
//     c=30
//     return y;
// }

// let z = x()
// z()

// function v(){
//     var u = 9
//     console.log(u)
// }

// v()

// function a(){
//     var x = 10
//     return function b(){
//         var y = 8
//         return function c(){
//             console.log(x,y)
//         }
        
//     }
// }
// let n = a() 
// let w = n()
// w()

// setTimeout 
// below has higest priority

// function x(){
//     var i = 10
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     console.log("Hii Bro")
// }
// x()

// function x(){
//     var i = 1
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     console.log("Vanakom Bro")
// }
// x()

// To solve this we use let
// function x(){  
//     for(var i = 0; i<=4; i++){
//         setTimeout(function(){
//             console.log(i)
//         },0)
//     }
//     console.log("Vanakom Bro")
// }
// x()

// function x(){  
//     for(var i = 0; i<=4; i++){
//         function closure(x){
//             setTimeout(function(){
//                 console.log(x)
//             },0)
//         }
//         closure(i)
//     }
//     console.log("Vanakom Bro")
// }
// x()