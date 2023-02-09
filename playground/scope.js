const name = "Josh";
//global variable

function sayHi(){
    console.log("Say hi!");
}

sayHi();
//attached to the window object

function isCool(name) {
    let cool;
    if (name == 'josh'){
        cool = true;
    }

    console.log(cool);
    return cool;
}

// Example 2 
const age = 100;

function go(){
    const hair = 'blonde';
}