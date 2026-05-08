// <=======================================================================
// Title: JavaScript Interview Questions - Mohit Codes
// Author: Mohit
// Date: 2024-06-01
// =================================================================>

//1️⃣. Closures and Currying in JavaScript    
//Closures: closures we used for data privacy and encapsulation. 
// The inner function has access to the variables of the outer function, 
// allowing us to maintain state across multiple calls to the inner function.
//
// function outerFunction(){
//     let count = 0;
//     return function innerFunction(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outerFunction();
// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3


// //Currying: Currying is a functional programming technique 
// // where a function with multiple arguments is transformed into a
// //sequence of functions that each take a single argument.
// function add(a){
//     return function(b){
//         return a + b;
//     }
// }
// const add5 = add(5);
// console.log(add5(3)); // Output: 8
// console.log(add5(10)); // Output: 15

//2️⃣. Debouncing and Throttling in JavaScript
//Debouncing: Debouncing is a technique used to limit the rate at 
// which a function is executed. 
// It ensures that a function is only called after a certain amount 
// of time has passed since the last time it was invoked.
 
// simple code for debouncing:
// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     }
// }

//Throttling: Throttling is a technique used to limit the rate at 
// which a function is executed. 
// It ensures that a function is only called once in a specified time interval, 
// regardless of how many times it is triggered.
// function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;
//     return function(...args) {
//         if (!lastRan) {
//             func.apply(this, args);
//             lastRan = Date.now();
//         } else {
//             clearTimeout(lastFunc);
//             lastFunc = setTimeout(() => {
//                 if ((Date.now() - lastRan) >= limit) {
//                     func.apply(this, args);
//                     lastRan = Date.now();
//                 }
//             }, limit - (Date.now() - lastRan));
//         }
//     }
// }

// Debounce: “Executes after user stops triggering event.”
// Throttle: “Executes at regular intervals while event continues.”


//3️⃣. moves all the zeros to the end of the array while maintaining the 
// order of non-zero elements.
// function moveZerosToEnd(arr){
//     let pos = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             // arr[pos] = arr[i];
//             // or
//             let temp = arr[pos];
//             console.log(temp);
//             arr[pos] = arr[i];
//             arr[i] = temp;  
//             pos++;
//         }
//     }
//     return arr;
// }
// console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

//
// function moveZerosToEnd(arr) {
//     let pos = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             let temp = arr[pos];
//             arr[pos] = arr[i];
//             arr[i] = temp;
//             pos++;
//         }
//     }

//     return arr;
// }

// const prompt = require('prompt-sync')();
// let input = prompt("Enter numbers separated by comma");

// let arr = input.split(",").map(Number);

// console.log(moveZerosToEnd(arr));

//////////////////
// function isPrime(num) {
//     if (num < 2) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// // Take input from user
// const prompt = require('prompt-sync')();
// let input = prompt("Enter numbers separated by comma");

// // Convert into array
// let arr = input.split(",").map(Number);

// // Filter prime numbers
// let primeArr = arr.filter(isPrime);

// console.log("Prime Numbers:", primeArr);

// // Sum of prime numbers
// let sum = primeArr.reduce((acc, curr) => acc + curr, 0);

// console.log("Sum:", sum);

// // Last prime number
// let lastPrime = primeArr[primeArr.length - 1];

// // Check even or odd
// if (lastPrime % 2 === 0) {
//     alert("Popup");
// } else {
//     alert("Last Odd Prime Number: " + lastPrime);
// }

/////////////////////////////////
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Take n from user
const prompt = require('prompt-sync')();
let n = Number(prompt("Enter number of elements"));

// Take array input
let input = prompt(`Enter ${n} numbers separated by comma`);

// Convert into array
let arr = input.split(",").map(Number);

// Check n
if (arr.length !== n) {
    console.log("Please enter correct number of elements");
} else {
    // Filter prime numbers
    let primeArr = arr.filter(isPrime);
    console.log("Prime Numbers:", primeArr);
    // Sum of prime numbers
    let sum = primeArr.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of Prime Numbers:", sum);
    // Last prime number
    let lastPrime = primeArr[primeArr.length - 1];
    // Check even or odd
    if (lastPrime % 2 === 0) {
        console.log("Popup");
    } else {
        console.log("Last Odd Prime Number:", lastPrime);
    }
}