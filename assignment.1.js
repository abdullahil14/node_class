//first assisgnment, question 1 to 25 

//Question 1
//Create a variable called bunny using var and assign it your bunny's name. Then declare dog with let and cat with const. Print all three names.

//solution
var bunny = "mimi";
let dog = "shadow";
const cat = "coco";
console.log(bunny); //output: mimi
console.log(dog); //output: shadow
console.log(cat); //output: coco

//Question 2
//Which of these names are allowed in JavaScript? For each one, write valid or invalid, then write a correct version of any invalid name.

//solution
//1bunny    invalid
//_bunny    valid
//$bunny    valid
//-bunny    invalid
//@bunny    invalid
//bunnyName valid

//Question 3
//Predict the output, then run the code. In one or two sentences, explain why var and let behave differently here.

//solution
var pet = 'lucy';
console.log(pet);  //output: lucy

let animal = 'tom';
console.log(animal); //output: tom

//var is function-scoped and allows redeclaration, while let is block-scoped and does not allow redeclaration within the same scope. This means that var can be accessed outside of the block it was declared in, while let cannot.

//Question 4
//Write two short examples:
//a local variable inside a function called animalName
//a global variable that the same function can still print
//Call the function and show both results.

//solution
let globalDog = "Jack"; // Global variable

function animalName() {

    let localDog = "Bingo"; // Local variable
    
    // Both variables can be accessed inside this function
    console.log(localDog + " is fighting a " + globalDog); // Output: Jack is fighting a Bingo
}
animalName(); // Call the function to show both output

//Question 5
// Declare a variable named bunny and assign it an object with:
//name — a string
//age — a number
//isHappy — a boolean
//Print each property.

//solution
let mybunny = {
    name: "becky", //string
    age: 14,       //number
    isHappy: true  //boolean
};
console.log(mybunny.name); //output: becky
console.log(mybunny.age); //output: 14
console.log(mybunny.isHappy); //output: true

//Question 6
//For each value below, print the value and its type using typeof:
//3.14 
//'Lucy' 
//true
//null
//undefined
//Symbol('Lucy')
//{ name: 'Lucy' }
//['Lucy', 'Tom']

//solution
console.log(3.14, typeof 3.14);      //output: 3.14 number
console.log('Lucy', typeof 'Lucy');  //output: Lucy string
console.log(true, typeof true);     //output: true boolean
console.log(null, typeof null);     //output: null object
console.log(undefined, typeof undefined); //output: undefined undefined
console.log(Symbol('Lucy'), typeof Symbol('Lucy')); //output: Symbol(Lucy) symbol
console.log({ name: 'Lucy' }, typeof { name: 'Lucy' }); //output: { name: 'Lucy' } object
console.log(['Lucy', 'Tom'], typeof ['Lucy', 'Tom']); //output: ['Lucy', 'Tom'] object

//Question 7
//Create an array called mixedDataTypes that holds at least one boolean, one number, one string, null, undefined, and one object. Print the array and its length.

//solution
let mixedDataTypes = [true, 42, "wassup", null, undefined, { name: "becky" }];
console.log(mixedDataTypes); //output: [true, 42, "wassup", null, undefined, { name: "becky" }]
console.log(mixedDataTypes.length); //output: 6

//Question 8
//Write a function sumBunnies that has no parameters. Inside it, create blackBunnies = 10 and whiteBunnies = 20, add them, and return the total. Call the function and print the result.

//solution
function sumBunnies() {
    let blackBunnies = 10;
    let whiteBunnies = 20;
    let totalBunnies = blackBunnies + whiteBunnies;
    return totalBunnies;
}
sumBunnies(); // Call the function to get the total number of bunnies
console.log(sumBunnies()); //output: 30

//Question 9
//Rewrite sumBunnies so it takes two parameters, blackBunnies and whiteBunnies. Call it with sumBunnies(10, 20) and with sumBunnies(7, 3).

//solution
function sumBunnies(blackBunnies, whiteBunnies) {
    let totalBunnies = blackBunnies + whiteBunnies;
    return totalBunnies;
}
sumBunnies(10, 20);    // Call the function with parameters
sumBunnies(7, 3);     // Call the function with parameters
console.log(sumBunnies(10, 20)); //output: 30
console.log(sumBunnies(7, 3)); //output: 10

//Question 10
//Rewrite question 9 as:
//an anonymous function stored in a variable
//an arrow function
//Call both and print the results.

//solution
// Anonymous function stored in a variable
const sumBunniesAnonymous = function(blackBunnies, whiteBunnies) {
    return blackBunnies + whiteBunnies;
};
sumBunniesAnonymous(10, 20); // Call the function with parameters
sumBunniesAnonymous(7, 3); // Call the function with parameters
// Arrow function
const sumBunniesArrow = (blackBunnies, whiteBunnies) => {
    return blackBunnies + whiteBunnies;
};
sumBunniesArrow(10, 20); // Call the function with parameters
sumBunniesArrow(7, 3); // Call the function with parameters
// Call both functions and print the results
console.log(sumBunniesAnonymous(10, 20)); //output: 30
console.log(sumBunniesAnonymous(7, 3)); //output: 10
console.log(sumBunniesArrow(10, 20)); //output: 30
console.log(sumBunniesArrow(7, 3)); //output: 10

//Question 11
//Write an IIFE that adds 10 black bunnies and 20 white bunnies and prints the total as soon as the file runs. Do not call it by name afterwards.

//solution
(function() {
    let blackBunnies = 10;
    let whiteBunnies = 20;
    let totalBunnies = blackBunnies + whiteBunnies;
    console.log(totalBunnies); //output: 30
})();

//Question 12
//Create an array called bunnies with six bunny names.
//Add Mario to the end
//Add Luigi to the beginning
//Remove Lucy from the array (use whatever method you like, as long as Lucy is gone)
//Print the final array.

//solution
let bunnies = ["Mimi", "Becky", "Coco", "Shadow", "Lucy", "Jerry"];
bunnies.push("Mario"); // Add Mario to the end
bunnies.unshift("Luigi"); // Add Luigi to the beginning
let lucyIndex = bunnies.indexOf("Lucy");
if (lucyIndex !== -1) {
    bunnies.splice(lucyIndex, 1); // Remove Lucy from the array
}
console.log(bunnies); // Print the final array

//Question 13
// Using this array:

const _bunnies = ['Lucy', 'Tom', 'Molly', 'Bella'];

//Print:
//the first item
//the last item (do not hard-code the index 3)
//the index of 'Tom'
//a copy of the array (do not change the original)

//solution
console.log(_bunnies[0]); //output: Lucy
console.log(_bunnies[_bunnies.length - 1]); //output: Bella
console.log(_bunnies.indexOf('Tom')); //output: 1
const _bunniesCopy = _bunnies.slice();
console.log(_bunniesCopy); //output: ['Lucy', 'Tom', 'Molly', 'Bella']

//Question 14
//Loop through bunnies with a for loop and print:
// Bunny Lucy is scheduled for a checkup today.
//Do this for every name in the array.

//solution
for (let i = 0; i < _bunnies.length; i++) {
    console.log(`Bunny ${_bunnies[i]} is scheduled for a checkup today.`);
}

//Question 15
//Using this nested array:

const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
];

//Print 'Lucy', 'Bella', and then print every name with nested loops.

//solution
console.log(nestedArrays[0][0]); //output: Lucy
console.log(nestedArrays[1][1]); //output: Bella
for (let i = 0; i < nestedArrays.length; i++) {
    for (let j = 0; j < nestedArrays[i].length; j++) {
        console.log(nestedArrays[i][j]);
    }
}

//Question 16
//Create a JavaScript object called bunny with name, age, and isHappy. Convert it to JSON, store it in bunnyJSON, and print bunnyJSON.

//solution
let $bunny = {
    name: "paul",
    age: 21,
    isHappy: true
};
let bunnyJSON = JSON.stringify($bunny);
console.log(bunnyJSON); //output: {"name":"paul","age":21,"isHappy":true}

//Question 17
//Start with this JSON string:

let newbunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';

//Convert it back to a JavaScript object and print name and age.

//solution
let bunnyObject = JSON.parse(newbunnyJSON);
console.log(bunnyObject.name); //output: Lucy
console.log(bunnyObject.age); //output: 3

//Question 18
//Given:

let bunny_age = 3;
let dog_age = '3';

//Print the result of each:
//bunny_age == dog_age
//bunny_age === dog_age
//bunny_age != dog_age
//bunny_age !== dog_age
//In one sentence, explain the difference between == and ===.

//solution
console.log(bunny_age == dog_age); //output: true
console.log(bunny_age === dog_age); //output: false
console.log(bunny_age != dog_age); //output: false
console.log(bunny_age !== dog_age); //output: true
//The == operator compares two values for equality after converting them to the same type, while the === operator compares both the value and the data type without doing any conversion.

//Question 19
//Create two arrays, bunnies and dogs, with any number of names. Use <= to compare their lengths.
//If the number of bunnies is less than or equal to the number of dogs, print There are more dogs than bunnies
//Otherwise print There are more bunnies than dogs

//solution
let mybunnies = ["Mimi", "Becky", "Coco"];
let mydogs = ["Shadow", "Buddy", "Max", "Charlie"];
if (mybunnies.length <= mydogs.length) {
    console.log("There are more dogs than bunnies");
} else {
    console.log("There are more bunnies than dogs");
}

//Question 20
//A bunny's health can be 'healthy', 'sick', or anything else.
//Write this check three ways:
//if / else if / else
//a switch statement
//a ternary operator (healthy vs not healthy is enough for the ternary)

//solution
let bunnyHealth = 'sick';
// Using if / else if / else
if (bunnyHealth === 'healthy') {
    console.log("The bunny is healthy.");
} else if (bunnyHealth === 'sick') {
    console.log("The bunny is sick.");
} else {
    console.log("The bunny's health is unknown.");
}

// Using a switch statement
switch (bunnyHealth) {
    case 'healthy':
        console.log("The bunny is healthy.");
        break;
    case 'sick':
        console.log("The bunny is sick.");
        break;
    default:
        console.log("The bunny's health is unknown.");
}

// Using a ternary operator
let healthMessage = bunnyHealth === 'healthy' ? "The bunny is healthy." : "The bunny is not healthy.";
console.log(healthMessage);

//Question 21
//Write a function that takes a number and uses a ternary operator to return 'even' or 'odd'. Test it with 4, 7, and 0.

//solution
function evenOrOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}
console.log(evenOrOdd(4)); //output: even
console.log(evenOrOdd(7)); //output: odd
console.log(evenOrOdd(0)); //output: even

//Question 22
//Write a for loop that prints Number 0 through Number 9.
//Then write a while loop that does the same thing.

//solution
// For loop
for (let i = 0; i < 10; i++) {
    console.log(`Number ${i}`);
}

// While loop
let j = 0;
while (j < 10) {
    console.log(`Number ${j}`);
    j++;
}

//Question 23
//Write a while loop that counts down from 9 to 1 and prints each number. Then write the same countdown with a for loop.

//solution
// While loop countdown
let countdown = 9;
while (countdown >= 1) {
    console.log(`Number ${countdown}`);
    countdown--;
}

// For loop countdown
for (let k = 9; k >= 1; k--) {
    console.log(`Number ${k}`);
}

//Question 24
//Write sumBunnies(blackBunnies, whiteBunnies) so that it throws an error if either argument is not a number. Wrap a call to sumBunnies(10, 'twenty') in try / catch and print the error message.

//solution
function sumBunnies(blackBunnies, whiteBunnies) {
    if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
        throw new Error("Both arguments must be numbers.");
    }
    return blackBunnies + whiteBunnies;
}

try {
    console.log(sumBunnies(10, 'twenty'));
} catch (error) {
    console.log(error.message);
}

//Question 25
//Using the operators from this topic, write one small program that:
//assigns blackBunnies = 10 and whiteBunnies = 5
//prints whether they are equal (===)
//prints the total (+)
//prints whether there are more than 12 bunnies in total (&& or > is fine)
//prints 'Yes' or 'No' with a ternary if the total is greater than 12

//solution
let blackBunnies = 10;
let whiteBunnies = 5;

console.log(blackBunnies === whiteBunnies); // prints false
console.log(blackBunnies + whiteBunnies); // prints 15
console.log((blackBunnies + whiteBunnies) > 12); // prints true
console.log((blackBunnies + whiteBunnies) > 12 ? 'Yes' : 'No'); // prints 'Yes'


//Brain Teasers

//Question 1
//What does this print, and why does it stop? (Do not run it first. Predict, then check.)

let carrots = 3;

while (carrots) {
  console.log('munch');
  carrots--;
}

//Then answer: what would happen if you deleted carrots--;?

//solution
// It prints 'munch' three times and then stops because the while loop continues as long as carrots is true (non-zero). Each time it prints, it decrements carrots by 1. When carrots reaches 0, it becomes false, and the loop stops. If you deleted carrots--;, the loop would run indefinitely because carrots would always remain 3, which is true.

//Question 2
//You have this array:

const nbunnies = ['Lucy', 'Tom', 'Molly', 'Bella', 'Mario', 'Luigi'];

//Print only the bunnies whose names have more than 4 letters.
//First with a for loop
//Then with a while loop
//Both answers must print the same names.

//solution
// Using a for loop
for (let i = 0; i < nbunnies.length; i++) {
    if (nbunnies[i].length > 4) {
        console.log(nbunnies[i]);
    }
}

// Using a while loop
let J = 0;
while (J < nbunnies.length) {
    if (nbunnies[J].length > 4) {
        console.log(nbunnies[J]);
    }
    J++;
}

//Question 3

const newnestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
  ['Mario', 'Luigi'],
];

//Using nested loops, print a numbered list like:
//1. Lucy
//2. Tom
//3. Molly
//...
//The numbers must keep going across all inner arrays, not restart at 1 for each pair.

//solution
let count = 1;
for (let i = 0; i < newnestedArrays.length; i++) {
  for (let j = 0; j < newnestedArrays[i].length; j++) {
    console.log(`${count}. ${newnestedArrays[i][j]}`);
    count++;
  }
}

//Question 4
//Write a function countHappyBunnies(bunnies) that takes an array of objects like:

const ybunnies = [
  { name: 'Lucy', isHappy: true },
  { name: 'Tom', isHappy: false },
  { name: 'Molly', isHappy: true },
];

//Use a loop inside the function. Return how many bunnies have isHappy === true. Then use a ternary to print 'Most bunnies are happy' if the happy count is greater than or equal to half the array length, otherwise 'Most bunnies are not happy'.

//solution
function countHappyBunnies(bunnies) {
    let happyCount = 0;
    for (let i = 0; i < bunnies.length; i++) {
        if (bunnies[i].isHappy === true) {
            happyCount++;
        }
    }
    return happyCount;
}

const happyBunnies = countHappyBunnies(ybunnies);
console.log(happyBunnies > ybunnies.length / 2 ? 'Most bunnies are happy' : 'Most bunnies are not happy');

//Question 5
//Predict the output of both snippets. Then fix snippet B so it prints 0 1 2 3 4 like snippet A.

// Snippet A
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Snippet B
let i = 0;
while (i < 5) {
  console.log(i);
}

//After you fix it, write one sentence: when should you pick for, and when should you pick while?

//solution
// Snippet A prints 0 1 2 3 4 because the for loop initializes i, checks the condition, and increments i in one line. Snippet B will print 0 indefinitely because i is never incremented. To fix snippet B, you need to add i++ inside the while loop:

//corrected snippet B
let I = 0;
while (I < 5) {
  console.log(I);
  I++;
}