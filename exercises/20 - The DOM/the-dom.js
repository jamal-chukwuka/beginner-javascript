// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const heading = document.querySelector('h2');

// console.dir(heading.textContent);

// // heading.textContent = 'Jamal is dope';

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} :pizza:`;
// pizzaList.insertAdjacentText('afterbegin', '🍕')
// pizzaList.insertAdjacentText('beforeend', '🍕')

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

console.log(pic.classList);

function toggleRound(){
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
console.log(pic.alt);
console.log(pic.naturalWidth);

// window.addEventListener('load', function(){
//     console.log(pic.naturalWidth);
// });

pic.width = 200;
pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function(){
    alert(`Welcome ${custom.dataset.name} 
        ${custom.dataset.last}
    `)
})