// Functions can define functions, return the inner function and it will "remember" scope
// This lets us "partially apply" functions, to "lock in" some arguments, and make more reusable functions

let greet = (greeting) => {
    return (person) => {
        return `${greeting} ${person}`;
    }
}

let greetIt = greet("hello");
let greetObeyd = greetIt('Obeyd');
let greetFazal = greetIt('Fazal');
let greetOzeyr = greet('Hi')('Ozeyr');  // The lambda Calculus, calling the inner func directly.
console.log(greetObeyd);
console.log(greetFazal);
console.log(greetOzeyr);

// Currying breaks up a multi-arg function into a series of single-arg ones
// Like in closure the inner function remmember the scope.

