// don't forget defer ya man

/* 
1- get the element from the html document which you need to do some action after click on it
*/
document.getElementById("buy");

/*we knew that <!DOCTYPE html> at html file means a declaration for the browser that is the html file v.5
and DOC is the abbreviation for document 
so here when we say (document.getElementById("buy")) ==> go to the document and get the element which id = "buy" 
*/

/*
-variables let or const 
-const when never change once you assign the value
*/

let buy = document.getElementById("buy");
buy = document.getElementById("koko"); //ok

const buy2 = document.getElementById("buy");
buy2 = document.getElementById("koko"); //Error

// قبل 2015 كان يُستخدم كلمة var بدلاً من const / let
// ولكن بعد 2015 لا يُفضل استخدام var

// يُفضل التأكد من ان العنصر تم احضاره فعلا الى ملف الجافا سكريبت ⭐
// وذلك عن طريق console.log( ); لإظهار نتائح أوامر الجافا سكريبت
console.log(buy);

// لإظهار نوع الـ داتا نستخدم
// console.log( typeof ... );

// javascript style
buy.style.backgroundColor = "green";

// Remove html element by JS
//const myheder=document.getElementsByClassName("myheader")
//console.log(myheder)
//==> Html collection , when you will face some problems when you want to remove it ,
// SO when you get the element => get the element by the [document.querySelector()] ==> and its argument like you deal with css ------>  // -> to solve it using []    ----->const buy = document.getElementsByClassName("btn")[0]
 

const myheder = document.querySelector(".myheader");
console.log(myheder); //this get the html element normally and you can remove it
myheder.remove();

/* Task: */
// create a new element at the end of the element which class is after-my-header
// new element type is h1
// contain: Price Added Successfuly
//add some classes
//remove one of them
//set an id to the new element

const afterMyHeader = document.querySelector(".after-my-header");

const myNewElement = document.createElement("h1");
afterMyHeader.append(myNewElement);
myNewElement.innerText = "Price Added Successfuly";
myNewElement.classList.add("price", "myNewClass");
myNewElement.classList.remove("myNewClass");
myNewElement.id = "myid";

/*setAttribute => when you use this method at the end it remove the old class and make a newClass only*/
myNewElement.setAttribute("class", "mynewclass");
myNewElement.setAttribute("id", "mynewid");

//------------------------------------------------------------------------------------------------

/* function */
/* 1-function declaration */

const printTextAfterHeader = document.querySelector(".after-my-header");
const title = document.createElement("h1");

function CreateTitle() {
  title.innerText = "Elmajiko";
  title.classList.add("mb");
  title.setAttribute("id", "titleId");
  printTextAfterHeader.append(title);
}

CreateTitle();

// setTimeout as sleep  => [ setTimeout(CreateTitle,3000) ] ==> note : here CreateTitle called callback function

/* 
2-function expression : is the best practice of function and it solved the hoisting problem 
*/

const CreateTitle = function () {
  //anonymous function
  title.innerText = "Elmajiko";
  title.classList.add("mb");
  title.setAttribute("id", "titleId");
  printTextAfterHeader.append(title);
};

//arrow funciton
const CreateTitle = () => {
  title.innerText = "Elmajiko";
  title.classList.add("mb");
  title.setAttribute("id", "titleId");
  printTextAfterHeader.append(title);
};


/////////////////////////////////////////////////////////////////////////////////
                        //Example on Event
const buy = document.getElementById("buy");
const divAfterMyHeader = document.querySelector(".after-my-header");

const CreateTitle = () => {
  const mySecondHeader = document.createElement("h1");
  mySecondHeader.innerText = "هذا من فضل ربي";
  mySecondHeader.setAttribute("class", "mb");
  mySecondHeader.setAttribute("id", "myNewID");
  mySecondHeader.setAttribute("lang", "ar");
  mySecondHeader.setAttribute("dir", "rtl");
  divAfterMyHeader.append(mySecondHeader);
};

 //event object : العنصر الذي يتم عليه الحدث الي هو <buy>
             //target is an event⭐

buy.addEventListener("click",

(eo) => {   

    //eo.target.remove();
    // ==> or 
    //buy.remove()

    eo.target.style.backgroundColor="red"
}

);