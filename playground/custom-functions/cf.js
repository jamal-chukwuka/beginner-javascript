
function calculateBill(){
    //  this is the function body
    console.log('The function is running');
    const total = 100 * 1.13;
    return total;
}
//Function Call
const myTotal = calculateBill();

console.log(`My total is $${myTotal}`);