alert('this is how you print, it is like a method.');

//creating a variable 

let age = 22;
console.log(age); // to view the console, right click in the browser > hit inspect > navigate to console

//to write on the page directly
document.write(age);


// =============== Javascript Variables =================


// You would either use 'let' (is dynamic for creating different types of data) or 'const' for constants
    // let example
    let name = "Treasure";
    let x = 3;
    let y = 4.5;
    let z = x + y; // 7.5
    // const example
    const nickname = "TREAS";

// You can declare a variable without assigning right away
    let lastName; // This is technically undefined
    //And give it a value later
    lastname = "Davis";

// You can not redeclare a variable with the same name
    let lastName; //see? red now. bad.

// If you put a number in quotes, everything else will be treated as a String
    let fiveString = 2 + 2 + "1";

// JS counts a $ and _ as a letter, also is a valid variable name
    let $ = "Dollar sign";
    let $$$ = 3;
    let _lastName = "Davis";


// =============== Javascript Let ====================


// Variables in {} cannot be accessed outside the block
    {
        let trapped = 2;
    }
    // x can NOT be used here

// var and let are different. With var, you can redefine variables
    var v = 0;
    var v = "text";


// =============== Javascript const ====================


// JavaScript const variables must be assigned a value when they are declared
    // right
    const PI = 3.14159265359;
    //wrong
    const PI2;
    PI2 = 3.14159265359;

// Use const when you know the value should not be changed
// Use const for declaring new Array, Object, Function, RegExp





    
