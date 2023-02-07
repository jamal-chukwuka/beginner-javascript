


function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){
    //  this is the function body
    console.log('The function is running');
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}
//Function Call
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);

// console.log(`My total is $${myTotal}`);
// console.log(`My total is $${myTotal2}`);

function doctorize(name) {
    return `Dr. ${name}`
}

function yell(name = 'Default') {
    return `HEY ${name.toUpperCase()}`;
}