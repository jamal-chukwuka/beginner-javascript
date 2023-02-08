// Types of functions 

//OG function 

// function doctorize(firstName){
//     return `Dr. ${firstName}`
// }

//Anonymous function
const anon = function (firstName){
    return `Dr. ${firstName}`
}

// Function Expression
const doctorize = function (firstName){
    return `Dr. ${firstName}`
}

// Arrow functions (are all anonymous and require var declaration)

// Old function approach

// function inchToCM(inches) {
//     return inches * 2.54;
// }

// New Approach

// Explicit Return
const inchToCm = (inches) => {
    return inches * 2.54;
}

//Implicit Return
const inchToCm2 = (inches) => inches * 2.54;

// Example 
const add = (a, b = 3) => { return a + b };

// Returning an Object 

// Regular Degular
function makeABaby(first, last){
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}

// Arrow Dub

//Explicit Return

const makeDaBaby = (first, last) => { return { name: `${first} ${last}`, age: 0}}

//Implicit Return requires parenthesis

const makeDBaby = (first, last) => ({ name: `${first} ${last}`, age: 0});


//IIFE

//Immediately Invoked Function Expression

(function(age) {
    return `You are cool and age ${age}`;
  })(10);

// Methods
const jamal = {
    name: 'Jamal Chukwuka',
    sayHi: function(){
        console.log('Hey Jamal');
        return `Salaams`
    },
    // Short hand method
    yellHi(){
        console.log('Hey Jamal');
    },

    // Arrow function
    wisperHi: () => {
        console.log(`Hi Jamal a mouse squeaked`);
    }
}

// Callback Functions 
const button = document.querySelector('.clickMe');

console.log(button);

function handleClick(){
    console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick());

// Timer Callback
setTimeout(function(){
    console.log('Done time to eat!');
}, 1000)