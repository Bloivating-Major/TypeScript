// Challenge 1
// function testScope() {
//     var functionScopedVar = "function";
//     let blockScopedLet = "block";

//     if (true) {
//         var functionScopedVar = "inner function";
//         let blockScopedLet = "inner block";
//         console.log("Inside block - var:", functionScopedVar);
//         console.log("Inside block - let:", blockScopedLet);
//     }

//     console.log("Outside block - var:", functionScopedVar);
//     console.log("Outside block - let:", blockScopedLet);
// }
// testScope();

// Challenge 2
// const MAX_VALUE = 100;
// // MAX_VALUE = 150; // Line A
// console.log(MAX_VALUE);

// const user = { name: "Alice", age: 30 };
// user.age = 31;      // Line B
// // user = { name: "Bob", age: 25 }; // Line C
// console.log(user);

// const numbers = [1, 2, 3];
// numbers.push(4);    // Line D
// // numbers = [4, 5, 6]; // Line E
// console.log(numbers);

// Challenge 3
// console.log("Using let in for loop:");
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// }

// console.log("Using var in for loop (if you were to change it - for explanation):");
// for (var j = 0; j < 3; j++) { // Imagine 'let' changed to 'var' here
//     setTimeout(() => {
//         console.log(j);
//     }, 100);
// }

// Challenge 4
// function testGlobalImplicit() {
//     implicitGlobal = "I am global"; // No 'let', 'const', or 'var'
// }
// testGlobalImplicit();
// console.log(implicitGlobal); // Can we access it here?
// Error it says cannot find implicitGlobal
