console.log('it works!');


const myParagraph = document.createElement('p');
myParagraph.textContent = "I am a P";
myParagraph.classList.add('special');

console.log(myParagraph);
const myImage = document.createElement('img');
myImage.src = "https://source.unsplash.com/random/600x600";
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// 

const heading = document.createElement('h2');
heading.textContent = 'Cool things';


myDiv.appendChild(heading);


const unorderedList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
unorderedList.appendChild(li);

document.body.insertAdjacentElement('afterbegin', unorderedList);

const liTwo = li.cloneNode(true);
liTwo.textContent = 'two';

unorderedList.appendChild(liTwo);

unorderedList.insertAdjacentElement('afterbegin', unorderedList);
