// -------------------------- DOM TRAVERSAL ------------------------------------

const grandParent = document.getElementById("grandParentId");
const parents = Array.from(document.getElementsByClassName(".parent"));

//const child = document.querySelector(".child");
//the above code will select the first .child in the tree

const allChildren = Array.from(document.querySelectorAll(".child"));
allChildren.forEach((element)=>{
    changeColor(element,"brown");
});


//changeColor(child,"orange")

parents.forEach((element)=>{
  changeColor(element,"pink");
})

console.log("Script running")
changeColor(grandParent,"magenta");


function changeColor(element,color)
{
    element.style.backgroundColor = color; 
}

//------------------- moving down the tree-----------------------------
// we can also use child property to get the child of grandparent element
const p = Array.from(grandParent.children);
const pch = p[0].children

changeColor(pch[1],"orange");
//we can use children to keep moving down the tree
//----------------------moving up the tree --------------------------------
const n = document.querySelector(".child");
const par = n.parentElement;
const nearestParent = n.closest(".grandParent");

//-----------------------moving sideways in the tree-----------------------
const chld = document.querySelector(".child");
const sibbling = chld.nextElementSibling;
const prevSibbling  = sibbling.previousElementSibling;

//these above methods can be used to move between elements of the same level

//method like parent,closest("id") can also be used to move up the tree and child to move down the tree

//--------------------------- DOM MANIPULATION---------------------------------------
const body = document.body;
body.append("Oye balle balle Oye!");
body.append("Smile","Ok","please");
//append and appendChild are two methods, append can take multiple parameters
//appendchild takes only one param

//creating a div element 
const div = document.createElement('div');
div.innerText = "This div is inserted by script";
//div.textContent = "This is text content";
div.innerHTML = "<h2>This is inner html by script</h2>"
//inner text gives the content that is visible
//text content gives the intentation hidden strings evenything within an element
body.append(div);

const div2 = document.createElement('div');
const strng = document.createElement('strong');
strng.innerText = "this is strong text";
div2.append(strng);
body.append(div2);

// removing a element
const toberemoved = document.getElementById('toberemoved');
toberemoved.remove();

//printing attributes
const attr = document.getElementById("smptxt");
//console.log(attr.getAttribute());
console.log(attr.test1);
console.log(attr.test2);
console.log(attr.dataset);

//we can also add remove or toggle classes on a specific html element

//------------------------Event listenerns ---------------------------
const grandparent1 = document.querySelector(".grandparent1");
const parent1 = document.querySelector(".parent1");
const child1 = document.querySelector(".child1");

grandparent1.addEventListener("click",e=>{
    console.log("grandparent Bubble event");
});

grandparent1.addEventListener("click",e=>{
    console.log("grandparent capture event");
},{capture:true});

parent1.addEventListener('click',e=>{
    console.log("parent bubble event");
});

parent1.addEventListener('click',e=>{
    console.log("parent capture event");
},{capture:true});


child1.addEventListener('click',e=>{
    //e.stopPropagation()  used to stop the bubbling and capturing of events
    console.log('child bubble event');
})

child1.addEventListener('click',e=>{
    console.log('child capture event');
},{capture:true});

document.addEventListener('click',e=>{
    console.log("document bubble event");
});

document.addEventListener('click',e=>{
    console.log("document capture event");
},{capture:true});
//bubbling is a process where when clicked on an element, the click event is sent to all of its parent
//its moves from child to parent up the tree
//this property is called event bubbling

//when ever we click, the event starts from the parents and goes to the element that is clicked
//and then moved from child back to the parent
// top --> bottom (capturing)
// bottom -> top (bubbling)

//to remove a event listner use remove event listner method

//event delegation is a process of setting up an event listner on the document
//and execute the function if the event bubbles up from your concerned element
// this should be done when the element you are adding can be removed or added into the dom
// if we add listner directly on that element newly added once might not have it or we have to
// ensure that whenever an element is added we should also add event distenenr so we take this approach

//given below we are adding event listner on document and executing a function only if click event bubbles up from div


document.addEventListener('click',e=>{
    if(e.target.matches('div'))
    {
     console.log("document bubble event using event delegation");
    }
});


const num = 50;

let data = num >= 50? "Oye this is 50" : "this is less than 50";

console.log(data);

const animal = "cat";

switch(animal)
{
    case "cat":
        console.log("its a cat");
        break;
    case "dog":
        console.log("WOOF WOOF");
        break;
    case "whales":
        console.log("They are the elephants of ocean");
        break;
    default : 
        console.log("animal not known");
        break;        
}

let dummyPromise = new Promise((resolve,reject)=>{
    const a = 1+2;
    if(a===2)
    {
        resolve("oye balle balle!");
    }
    else
    {
        reject("oops some issue");
    }
});

dummyPromise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error);
})


let p1 = new Promise((resolve,reject)=>{
    resolve("promise 1 executed");
});
let p2 = new Promise((resolve,reject)=>{
    resolve("promise 2 executed");
});
let p3 = new Promise((resolve,reject)=>{
   resolve("promise 3 executed");
});

Promise.all([
    p1,p2,p3
]).then((data)=>{
    console.log(data);
})

// async await

function makeRequest(payload) 
{
    return new Promise((resolve,reject)=>{
        if(payload == "google")
        {
            resolve("connected success");
        }
        else
        {
            reject("Sorry cannot connect");
        }
    });
}

function processReguest(r)
{
    return new Promise((resolve,reject)=>{
        resolve("congrates processed");
    })
}

async function tryAsyncFunction()
{
    try
    {
    let resp = await makeRequest("googleoo");
    console.log(resp);
    let preq = await processReguest(resp);
    console.log(preq);
    }
    catch(error)
    {
        console.log(error);
    }
}

tryAsyncFunction();


fetch('https://dummyjson.com/test')
.then(res => res.json())
.then(console.log);


localStorage.setItem("name","mercedes");
localStorage.setItem("nickname","landrover");
localStorage.setItem("hobby","fly");

sessionStorage.setItem("name","mercedes");
sessionStorage.setItem("nickname","ferrari");

document.cookie = "name=sagnik";
//the above line adds a cookie, it may appear like that it is replacing existing cookie but it
//actually replaces it
document.cookie = "hobby=running";
document.cookie = "prof=softwareEngg;expiry="+ new Date(2027,12,8).toUTCString;

//to set an expiry we have to add expiry=<expiry date in UTC>
//there is no default way to see the cookies, usage of cookie manager library is recommended
class House
{
    constructor(color)
    {
        this.color = color;
    }

    getFurniture(params) {

        return "sofa";
        
    }
}

const clsegg = new House("red");
const clsegg2 = new House("blue");

console.log(clsegg.color);
console.log(clsegg.getFurniture());

console.log(clsegg2.color);
console.log(clsegg2.getFurniture());

//----------------templating -------------------
const data1 = 101;
const data2 = 22;
testtemplate`this is templating ${data1} and maintain altitude ${data2}`
//it is taking one variable at a time
function  testtemplate(string,val1,val2)
{
    console.log("this is how templating works");
    console.log(string);
    console.log(val1);
    console.log(val2);
}

const d1 = 5;
const d2 = 6;
const d3 = 7;
const d4 = 8;
const d5 = 9;

testtemplate2`this is templating 2 ${d1} and maintain altitude ${d2} speed=${d3} velocity ${d4},${d5}`;

//this is taking all the variables used using vals array
function testtemplate2(str,...vals)
{
    console.log("templating to handle multiple data");
    console.log(str);
    console.log(vals)
}

//object destructuring

const arr1 = [1,2,3,4,5,6,7];
const arr2 = ['A','B','C','D','E','F','G','H','I'];

const [a,b] = arr1;
//in the above example the first 2 elements from the array will be stored in a and b variable

const [c,,d,...rest] = arr2;

console.log("testing destructuring");
console.log(a);
console.log(b);

console.log("destructuring with a skipped element");
console.log(c);
console.log(d);
console.log(rest);

//setting up default values
function sumAndSub(num1,num2)
{
    return [num1+num2,num1*num2];
}

const [r1,r2,r3="no division"] = sumAndSub(2,3);
//the syntax above will add a default value to the variable

console.log(r1);
console.log(r2);
console.log(r3);

//object destructuring

const person1 = {
    name : "Sagnik",
    age : 26,
    address : {
        city : "Mumbai",
        country : "India"
    }
}

const person2 = {
    name : "Ishito Shinkashi",
    age : "30",
    address : {
        city : "Tokyo",
        country: "Japan",
    }
}

const {name,age,address:{country}} = person1;
//above is an example how destructuring can be done the name of the variables has to match with the keys in object
//an example of nested object destructure is also shown
console.log(name);
console.log(age);
console.log(country);

//we can change the name of the concerned variable as well

const {name : fstname,...rt } = person2;
//the rt variable holds all the data except the name
console.log(fstname);
console.log(rt);

const person3 = {...person1,...person2};
console.log(person3)
 






