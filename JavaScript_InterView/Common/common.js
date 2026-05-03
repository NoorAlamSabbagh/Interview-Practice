//<==================I want all JavaScript interview questions and answers in one place(Most asked Questions and Topics)==================>
// <==================📌 1️⃣ EventLoop ==================>
// The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations
// while remaining single-threaded.

// How it works (flow)
// 1. Call Stack executes synchronous code
// 2. Async tasks (setTimeout, API calls, promises) go to Web APIs
// 3. Completed tasks move to queues
// 4. Event Loop pushes them back to Call Stack when it’s empty

// Queues
// * Microtask Queue
// * Promises (.then, catch)
// * Runs first
// * Callback Queue (Macrotask Queue)
// * setTimeout, setInterval, setImmediate
// * Runs after microtasks

// ### Important Rule
// Microtasks always execute before macrotasks.

// ### Example
// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise");
// });
// console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// ### Why Event Loop is needed

// * JavaScript is single-threaded
// * Handles async tasks without blocking execution
// * Enables non-blocking I/O

// ### One-line Interview Answer
// Event Loop is a mechanism in JavaScript that manages execution of synchronous and
// asynchronous code by continuously moving tasks from queues to the call stack,
// ensuring non-blocking behavior.”
// JavaScript first executes synchronous code, then microtasks like promises,
// and finally macrotasks like setTimeout using the Event Loop.>

// <================== 📌2️⃣ Microtask Vs Macrotask==================>
// Microtasks and macrotasks are two types of tasks in JavaScript's event loop that
// manage asynchronous operations.
// Microtasks
// * Examples: Promises (.then, .catch), process.nextTick (Node.js)
// * Executed immediately after the currently executing code
// * Higher priority than macrotasks
// * Runs before any macrotasks
// Macrotasks
// * Examples: setTimeout, setInterval, setImmediate (Node.js), I/O operations
// * Executed after all microtasks have been processed
// * Lower priority than microtasks

// process.nextTick() is a Node.js method that executes a callback immediately
// after the current operation, even before Promises (microtasks).

//<==================📌 3️⃣ Call Stack ==================>
// The Call Stack is a data structure that keeps track of function calls in JavaScript.
// It operates in a Last In, First Out (LIFO) manner, meaning the most recently
// called function is executed first. When a function is called, it is added to the top of the stack.
// When the function finishes executing, it is removed from the stack. If a function calls another function,
// the new function is added to the top of the stack, and this process continues until all
// functions have been executed and the stack is empty. The Call Stack is crucial for managing function
// execution and handling errors in JavaScript.

//<==================📌 4️⃣ Web APIs ==================>
// Web APIs are built-in browser features that allow JavaScript to perform tasks that are not
// natively supported by the language, such as making HTTP requests, manipulating the DOM,
// and handling events. These APIs are provided by the browser environment and can be accessed
// through JavaScript. Examples of Web APIs include the Fetch API for making network requests,
// the DOM API for interacting with HTML elements, and the Geolocation API for accessing the user's location.
// When JavaScript code calls a Web API, the browser handles the operation and returns the result asynchronously,
// allowing the main thread to remain responsive.

//<==================📌 5️⃣ Asynchronous Programming ==================>
// Asynchronous programming in JavaScript allows developers to write code that can perform tasks without blocking
// the main thread. This is essential for tasks that take time to complete, such as network requests,
//  file operations, or timers.
// Asynchronous programming can be achieved using callbacks, promises, and async/await syntax.
// Callbacks are functions passed as arguments to other functions and executed after a task is completed.
// Promises provide a more structured way to handle asynchronous operations by representing
// the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Async/await syntax allows developers to write asynchronous code that looks synchronous,
// making it easier to read and maintain.
// Overall, asynchronous programming is crucial for creating responsive web applications
// and improving user experience.

//<==================📌 6️⃣ Promises ==================>
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may
// be available now, in the future, or never. A Promise can be in one of three states: pending, fulfilled,
// or rejected.
// Promises provide a cleaner and more manageable way to handle asynchronous code compared to callbacks,
// avoiding issues like callback hell. They can be created using the Promise constructor and are typically
//  used with .then() for handling fulfilled values and .catch() for handling errors.
// Promises can also be chained together, allowing for sequential asynchronous operations.
// Overall, Promises are an essential tool for managing asynchronous code in JavaScript and improving
// code readability and maintainability.

//<==================📌 7️⃣ Async/Await ==================>
// Async/await is a syntax in JavaScript that allows developers to write asynchronous code in a more
// synchronous-looking manner. It is built on top of Promises and provides a cleaner and more readable way to handle asynchronous operations.
// The async keyword is used to declare a function as asynchronous, while the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.
// This allows developers to write code that looks sequential, making it easier to understand and maintain.
// Async/await also helps to avoid callback hell and makes error handling simpler with try/catch blocks.
// Overall, async/await is a powerful tool for managing asynchronous code in JavaScript and improving code readability.

//<==================📌 8️⃣ setTimeout and setInterval ==================>
// setTimeout and setInterval are two functions in JavaScript that allow you to
// schedule code to be executed after a certain amount of time.
// setTimeout is used to execute a function once after a specified delay,
//  while setInterval is used to execute a function repeatedly at specified intervals.
// Both functions take two arguments: the first is the function to be executed,
//  and the second is the time in milliseconds to wait before executing the function.
// For example, setTimeout(() => { console.log("Hello"); }, 1000);
// will log "Hello" to the console after 1 second, while setInterval(() => { console.log("Hello"); }, 1000);
//  will log "Hello" every second until it is stopped with clearInterval.
// These functions are commonly used for tasks like creating timers, animations,
// and handling user interactions in web applications.

//<==================📌 9️⃣ Event Delegation ==================>
// Event delegation is a technique in JavaScript that allows you to handle events on a parent element
// instead of attaching event listeners to individual child elements. This is achieved by taking advantage of event bubbling,
// where an event propagates up the DOM tree from the target element to its ancestors>.
// With event delegation, you can attach a single event listener to a parent element and use it to handle events for all of its child elements.
// This approach is more efficient and easier to manage, especially when dealing with a large number of child elements or dynamically added elements.
// To implement event delegation, you can use the event.target property to determine which child element triggered the event and then perform the desired actions based on that.
// Overall, event delegation is a powerful technique for improving performance and simplifying event handling in JavaScript applications.

//<================== 📌 1️⃣0️⃣ Closures ==================>
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
//  function's variables and parameters, even after the outer function has returned.
// Closures allow functions to retain access to their lexical scope, enabling them to remember
// and manipulate variables from their parent function.
// This is particularly useful for creating private variables and functions,
//  as well as for implementing data encapsulation.
// Closures are created whenever a function is defined inside another function,
// and they can be used to create powerful patterns such as currying and memoization.
// Overall, closures are a fundamental concept in JavaScript that enable developers to
// write more flexible and maintainable code.

//<==================📌 1️⃣1️⃣ Hoisting ==================>
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to
// the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code.
// However, only the declarations are hoisted, not the initializations.
// For example, if you declare a variable with var, it will be hoisted and initialized with undefined,
// while let and const declarations are hoisted but not initialized, resulting in a
// ReferenceError if accessed before declaration.
// Function declarations are fully hoisted, allowing you to call the function before
// its declaration in the code.
// Overall, understanding hoisting is crucial for avoiding bugs and writing predictable JavaScript code.

//<==================📌 1️⃣2️⃣ Scope ==================>
// Scope in JavaScript refers to the accessibility of variables and functions in different parts of the code.
// There are three types of scope: global scope, function scope, and block scope.
// Global scope is the outermost scope where variables and functions are accessible throughout the entire code.
// Function scope is created when a function is defined, and variables declared within that function are only accessible within that function.
// Block scope is created with curly braces {} and is used with let and const declarations,
// making variables accessible only within that block.
// Understanding scope is essential for managing variable accessibility and avoiding naming conflicts in JavaScript applications.

//<==================📌 1️⃣3️⃣ Prototypal Inheritance ==================>
// Prototypal inheritance is a feature in JavaScript where objects can inherit properties and
// methods from other objects.
// In JavaScript, every object has a prototype, which is another object that it inherits from.
// When you try to access a property or method on an object,
// JavaScript first looks for it on the object itself.
// If it doesn't find it there, it looks up the prototype chain until it finds the property or
// method or reaches the end of the chain.
// This allows for a flexible and dynamic way to share functionality between objects
// without the need for classes,
// making JavaScript a powerful and versatile language for object-oriented programming.
// Overall, prototypal inheritance is a fundamental concept in JavaScript
// that enables developers to create complex and reusable code structures.

//<==================📌 1️⃣4️⃣ Event Loop and Asynchronous Programming ==================>
// The Event Loop is a mechanism in JavaScript that allows it to handle asynchronous operations while remaining single-threaded.
// It works by continuously checking the call stack and the task queues (microtasks and macrotasks) to determine which tasks to execute.
// When a synchronous task is executed, it is added to the call stack. If an asynchronous task is encountered, it is sent to the appropriate queue (microtask for promises, macrotask for setTimeout, etc.).
// The Event Loop ensures that all synchronous code is executed first, followed by microtasks, and then macrotasks.
// This allows JavaScript to perform non-blocking operations, such as making API calls or handling user interactions, without freezing the main thread.
// Understanding the Event Loop is crucial for writing efficient and responsive JavaScript applications, especially when dealing with asynchronous programming patterns like callbacks, promises, and async/await.

//<==================📌 1️⃣5️⃣ Memory Management ==================>
// Memory management in JavaScript is handled automatically through a process called garbage collection.
// JavaScript uses a mark-and-sweep algorithm to identify and free up memory that is no longer in use.
// When a variable or object is created, it is allocated memory on the heap.
// If there are no references to that variable or object, it becomes eligible for garbage collection.
// However, developers need to be mindful of memory leaks, which occur when memory that is no longer 
// needed is not released.
// Common causes of memory leaks include global variables, closures that retain references to unused variables,
//  and event listeners that are not properly removed.
// To manage memory effectively, developers should avoid creating unnecessary global variables,
// ensure that closures do not retain references to unused variables, and clean up event listeners 
// when they are no longer needed.
// Overall, understanding memory management in JavaScript is essential for writing efficient 
// and performant applications.

//<==================📌 1️⃣6️⃣ JavaScript Engine ==================>
// A JavaScript engine is a program that executes JavaScript code. It is responsible for parsing, 
// compiling, and executing JavaScript in web browsers and other environments.
// Popular JavaScript engines include V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox), 
// and JavaScriptCore (used in Safari).
// The engine works by first parsing the JavaScript code into an Abstract Syntax Tree (AST), 
// then compiling it into bytecode, and finally executing it.
// Modern JavaScript engines also include Just-In-Time (JIT) compilation, 
// which optimizes code execution by compiling frequently used code paths into machine code.
// Understanding how JavaScript engines work can help developers write more efficient code 
// and optimize performance in their applications.

//<==================📌 1️⃣7️⃣ Strict Mode ==================>
// Strict mode is a feature in JavaScript that enables a more restrictive way of writing code.
// When strict mode is enabled, certain actions that are normally allowed in JavaScript will throw errors.
// This helps developers catch common mistakes and write more robust code.
// To enable strict mode, you can add the directive "use strict"; at the beginning of a script or function.
// Some of the key features of strict mode include:
// 1. Variables must be declared before use.
// 2. Assignments to non-writable properties, getters-only properties, or non-existent properties will throw errors.
// 3. The with statement is not allowed.
// 4. Duplicate parameter names in functions are not allowed.
// 5. The value of this in functions that are not called as methods will be undefined instead of the global object.
// Overall, strict mode is a valuable tool for improving code quality and preventing common pitfalls in JavaScript 
// development.


//<==================📌 1️⃣8️⃣ JavaScript Modules ==================>
// JavaScript modules are a way to organize and encapsulate code into reusable and maintainable units.
// Modules allow developers to break down complex applications into smaller, more manageable pieces,
//  promoting code reusability and separation of concerns.  
// In JavaScript, there are two main module systems: CommonJS (used in Node.js) and ES6 Modules 
// (used in modern browsers).
// CommonJS modules use the require() function to import dependencies and module.exports to export functionality.
// ES6 Modules use the import and export keywords for the same purpose, providing a more standardized 
// and flexible approach.
// Modules can export variables, functions, classes, or even entire objects,
// making it easier to share code across different parts of an application.
// Overall, JavaScript modules are essential for building scalable and
// maintainable applications by promoting code organization and reusability.

//<==================📌 1️⃣9️⃣ JavaScript Design Patterns ==================>
// JavaScript design patterns are reusable solutions to common problems in software design.
// They provide a way to structure code in a way that is efficient, maintainable, and scalable.
// Some common JavaScript design patterns include:  
// 1. Singleton Pattern: Ensures a class has only one instance and provides a global point of access to it.
// 2. Factory Pattern: Provides an interface for creating objects without specifying their concrete classes.
// 3. Observer Pattern: Defines a one-to-many dependency between objects, allowing them to be notified of changes.
// 4. Module Pattern: Encapsulates code within a function scope, exposing only the necessary parts
//  to the outside world.
// 5. Prototype Pattern: Allows objects to inherit properties and methods from a prototype object.
// 6. MVC (Model-View-Controller) Pattern: Separates an application into three interconnected 
// components for better organization and maintainability.
// Understanding and applying design patterns can help developers write cleaner,
// more efficient code and solve common programming challenges in JavaScript development.

//<==================📌 2️⃣0️⃣ JavaScript Performance Optimization ==================>
// JavaScript performance optimization involves techniques and best practices to
// improve the speed and efficiency of JavaScript code.
// Some common performance optimization techniques include:
// 1. Minification: Reducing the size of JavaScript files by removing whitespace,
//  comments, and shortening variable names.
// 2. Caching: Storing frequently accessed data in memory to reduce the need for
//  repeated calculations or network requests.

// 3. Debouncing and Throttling: Limiting the rate at which functions are executed
//  to improve performance during events like scrolling or resizing.
// 4. Lazy Loading: Loading resources only when they are needed, such as images or scripts.
// 5. Using Web Workers: Offloading heavy computations to background threads to
//  prevent blocking the main thread.
// 6. Avoiding Memory Leaks: Ensuring that unused variables and event listeners are properly cleaned up.  
// 7. Optimizing DOM Manipulation: Minimizing the number of DOM updates and using
//  techniques like document fragments to improve performance.
// Overall, optimizing JavaScript performance is crucial for creating responsive and efficient web applications,
//  enhancing user experience, and ensuring that applications run smoothly across different devices and browsers.

//<==================📌 2️⃣1️⃣ Rest Vs Spread Vs Destructuring ==================>
// Rest, Spread, and Destructuring are three powerful features in JavaScript that
// allow developers to work with arrays and objects more efficiently.
// Rest Operator: The rest operator (represented by three dots ...) is used to 
// collect multiple elements into a single array or object. It is commonly used 
// in function parameters to gather remaining arguments into an array.
// common exaple:
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); // Output: 6    

// Spread Operator: The spread operator (also represented by three dots ...) is used to
// expand an array or object into individual elements. It is often used to create
// copies of arrays or objects, merge arrays, or pass elements as function arguments.
// common example:
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // Output: [1, 2, 3, 4, 5]
// Destructuring: Destructuring is a syntax that allows you to unpack values from arrays
// or properties from objects into distinct variables. It provides a convenient way to extract data from complex structures.
// common example:
// const person = { name: "Alice", age: 30 };
// const { name, age } = person; // Output: name = "Alice", age = 30
// Overall, Rest, Spread, and Destructuring are essential tools for working with arrays and objects in JavaScript,
// making code more concise, readable, and maintainable.

//<==================📌 2️⃣2️⃣ forEach Vs map, filter, reduce, find, some, every, includes, slice vs splice, for loop vs forEach  ==================>
// Commonly asked JavaScript methods include map, filter, reduce for data transformation, find and includes for searching, 
// and loops like for, while, and forEach for iteration.
// 1. map: Creates a new array by applying a function to each element of the original array.
// 2. filter: Creates a new array with all elements that pass a test implemented by a function.
// 3. reduce: Executes a reducer function on each element of the array, resulting in a single output value. 
// 4. find: Returns the value of the first element in the array that satisfies a provided testing function.
// 5. some: Tests whether at least one element in the array passes the test implemented by a function.
// 6. every: Tests whether all elements in the array pass the test implemented by a function.
// 7. includes: Determines whether an array includes a certain value, returning true or false.
// 8. slice: Returns a shallow copy of a portion of an array into a new array.
// 9. splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// 10. for loop: A traditional loop that iterates over a block of code a specified number of times.
// 11. forEach: Executes a provided function once for each array element.
// Overall, these methods and loops are essential for manipulating and iterating over arrays in JavaScript,
// allowing developers to write more efficient and readable code.
//How to rememeber all these methods and loops?
// You can remember these methods and loops by associating them with their specific use cases and functionalities. 
// For example, you can think of map as a way to transform data, filter as a way to select specific elements, 
// reduce as a way to aggregate values, find as a way to search for an element, some and every as ways to test conditions, 
// includes as a way to check for the presence of a value, slice and splice as ways to manipulate arrays, 
// and for loops and forEach as ways to iterate over collections. Creating mental associations and practicing using 
// these methods in real coding scenarios can help reinforce your memory of them.


