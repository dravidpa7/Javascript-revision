// // let user = {'name':'Dravid','age':18}
// // console.log(user.age);

// // user.age = 21

// // console.log(user.age);  // Mutation

// // // It also same For HTML Changing DOM elements for Updating UI

// // var a = 10 // let Illegal shadowing
// // let b = 20
// // {
// //     var a = 100 // need To use Let
// //     console.log(a)
// //     let g = 50
// // }
// // console.log(a)

// // console.log("A");

// // Promise.resolve().then(() => console.log("Promise"));

// // const box = document.getElementById("box");

// // const observer = new MutationObserver(() => {
// //   console.log("Mutation observed");
// // });

// // observer.observe(box, { childList: true });

// // setTimeout(() => console.log("Timeout"), 0);

// // console.log("B");

// // // 🔥 DOM mutation
// // box.appendChild(document.createElement("span"));

// console.log("Start");

// setTimeout(function(){
//     console.log("CallBack");
// },1000);

// console.log("End");

// let startDate = new Date().getTime();
// let enddate = startDate;

// // while (enddate < startDate + 10000) {
// //     enddate = new Date().getTime();
// // }

// console.log("While Expires")

// Making everything reusable

const radius = [1,2,3,5]

const area = function(radius){
    return Math.PI * radius * radius;
}

const diameter = function(radius){
    return radius * radius;
}



// Array.prototype.calculate = function(radius, logic){
//     let output = []
//     for(i = 0; i < radius.length ; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(radius.calculate(radius,area))
// console.log(radius.map(area));

// console.log(radius.calculate(radius,diameter))

// Array.prototype.calculate = function(logic){
//     let output = []
//     for(i = 0; i < radius.length ; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(radius.calculate(area))
// // Implementing own Array Map method
// console.log(radius.map(area));


let data = [
    {"name": "Dravid", "Age":21, "Msg": "Hello"},
    {"name": "Kaviya", "Age":20, "Msg":"Hii"},
    {"name": "Leo", "Age":19, "Msg": "Das"},
    {"name": "Leo", "Age":19, "Msg": "Das"}
]

const output  = data.reduce(
    function(acc , curr){
        if(acc[curr.Age]){
            acc[curr.Age] = ++acc[curr.Age];   
        }
        else{
            acc[curr.Age] = 1;
        }
        return acc;
    },{}
)

const filter = data.filter( x => x.Age >= 20).map(x=>x.name)
console.log(filter)

const reduce = data.reduce(
    function(acc, curr){
        if(curr.Age >=20) acc.push(curr.name)
        return acc
    }
,[])

console.log(reduce)