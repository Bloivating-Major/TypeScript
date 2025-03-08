// Let block scoped
function exampleLetScope() {
    let message = "Hello from function scope";
    if (true) {
        let message = "Hello from block scope"; // Different 'message' variable
        console.log(message); // Output: "Hello from block scope"
    }
    console.log(message); // Output: "Hello from function scope"
}
exampleLetScope();

// Const block scoped
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign to const 'PI'

const colors = ["red", "green", "blue"];
colors.push("yellow"); // Okay, you can modify the array itself
// colors = ["purple", "orange"]; // Error: Cannot reassign to const 'colors'

function exampleConstScope() {
    const limit = 10;
    if (true) {
        const limit = 20; // Different 'limit' variable
        console.log(limit); // Output: 20
    }
    console.log(limit); // Output: 10
}
exampleConstScope();