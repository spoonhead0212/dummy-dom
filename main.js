// EXAMINE THE DOCUMENT OBJECTS.
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.forms[0]);
// console.log(document.all[24]);
// document.all[24].textContent = "you self check am nah?"
// console.log(document);
// console.log(document.all[]);
// GET ELEMENTS BY ID

// VARIABLES DECLARATIONS
let togg = document.body;
let ale = document.querySelector("#night");
let items = document.querySelector(".list-item");
let imag = document.querySelector("#imagery");
let imgBtn = document.querySelector("#img-btn");
let soccer = document.querySelector("#baller");
let wordly = document.querySelector(".word");
let textInput = document.querySelector("#test");
let swiDashboard = document.querySelector(".board")
let butn = document.querySelector(".butting");

// window.addEventListener("scroll", () => {
//     // added an event listener to the page and a scroll
//     let changeSize = document.querySelector("#play");
//     const currentScroll = window.pageYOffset;
//    if (currentScroll >= 170) {
//     changeSize.style.fontSize = "25px";
//     changeSize.style.textAlign = "left";
//    } else {
//     changeSize.style.fontSize = "50px";
//     changeSize.style.textAlign = "center";
//    }
//     // lastScroll = currentScroll;

//     let head = document.querySelector("header");
//     let currentScroller = window.pageYOffset;
//     if (currentScroller >= 300) {
//         head.classList.add('hide-header')
//     } else {
//         head.classList.remove('hide-header')
//     }
//     console.log(currentScroller);
// })

let heading = document.querySelector("header");
// heading is equal to header
let lastScrollY = 0;
// last scroll is the smallest number
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        // 0 will surely be less than any given pixel.
        heading.classList.add("scroll-header");
        // add the class
    } else {
        heading.classList.remove("scroll-header");
    }
    lastScrollY = window.scrollY;
})

// for each
const ololade = "mmwtv";
const asakeTracks = ["Dull", "joha", "Nzaza", "Dupe", "Muse"]; 
asakeTracks.forEach((trackNumber, trackName, allTracks) => {
    // console.log(allTracks);
})


// THIS TOGGLES THE DARKMODE AND ALSOCHANGE THE ICON
ale.addEventListener("click", function() {
    if(ale.src.match("icons/half-moon-svgrepo-com.svg")){
        ale.src = "icons/sunset-svgrepo-com.svg";
    } else {
        ale.src = "icons/half-moon-svgrepo-com.svg";
    }
    togg.classList.toggle('switch-clr');
    swiDashboard.classList.toggle("poli-sci-swi");
    textInput.classList.toggle("input-bg");
})

// CHANGE IMAGE
imgBtn.addEventListener('click', function(){
    if (imag.style.display === "block"){
        imag.style.display = "none";
        imgBtn.textContent = "show image";
    } else {
        imag.style.display = "block";
        imgBtn.textContent = "Hide Image";
    }
})

// DESIGN OF THE ITEM LIST


//  CHANGE IMAGE ON CLICK
 soccer.addEventListener("mouseover", function(){
    if(soccer.src.match('images/bubble-gum-social-media.gif')) {
        soccer.src = "images/bubble-gum-workflow.gif";
    } else {
       soccer.src = 'images/bubble-gum-social-media.gif';
    }
 })

//  TOP ICONS
let twitter = document.querySelector("#twi");
let mail = document.querySelector("#envelope");
twitter.addEventListener("click", function(){
    if(twitter.src.match("icons/twitter-social-media-bird-animal-svgrepo-com.svg")) {
        twitter.src = "icons/instagram-social-media-photo-camera-picture-image-svgrepo-com.svg";
    } else {
        twitter.src = "icons/twitter-social-media-bird-animal-svgrepo-com.svg";
    }
})

// ICONS MANIPULATION
mail.addEventListener("click", function(){
    if(mail.src.match("icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg")){
        mail.src = "icons/message-notification-email-chat-mail-talk-svgrepo-com.svg";
    } else {
        mail.src = "icons/email-letter-mail-message-envelope-email-address-svgrepo-com.svg"
    }
});


let modalOpen = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');
let modalClose = document.querySelector('#modal-close');

modalOpen.addEventListener("click", function() {
    modal.showModal();
})

modalClose.addEventListener("click", function() {
    modal.close();
})

// ------------------------------
const clickableDiv = document.querySelectorAll(".top-div");
clickableDiv.forEach((clickableDiv) => {
  clickableDiv.addEventListener("click", (e) => {
    const bottom = e.target.nextElementSibling;
    const img = e.target.lastElementChild;
    img.classList.toggle('rotate')
    bottom.classList.toggle("hideShow");
  });
});

const screen = window.scrollY;
console.log(screen);





// let ent = document.querySelector(".enter");
// ent.addEventListener("click", () => {
//     let answer = document.getElementById("mailer").value;
//     // document.getElementsByClassName("info").innerHTML = answer;
//     console.log(answer);
// })


// function show() {
//     let hide = document.querySelector(".poly-note")
//     if (hide.style.display === "none") {
//         hide.style.display = "block";
//     } else {
//         hide.style.display = "none";
//     }
// }

// JQUERY TOGGLE
// $(document).ready(function(){
//     $(".dom-btn").click(function(){
//         $(".poly-note").fadeToggle(200);
//     })
// })

// let lead = "oga"
// let heading = document.getElementById("olori");
// heading.textContent = "nah still me bro";
// console.log(heading);
// // heading.style.border = "2px solid white";
// heading.style.display = "inline-block";

// GET ELEMENTS BY CLASS
// let listing = document.getElementsByClassName('list-item');
// console.log(listing);
// listing[3].textContent = 'asiwaju';
// // listing[3].style.backgroundColor = "yellow";
// for (let i = 0; i < listing.length; i++) {
//     listing[i].style.backgroundColor = "#495057";
// }

// QUERY SELECTOR
// let note = document.querySelector('.poly-note');
// let func = function(k) {
//     note.style.backgroundColor = "#495057";
// }

// ADD VALUE TO THE INPUT
// let test = document.querySelector('input');
// test.value = "wetin you want?";

// PSEUDO CLASS WITH SELECTOR
// let pseudo = document.querySelectorAll('.list-item');
// has to be the all query selector for the array to work. even tho it does work on getelementby
// pseudo[2].textContent = 'i am the second on the list';
// console.log(pseudo);

// var even = document.querySelectorAll('.list-item:nth-child(even)');
// var odd = document.querySelectorAll('.list-item:nth-child(odd)');
// for (var x = 0; x < even.length; x++){
//     even[x].style.backgroundColor = "#495057";
//     odd[x].style.backgroundColor = "#fca311"
// };


// TRAVERSING THE DOM
// let parenting = document.querySelector('.poly-sci');
// let parenting = document.querySelector('.poly-note');
// console.log(parenting.parentNode);
// // using .parentNode logs the parent of the element selected
// parenting.parentNode.style.backgroundColor = '#14213d';
// parenting.parentNode.style.borderRadius = '5px';

// THIS WILL GET THE VARIABLES PARENT
// console.log(parenting.parentElement);
// // using .parentNode logs the parent of the element selected
// parenting.parentElement.style.backgroundColor = '#14213d';
// parenting.parentElement.style.borderRadius = '5px';

// THIS WILL YOU GET THE VARIABLES CHILDREN
// console.log(parenting.children);

// let m = document.querySelector(".doming-ul");
// m.nextSibling.style.backgroundColor = '#14213d';
// m.children[1].style.backgroundColor = "yellow";
// console.log(m.nextElementSibling);
// console.log(m.previousElementSibling);
// picks the next element to the variable
// the children syntax picks the ul list children

// CREATING AN ELEMENT 
// function myFunc(num, num1) {
//     return num + num1;
// }
// console.log(myFunc(20, 30));

// // FUNCTION EXPRESSION
// let funcy = function() {
//     console.log(19);
// }
// funcy()

// // ARROW FUNCTION
// const weed = () => {
//     console.log("Too Loud")
// }
// weed()

// // CREATE A NEW DIV
// var newDiv = document.createElement('div');
// // ADD CLASS
// newDiv.className = "newestDiv"
// // ADD ID
// newDiv.id = 'new-div';
// // ADD TEXT. NEED TO CREATE A VARIABLE FOR THE TEXT
// let newTxt = document.createTextNode("a new div created from js DOM");
// // add the text variable to the new div
// newDiv.appendChild(newTxt);

// console.log(newDiv);
