//I want to access the div that has id of "div1" - DOM SELECTION
let div1 = document.getElementById("div1")

console.log(div1)

//We can also select multiple elements by their classname
//This stores them in an HTMLCollection, which is like an Array
let divCollection = document.getElementsByClassName("divClass")

console.log(divCollection)
console.log(divCollection[0]) //zero-indexed!

//We can set attributes of elements we've DOM selected 
//This is called DOM MANIPULATION
div1.setAttribute("style", "background-color:lightblue")

/* Inline Styling isn't great practice... so why do this? 

  One possible use case: changing the color of something based on user interactions with the webpage
  (green for success? red for failure?)

  Maybe there's a header that says "please log in"
  -If the user logs in successfully, the header can turn green and say "welcome!"
  -If the user fails to log in, the header can turn red and say "login failed!" */

console.log("=======================(Events)")

//DOM SELECT our first button (with id btn1)
let btn1 = document.getElementById("btn1")

//Event Listeners take in some event to listen for, and the function to execute
btn1.addEventListener("click", btn1function)

function btn1function(){
    //alert() makes a popup on the screen
    alert("YOU CLICKED A BUTTON! Great work.")
}

//TODO: DOM select btn2 and p1

//TODO: Add an EventListener to btn2

//TODO: function to give p1 some text content

