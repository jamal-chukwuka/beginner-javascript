const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
console.log('You clicked a button');

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

function handleBuyButtonClick(event){
    const button = event.target;

    console.log('You are buying it');
    console.log(parseFloat (event.target.dataset.price));
    console.log(event.target);
    
    // event.stopPropagation();
}
//Stop this event propagation

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick)
});

window.addEventListener('click', function(event){
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    event.stopPropagation();
}, { capture: true})