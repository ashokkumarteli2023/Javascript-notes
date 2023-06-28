// console.log("Dom Travesing");

const rootNode=document.getRootNode();
// console.log(rootNode);
// console.dir(rootNode);
// console.log(rootNode.childNodes); //NodeList [html]

const htmlElementNode=rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes); //NodeList head, text, body
// console.log(htmlElementNode.childNodes[1]);

const headElementNode=htmlElementNode.childNodes[0];
const textNode1=htmlElementNode.childNodes[1];
const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// console.log(headElementNode.parentNode);

// console.log(headElementNode.childNodes);
// console.log(headElementNode.childNodes[0]);
// console.log(headElementNode.childNodes[0].childNodes); //[] empty

// console.log(headElementNode.childNodes[1]);
// console.log(headElementNode.childNodes[1].childNodes);
// console.log(headElementNode.childNodes[1].childNodes[0]); //"dom traversing"
// console.log(headElementNode.childNodes[1].childNodes[0].childNodes);
// console.log(headElementNode.childNodes[1].childNodes[0].childNodes[0]);//undefined

// console.log(headElementNode.nextSibling); //text
// console.log(headElementNode.nextSibling.nextSibling);  //body
// console.log(headElementNode.nextSibling.nextSibling.nextSibling);  //null
//The nextSibling property returns the node immediately following the specified node, in the same tree level.
//null if  if the specified node is the last child in the parent element.

// console.log(rootNode.nextSibling); 

// console.log(headElementNode.nextElementSibling); //body {text and comment will be ignored}


const h1=document.querySelector("h1");
const body=h1.parentNode.parentNode;
// console.log(body);
// body.style.color="green";

//direct 
//document -> error alreday declared
//html or Html etc.?
//head, body, title etc. working
const head=document.head; //example
// console.log(head);
// console.log(head.parentNode);

//querySelector at any element node
const title=head.querySelector("title");
// console.log(title);

//children
console.log(head.childNodes); //NodeList(5)
console.log(head.children); //HTMLCollection(2)

