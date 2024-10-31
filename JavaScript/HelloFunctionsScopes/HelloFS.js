//first, we'll make a basic named function
//we can call a function before it's declared due to something called HOISTING
helloWorld()

function helloWorld(){
    console.log("hola mundo")
}

//Here's an anonymous function - it has no name, but we can assign them to values
let anon = function(var1){
    console.log("Hi I'm an anonymous function stored in a variable")
    console.log("My variable is: " + var1)
}

anon(42)
//NOTE: anonymous functions are not hoisted. we can't successfully call anon() before declaration


//Arrow functions are just like lambdas in Java (value) => {code}
let arrowFunc = (var1, var2) => {
    //let's use this function to test ===
    console.log(var1 + " compared to " + var2)
    console.log(var1 === var2)
}

arrowFunc(null, false) //null is falsy, but a different datatype than false
arrowFunc(false, false) //false is false. same value and datatype


//Callback functions - functions that get passed in as params to other functions
function f1(x){
    console.log("Inside Function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of Function 1")
}

function f2(x, someFunction){
    console.log("Inside Function 2")
    someFunction(x) //"someFunction" is just a variable name we gave for the passed in function
    console.log("End of Function 2")
}

f2(1000, f1) //f2 is taking in a number and and function f1

console.log("==========================(Scopes)")

//anything that is globally scoped can be accessed anywhere in the script
console.log(a) //this prints out "undefined"

//This^ is another example of HOISTING - all functions and vars are hoisted
var a = 5

console.log(a) //a will have a value if it's called after its declaration


//Let's try this same thing with a let

//console.log(b) <-THIS IS ILLEGAL! lets and consts are NOT HOISTED
//This is one reason we use let instead of var now - we don't want to access variables before their declaration

let b = 5

console.log(b) //This is fine of course. b has been declared at this point

console.log("==========================(Local Scope (function vs block scope))")

//block scope----------------/

//any variable within a block that ISN'T a function

if(true){
    var c = "I am a var in a block - block scoped!"
    console.log(c)
    let d = "I am a let in a block - block scoped!"
    console.log(d)
}

console.log(c) //vars are globally scoped so they're visible OUTSIDE their block scope
//console.log(d) //lets and consts are NOT VISIBLE outside their block scope


//function scope---------------/

//any variable defined in a function is function scoped
function scopeTester(){
    var e = "I am a var in a function - function scoped!"
    console.log(e)
}

scopeTester()

console.log(e) //FUNCTIONS are the only blocks that confine vars to their scope

/* The main difference between block and function scope is:

    -vars are NOT visible outside the function they're declared in
    -BUT... vars ARE visible outside any non-function block they're declared in
    
    -lets and consts are only visible within their block, period.

    Since we only really use let and const these days, we don't have to worry about these quirks
    (but you should still know them for QC) */