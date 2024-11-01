//PokeAPI base URL - making a variable to hold the base URL to reach pokeAPI. This is for cleaner code
const $URL = "https://pokeapi.co/api/v2/pokemon/";

//use DOM Selection to select all of the elements I plan to fill with data
let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");

//when the user clicks the button, execute the fetchData method (using an eventListener)
document.getElementById("btn").onclick = fetchData;

/* This function will return some Pokemon data from PokeAPI 
It will use fetch request to return a promise object 
The promise object will get filled with the data requests, OR it will fail*/
async function fetchData(){

    //First, we need to gather the user's input from the input box
    let userInput = document.getElementById("userInput").value
    //.value will extract whatever value is in the input box 

    console.log(userInput) //just to see the value

    //Then, we can use the fetch() method to send a GET request to pokeAPI
    //fetch sends GET requets by default BTW
    await fetch($URL + userInput) //https://...../pokemon/{whatever the user put in}
    .then()
    .then()
    .catch()
    .finally()

}