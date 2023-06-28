//AJAX -> Asynchronous js and XML

//HTTP request { client(Browser) and Server}
//is a set of "web dev. technologies"
//using many web-technology on the "client-side"
//to create asyn. web application

//with AJAX, web application can send and retrieve data from a server asynchronously (in the b-g) w/o interferring with the display and behaviour of the existing page.

console.log("All about XHR");
//search - json typicode
// const URL="https://jsonplaceholder.typicode.com/postsss"; //case-1
const URL="https://jsonplaceholder.typicode.com/posts";

// const t=new XMLHttpRequest; //working but won't use
const xhr=new XMLHttpRequest();
// console.log(t);
console.log(xhr);

//search mdn xhr ready state
console.log(xhr.readyState); //0 open not called

//step-1
xhr.open("GET",URL);
console.log(xhr.readyState); //1 open has been called

// xhr.onreadystatechange=function(){
    // console.log(xhr);
    // console.log(xhr.readyState);  //only when xhr.send() 2 , 3 , 4

    //doubt why this not
    // if(xhr.readyState==3)
    // {
    //     // console.log(xhr);
    //     // console.log(xhr.response);
    //     // console.log(typeof xhr.response); //string
    //     // const response=xhr.response;
    //     // // JSON.parse(response);
    //     // const data=JSON.parse(response);
    //     // console.log(data, typeof data);
    // }

    // if(xhr.readyState==4)
    // {
    //     // console.log(xhr);
    //     // console.log(xhr.response);
    //     // console.log(typeof xhr.response); //string
    //     const response=xhr.response;
    //     // JSON.parse(response);
    //     const data=JSON.parse(response);
    //     console.log(data, typeof data);
    // }

    //search HTTP status code
    // console.log(xhr.status); // 3 times 404 with case-1
// }

//or we can simply write
// xhr.onload=function (){ //only when readyState will be 4
//     // console.log(xhr.readyState);
//     const response=xhr.response;
//             // JSON.parse(response);
//     const data=JSON.parse(response);
//             console.log(data, typeof data);
    
// }

// xhr.send();
// console.log(xhr.readyState); //1 solved becoz
// 2 when => send() has been called, and headers and status are available.



//error handling
// const URL1="https://jsonplaceholder.typicode.com/posts";
// const URL1="https://jsonplaceholder.typicode.com/postsfss";
// const xhr1=new XMLHttpRequest();

// xhr1.open("GET",URL1);

// xhr1.onload=()=>{
    // console.log(xhr1.status);
    // if(200<= xhr1.status && xhr1.status<300)
    // {
    //     const data=JSON.parse(xhr1.response);
    //         console.log(data, typeof data);
        // console.log(data[9]);
        // console.log(data[9].id);
        // const url=`${URL1}/${data[9].id}`;
        // console.log(url);
        // const xhr2=new XMLHttpRequest();

        // xhr2.open("GET",url);

        // xhr2.onload=()=>{
        //     if(200<= xhr2.status <300)
        //     {
        //         const data=JSON.parse(xhr2.response); 
        //         console.log(data);
        //     }
        //     else console.log("syntax error");
        // }
        // xhr2.onerror=()=>{
        //     console.log("Network error");
        // }
        
        // xhr2.send();


//     }
//     else console.log("syntax error");
// }

// xhr1.onerror=()=>{
//     console.log("Network error");
// }

// xhr1.send();




//using promises

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url) {
//     return new Promise((resolve, reject)=> {
//         const xhr  = new XMLHttpRequest();
//         xhr.open(method, url);
//         // console.log("status is: ",xhr.status); //0
//         xhr.onload = function() {
//             // console.log("status is: ",xhr.status); //200
//             if(xhr.status >= 200 && xhr.status < 300){
//                 // resolve("sucess");
//                 resolve(xhr.response);
                
//             }
//             else{
//                 reject(new Error("Something Went wrong"));
//             }
//         }

//         xhr.onerror = function() {
//             reject(new Error("Something went wrong"));
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
//     .then(response => {
//         // console.log(response);
//         const data = JSON.parse(response);
//         // console.log(data)
//         return data;
//     })
//     .then(data=>{
//         const id = data[3].id;
//         // console.log(id);
//         return id;
//     })
//     .then(id=>{
//         const url = `${URL}/${id}`;
//         // const url = `${URL}/${id}ssss`;
//         return sendRequest("GET", url);
//     })
//     .then(newResponse => {
//         const newData = JSON.parse(newResponse);
//         console.log(newData);
//     })
//     .catch(error =>{
//         console.log(error);
//     })