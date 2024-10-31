console.log("============================(Printing/Declaring Variables)")

//JS is LOOSELY TYPED, so I can decalre variables without declaring the datatype
//We can also easily reassign variables to different datatypes (implicit type coercion)
a = 100
a = true
a = null
a = "Now I am a String!"

//JavaScript will assign variables to be "var" by default
b = "I'm a var!"
let b2 = "I am a let! More modern version of var. We typically use these"
const b3 = "I am a const! My value won't change. Like final in Java"

//Array just for fun - we can use any datatypes we want!
var arr = [4, "some string", true, {objectVal1:5, objectVal2:"something"}, null]
//we can use .push() to add stuff to the end of the Array
arr.push("hello there I'm a new value")

//We can also access values by index like in Java
console.log(arr[3]) //printing out the object

//Trying to achieve NaN datatype
console.log("string" / 5)
console.log(5/0) // "Infinity", which is cool

console.log("==========================(Testing Type Coercion)")

//Let's see what JS decides as the data type for these variables

let test1 = "5" * 5 
console.log("String times number is: " + test1 + "\n"  + typeof test1 + "\n")
//number - JS assumes we're doing math, since we're using the * operator
//pretty much any math operator BESIDES + gives us a number

let test2 = "5" + 5
console.log("String plus number is: " + test2 + "\n"  + typeof test2 + "\n")
//string - JS assumes we're String concatenating, since we're using the + operator

//If we did 5 + "5", it would be the same outcome - order doesn't matter for 2 variables

//Now let's see this + operator with more than 2 variables

let test3 = 5 + 5 + "5"
console.log("number plus number plus String is: " + test3 + "\n"  + typeof test3 + "\n")
//string 105 - JS does 5 + 5 = 10.. THEN it string concatenates 10 + "5" = "105"

let test4 = "5" + 5 + 5
console.log("String plus number plus number is: " + test4 + "\n"  + typeof test4 + "\n")
//string 555 - JS does "5" + 5 = "55"... THEN it does "55" + 5 = "555"

console.log("============================(Truthy/Falsy Values)")



