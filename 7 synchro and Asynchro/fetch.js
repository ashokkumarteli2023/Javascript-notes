// console.log("All about fetch");

//fetch -> For making a request and fetching a resource
    // takes an argument
    //return a Promise
    //Fetch provides a generic definition of Request and Response objects
    //It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status.

const URL= "https://jsonplaceholder.typicode.com/posts";
// const URL= "https://jsonplaceholder.typicode.com/postsss";


const fetchOP=fetch(URL);
// console.log(fetchOP); //Promise



//by default GET method
fetch(URL)
    .then( responseS => {
      
        // console.log(typeof responseS); //object
        
    

        // console.log("error still it's working");

        if(responseS.ok)
            return responseS.json();
        else {
            
            throw new Error("something went wrong") ;
            // return new Error("something went wrong") ; //work
        }

    })
    .then( data => {
        // console.log(data);
        // console.log(typeof data);
        console.log(Array.isArray(data)); //true
    })
    .catch(error => {
        console.log("inside");
        console.log(error); //not work
                //work when n/w error
    })


// POST
// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then( responseS => {
//         // console.log(typeof responseS); //object
//         if(responseS.ok)  return responseS.json();
//         else throw new Error("something went wrong") ;
//     })
//     .then( data => {
//         console.log(data);
//         // console.log(Array.isArray(data)); //false
//         console.log(typeof data); //object
//     })
//     .catch(error => { console.log(error); })
    
        
        




// async and await
// async function getpost(){ //will return a Promise
    
//     const resp=await fetch(URL);
//     // console.log(resp);
//     const data=await resp.json();
//     // console.log(data);

//     return data;
// }

// const t=getpost();
// console.log( t); //promise

// getpost()

// const myData=getpost();
// console.log(myData); //Promise

// getpost()
//     .then( ourData => {
//         console.log(ourData);
//     })
   