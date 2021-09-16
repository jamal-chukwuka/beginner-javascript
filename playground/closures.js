function outer() {
    const outerVar = "I'm the outer Var!";

    function inner(){
        const innerVar = 'Hey I am the inner Var';
        console.log(innerVar);
        console.log(innerVar);
    }
    return inner;
}

const innerFn = outer();
innerFn();

//Examples in practice

function creatingGreeting(greeting = ''){
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`;
    }
}

const sayHello = creatingGreeting('Hello');
const sayHey = creatingGreeting('hey');

console.log(sayHello('Josh'));
console.log(sayHello('Ren'));
console.log(sayHey('Ren'));

function createGame(gameName){
    let score = 0;
    return function win() {
        score++;
        return `Your name ${gameName}
        score is ${score}`;
    }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
