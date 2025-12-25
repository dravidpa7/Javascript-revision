// // Hoistion get differ for First 2 Function a() b()
// //a();
// // b(); - b is not a function because of var
// // Function statement or Function Decleration
// function a(){
//     console.log("Hello");
// }
// a();

// // Function expression
// var b = function(){
//     console.log("World")
// }
// b();

// // Ananymoous function
// // function (){

// // }

// // Named Function expression
// var namedFunction = function xyz(){
//     console.log("Name")
// }
// namedFunction()


// // Diffrence Between Parameter and Arguments
// function sample(Parameter1,Parameter2){
//     console.log("Hiiii")
// }
// var Argument = 0
// sample(Argument, Argument)

// // First Class Function
// // First class citizen
// function firstClass(para1){
//     console.log(para1)
// }

// firstClass(function Hello(){
                
// })

// firstClass(a)

// function jen(){
//     return jen
// }

// var data = jen()
// console.log(data)

// // Arrow Function - ES6
// let Function = (a,b)=>{return a+b}
// console.log(Function(1,2))

// callback Function
// What is callback function
// Asyn world in Single threaded language
// setTimeout(function(){
//     console.log("Timer");
// },5000)

// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){ 
//     console.log("y")
// })

// EventListener
function counterTime(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function xxy(){
        console.log("Button clicked",++count)
    })
}

counterTime()