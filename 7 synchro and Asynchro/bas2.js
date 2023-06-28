//promise 

// const bucket = ['chips','vegetables','salt','rice','spices'];

// const friedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('spices') && bucket.includes('rice')){
//         resolve("Fried Rice"); //we can pass anything obj, arr etc.
//     }
//     else {
//         reject("Could not cook");
//     }
// })

//how to consume
// //way-1
// friedRicePromise.then((friedrice)=>{
//     console.log(friedrice);
// },
// (error)=>{
//     console.log(error);
// })

//way-2
// friedRicePromise.then((friedrice)=>{
//         console.log(friedrice);
//     }
// ).catch((error)=>{
//         console.log(error);
//     })

//General we can write {null,function}, {function} etc.




// console.log("Script start");
// const bucket = ['chips','vegetables','salt','rice','spices'];
// const friedRicePromise=new Promise((resolve,reject)=>{
//         if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('spices') && bucket.includes('rice')){
//             resolve("Fried Rice"); //we can pass anything obj, arr etc.
//         }
//         else {
//             reject("Could not cook");
//         }
//     })

//browser task 
//microtask queue {higher priority}
// friedRicePromise.then((friedrice)=>{
//                 console.log(friedrice);
//             }
//         ).catch((error)=>{
//                 console.log(error);
//             })

// for(let i=0;i<1000;i++)
//             console.log(Math.random());

//callback queue
// setTimeout(() => {
//     console.log("Here is settimeout function");
// }, 0);
// console.log("Script end");

//function returning Promise
// const bucket = ['chips','vegetables','salt','rice','spice'];
function promiseFunc(){
    const bucket = ['chips','vegetables','salt','rice','spice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('spices') && bucket.includes('rice')){
            resolve("Fried Rice"); //we can pass anything obj, arr etc.
        }
        else {
            reject(" Could not cook-1");
        }
    })
}

promiseFunc()
    .then((friedrice)=>{console.log(friedrice);})
    .catch((error)=>{console.log(error);})


//promise and settimeout

// function promiseFunc(){
//         const bucket = ['chips','vegetables','salt','rice','spice'];
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {

//                 if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('spices') && bucket.includes('rice')){
//                     resolve("Fried Rice"); //we can pass anything obj, arr etc.
//                 }
//                 else {
//                     reject("Could not cook");
//                 }

//             }, 2000);
                
//         })
//     }
    
//     promiseFunc()
//         .then((friedrice)=>{console.log(friedrice);})
//         .catch((error)=>{console.log(error);})
    
