//practice

const name = "lateef";
console.log('my name is ' + name);


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


let blackBunnies = 10;
let whiteBunnies = 5;

console.log(blackBunnies === whiteBunnies); // prints false
console.log(blackBunnies + whiteBunnies); // prints 15
console.log((blackBunnies + whiteBunnies) > 12); // prints true
console.log((blackBunnies + whiteBunnies) > 12 ? 'Yes' : 'No'); // prints 'Yes'


//solution
const nbunnies = ['Lucy', 'Tom', 'Molly', 'Bella', 'Mario', 'Luigi'];
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


    const tech = "coding";
    console.log(tech + " is not for the weak");
    //output: coding is not for the weak
    