console.log('it works');

const jamal = document.querySelector('.jamal');

// console.log(jamal.children);
// console.log(jamal.firstElementChild);
// console.log(jamal.lastElementChild);
// console.log(jamal.previousElementSibling);
// console.log(jamal.nextElementSibling);
// console.log(jamal.parentElement);
// console.log(jamal.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';

document.body.appendChild(p);

p.remove();

console.log(p);
