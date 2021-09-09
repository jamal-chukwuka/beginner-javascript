//Types of functions 

function doctorize(firstName){
    return `Dr. ${firstName}`;
}

//anonymous function
// function (firstName){
//     return `Dr. ${firstName}`;
// }

//Function Expression
//Why use it? Hoisting...does not hoist 
const doctorize2 = function (firstName){
    return `Dr. ${firstName}`;
}

//Arrow functions are anonymous 
//explicit
const inchToCM = (inches) => {
    return inches * 2.54;
}

//implicit return 
const inchToCM2 = (inches) => inches * 2.54;

function add(a, b = 3) {
    const total = a + b;
    return total;
}

const add2 = (a, b =3 ) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

//implicit return of an object

const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0 });

//IIFE
//Immmediately Invoked Function Expression

(function() {
    console.log('Running the Anon function');
    return 'You are cool';
})();

//Methods!!! Function iinside of an object

const Josh = {
    name: 'Josh',
    sayHi: function(){
        console.log('Hey Josh');
        return 'Hey Josh';
    },
    //Short hand method
    yellHi(){
        console.log('Hey Josh');
    }, 
    //Arrow function
    wisperHi: () => {
        console.log(`Hi Josh, I'm a mouse`);
    }
}

//Callback Functions
//Click callback
const button =  document.querySelector('.clickMe');
console.log(button);

button.addEventListener('click', Josh.yellHi);

//second approach 
button.addEventListener('click', function(){
    console.log('This works too!');
});

setTimeout(Josh.sayHi, 1000);