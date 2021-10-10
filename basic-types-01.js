/*
Basic Types activity
- Create 3 variables and set them up to the given instructions. 
Also, type check them with the typeof operator in the console.
*/
//your code here
var myFirstName = 'Pheap';
var numberOfCities = 5;
var havingFun = true;

///////////////////////////////////
//check results in browser console
console.log('myFirstName: ', myFirstName);
console.log('numberOfCities: ', numberOfCities);
console.log('havingFun: ', havingFun); 

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { myFirstName, numberOfCities, havingFun };
}


/*
Basic Types
Key concepts
What is a value? A value is data that we store and manipulate. Examples of values include the number 13 and the name "Mary".

What is a type? A type helps us group similar values on which common operations can be performed.

The type determines the operations and methods that can be performed on that value. JavaScript has six primitive types: string , number , undefined , null , boolean , and symbol. There is also a compound type or object.

For example, we can easily multiply the values of the number type in the sequence 13, 3, 67, and 89, but we can't multiply the values in a sequence of strings, such as: "JS", "is", and "cool".

For example, you can retrieve the length of a string. Let's say, you call the length method on the "a" string:

 "a".length
 //returns 1
Knowing how JavaScript types work is very important, so you can manipulate data and predict how the language will behave.

Number type examples are as follows:
let currentWindSpeed = 50
let currentTemperature = 81
String type examples are as follows:
let city = "Dublin"
let zip = "94568"
Boolean type examples are as follows:
let isWarm = true
let isWindy = true
typeof operator Remember how we used the typeof operator for? The typeof operator returns a string indicating the type of the evaluated argument or operand.
Here are some ways you can use typeof:

//this is a string type
console.log(typeof 'pinecone') // it's of type string
 
//define a variable and find out it type
let diameter = 4.2
console.log(typeof diameter) //it's of type number
 
// if try to get the type of an undeclared variable, the expected output will be: "undefined"
console.log(typeof conifer);
 
//arrays
const chapters = [1, 2, 4]
typeof chapters === 'object'; //true
console.log(typeof chapters) //it's of type object
 
//objects
const denmark = {area:42924, population: 5820000}
console.log(typeof denmark) //it's of type object
Please refer to the mdn docs for further information about the typeof operator.

More examples:

console.log(typeof currentWindSpeed) //string
console.log(typeof city) //number
console.log(typeof isWindy) //boolean
Task instructions
Open the basic-types-01 folder and write code in the main.js file.

Create a variable called myFirstName. Assign myFirstName a string value that represents your name.

Create another variable called numberOfCities. Assign numberOfCities a number value that represents the number of cities you visited last year.

Create another variable called havingFun. Assign havingFun a Boolean value that reflects whether you're having fun.

When you're done, check the box to test your code.

*/