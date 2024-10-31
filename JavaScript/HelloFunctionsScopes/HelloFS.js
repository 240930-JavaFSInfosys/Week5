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