// Create a variable called myName and assign it your name as a string.
const myName = 'marc';
// Create an array called numbers and add five numbers to it.
const numbers = [1, 2, 3, 4, 5];
// Create a variable called myAge and assign it your age as a number.
let age = 34;
// Create an object called person with properties name, age, and gender.
const person = {
    name: 'jeff',
    age: 69,
    gender: 'toaster'
}
// Create a variable called isRaining and assign it a boolean value based on whether it is currently raining or not.
let isRaining = true;
// Create a function called greet that takes a name as a parameter and returns a greeting message using template literals.
function greeting(name) {
    return `Hello ${name}, how are you today?`;
}
// Create a function called multiply that takes two numbers as parameters and returns their product.
function multiply(a, b) {
    return a*b;
}
// Create a function called divide that takes two numbers as parameters and returns their quotient.
function divide(a, b) {
    return a/b;
}
// BONUS
// Create a function called isEven that takes a number as a parameter and returns true if the number is even, false otherwise.

function isEven(num) {
    if (num % 2 == 0) {
        console.log('is even')
    } else {
        console.log('is no even')
    }

}

console.log(isEven(2))

