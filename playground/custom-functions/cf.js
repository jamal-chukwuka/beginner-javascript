console.log('It works');

// Function Definition
function calculateBill(){
    //function block or body
    console.log('Running Calculate Bill');
    const total = 100 * 1.13;
    return total;
}

// Function Call
const myTotal = calculateBill();
console.log(`Your Total is $${myTotal}`);

//Bad Practice, but possible
// console.log(`Your total is $${calculateBill()}`);

//Arguments and Parameters Exercises

// >>>>>>>>>>>>>>>>>>>>  Parameters 
function calculateTrill(billAmount, taxRate = 0.13, tipRate = 
    0.15){

    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}
// >>>>>>>>>>> Arguments
// calculateTrill(100, 0.13);

const josTotal = 500;
const josTaxRate = 0.3;
const myTrillTotal = calculateTrill(josTotal, josTaxRate);

function sayHiTo(firstName){
    return `Hello ${firstName}`;
}

const greeting = sayHiTo('Josh');


function doctorize(name){
    return `Dr. ${name}`;
}

function yell(name = 'Jamala'){
    return `HEY ${name.toUpperCase()}`
}
// Inner function is always called first
console.log(yell(doctorize('Josh')));

//Only can pass undefined 