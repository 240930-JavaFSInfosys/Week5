console.log("============================(Printing/Declaring Variables")

//JS is LOOSELY TYPED, so I can decalre variables without declaring the datatype
//We can also easily reassign variables to different datatypes
a = 100
a = true
a = null
a = "Now I am a String!"

//JavaScript will assign variables to be "var" by default
b = "I'm a var!"
let b2 = "I am a let! More modern version of var. We typically use these"
const b3 = "I am a const! My value won't change. Like final in Java"

//Array just for fun - we can use any datatypes we want!
arr = [4, "some string", true, {objectVal1:5, objectVal2:"something"}, null]
//we can use .push() to add stuff to the end of the Array
arr.push("hello there I'm a new value")
//TODO: we can also access values by index like in Java