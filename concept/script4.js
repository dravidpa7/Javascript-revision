// const card = ["Hello","Hii","hey"];
// const address = "D - 123"
// const user = createOrder(card);

// user
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err.message);
//     })
//     .then(function(){
//         return PaymentAddress(address)
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     // .catch(errorMsg => {
//     //     console.log(errorMsg);
//     // })
//     .catch(function(err){
//         console.log(err);
//     })  

// function createOrder(card){
//     const pr = new Promise(
//         function(resolve,reject){
//             const Flag = true
//             if(Flag == true){
//                 const error = new Error ("Promise Rejecetd");
//                 reject(error)
//             }
//             else
//                 resolve("Promise Accecpted")
//         }
//     )

//     return pr
// }

// function PaymentAddress(address){
//     return new Promise( function(resolve, reject){
//         // resolve("Address captured")
//         reject("error capture")
//     })
// }

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P1 success"),3000);
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P2 Reject"),5000);
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>reject("P3 success"),4000);
// })

// // const result = Promise.all([p1,p2,p3])
// // const result = Promise.allSettled([p1,p2,p3])
// // const result = Promise.race([p1,p2,p3])
// const result = Promise.any([p1,p2,p3])


// // console.log(result);

// result
//     .then((res)=>console.log(res))
//     .catch((error)=> console.log(error.errors))

// async function getName(){
//     // return new Promise((resolve,reject)=>resolve("Hello"))
//     return "Hii"
// }
// const dataPromise = getName()
// dataPromise.then((data)=>console.log(data))
// console.log(dataPromise);

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("Hi"),2000)
// })

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("Hello"),5000)
// })
// async function getName(){
//     console.log("Test");
//     const value = await p
//     console.log(value);
//     const value1 = await p1
//     console.log(value1);

// }

// getName()