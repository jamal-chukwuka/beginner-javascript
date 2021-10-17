const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
console.log(butts);

function handleClick(){
    console.log('It got clicked!');
}

const hooray = () => console.log('Hooray!');

function buyItem(){
    console.log('BUYING ITEM');
}

butts.addEventListener('click', hooray);
coolButton.addEventListener('click', handleClick);
//don't call the function when passed as a parameter

// butts.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');
buyButtons.forEach( (buyButton) => {
    //parameter can be called anything
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
});