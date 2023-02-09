 console.log('it works');

 const item = document.querySelector('.item');

 const width = 500;
 const src = `https://picsum.photos/${width}`;
 const desc = `Cute Pup <h1>LOVE THIS GUY</h1>`;
 const myHTML = `
    <div className = "wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/> 
    </div>
 `

//  item.innerHTML = myHTML;
//  console.log(item.innerHTML);

//  console.log(myHTML.classList);
//  console.log(typeof myHTML);

// Turn a string into a DOM element
const myFragment = document.createRange()
.createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

document.body.appendChild(myFragment);