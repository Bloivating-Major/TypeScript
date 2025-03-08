

# 3. Variables and Scope

**Concepts:**

*   **Variables:**  Named storage locations in memory that hold values. In TypeScript (and JavaScript), you declare variables using keywords like `let`, `const`, and `var`.

*   **Scope:**  Determines the accessibility or visibility of variables. Scope defines the regions of your code where a declared variable can be accessed and used. Understanding scope is crucial to avoid naming conflicts and manage data correctly.

**Variable Declarations: `let`, `const`, and `var`**

1.  **`let` (Block-Scoped):**
    *   Introduced in ES6 (ECMAScript 2015), and it's the recommended way to declare variables in modern JavaScript and TypeScript.
    *   **Block-scoped:** Variables declared with `let` are limited to the block in which they are defined (a block is code within curly braces `{}`). This includes:
        *   Function blocks
        *   `if` statement blocks
        *   `for` loop blocks
        *   `while` loop blocks, etc.
    *   **Cannot be redeclared within the same scope:** You cannot declare another variable with the same name using `let` in the same scope.
    *   **Can be reassigned:** You can change the value of a `let` variable after it's declared.

    ```typescript
    function exampleLetScope() {
        let message = "Hello from function scope";
        if (true) {
            let message = "Hello from block scope"; // Different 'message' variable
            console.log(message); // Output: "Hello from block scope"
        }
        console.log(message); // Output: "Hello from function scope"
    }
    exampleLetScope();
    ```

2.  **`const` (Block-Scoped, Constant):**
    *   Also introduced in ES6.
    *   **Block-scoped:** Like `let`, `const` variables are block-scoped.
    *   **Constant:**  `const` variables must be initialized with a value when they are declared, and their value **cannot be reassigned** after initialization. This doesn't mean the *value* itself is immutable if it's an object or array, but the variable binding to that object or array cannot be changed.
    *   **Cannot be redeclared within the same scope:** Similar to `let`, you cannot redeclare a `const` variable in the same scope.

    ```typescript
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
    ```

3.  **`var` (Function-Scoped, Avoid in Modern Code):**
    *   The older way to declare variables in JavaScript (before ES6).
    *   **Function-scoped:** Variables declared with `var` are scoped to the function in which they are defined. If declared outside any function, they become globally scoped (attached to the `window` object in browsers, or global scope in Node.js).
    *   **Can be redeclared and reassigned within the same scope:**  You can redeclare a `var` variable in the same scope, which can lead to confusion and bugs.
    *   **Hoisting:** `var` declarations are "hoisted" to the top of their scope, meaning they are treated as if they were declared at the beginning of the function (or global scope). However, only the declaration is hoisted, not the initialization.

    ```typescript
    function exampleVarScope() {
        var message = "Hello from function scope (var)";
        if (true) {
            var message = "Redeclared in block (var)"; // Oops, overwrites outer 'message'
            console.log(message); // Output: "Redeclared in block (var)"
        }
        console.log(message); // Output: "Redeclared in block (var)" - unexpected!
    }
    exampleVarScope();

    console.log(globalVar); // Output: undefined (before declaration line)
    var globalVar = "Global var";
    console.log(globalVar); // Output: "Global var" (after declaration line)
    ```

    **Why avoid `var` in modern code?**
    *   Function scoping of `var` can be less intuitive and lead to bugs, especially in complex functions with nested blocks.
    *   `var`'s hoisting behavior can also be confusing.
    *   `let` and `const` provide block scoping, which is generally more predictable and aligns better with how developers expect scope to work in other programming languages.

**Types of Scope:**

1.  **Global Scope:**
    *   Variables declared outside of any function or block have global scope.
    *   In a browser environment, global variables are properties of the `window` object. In Node.js, they are in the global scope.
    *   Global scope should be used sparingly as it can lead to naming collisions and make code harder to maintain and reason about.

2.  **Function Scope (for `var`):**
    *   Variables declared with `var` inside a function are function-scoped. They are accessible anywhere within that function, including nested blocks.

3.  **Block Scope (`let`, `const`):**
    *   Variables declared with `let` or `const` are block-scoped. They are only accessible within the block (curly braces `{}`) where they are defined and any nested blocks within it.

**Best Practices:**

*   **Prefer `const` by default:** If you know a variable's value should not change after initialization, use `const`. This makes your code more readable and helps prevent accidental reassignments.
*   **Use `let` when reassignment is needed:** If you need to change the value of a variable, use `let`.
*   **Avoid `var` in modern TypeScript/JavaScript:** Stick to `let` and `const` for better scope management and fewer surprises.
*   **Declare variables at the top of their scope:** While not strictly required, it's good practice to declare variables at the beginning of their scope (e.g., at the top of a function or block) to improve code readability.
*   **Minimize global scope:** Try to encapsulate your code within functions and modules to reduce the use of global variables.

---

**Challenges - Variables and Scope:**

**Challenge 1: `let` vs. `var` Scope**

*   Predict the output of the following code and then run it to verify your prediction. Explain why you got the output you did, focusing on the scope of `let` and `var`.

    ```typescript
    function testScope() {
        var functionScopedVar = "function";
        let blockScopedLet = "block";

        if (true) {
            var functionScopedVar = "inner function";
            let blockScopedLet = "inner block";
            console.log("Inside block - var:", functionScopedVar);
            console.log("Inside block - let:", blockScopedLet);
        }

        console.log("Outside block - var:", functionScopedVar);
        console.log("Outside block - let:", blockScopedLet);
    }
    testScope();
    ```

**Challenge 2: `const` Reassignment**

*   Identify which of the following lines of code will cause a TypeScript error and explain why.

    ```typescript
    const MAX_VALUE = 100;
    // MAX_VALUE = 150; // Line A
    console.log(MAX_VALUE);

    const user = { name: "Alice", age: 30 };
    user.age = 31;      // Line B
    // user = { name: "Bob", age: 25 }; // Line C
    console.log(user);

    const numbers = [1, 2, 3];
    numbers.push(4);    // Line D
    // numbers = [4, 5, 6]; // Line E
    console.log(numbers);
    ```

**Challenge 3: Block Scope in Loops**

*   Predict the output of the following code and explain the behavior related to block scope in `for` loops using `let` and if you were to change it to `var` (and explain the difference).

    ```typescript
    console.log("Using let in for loop:");
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }

    console.log("Using var in for loop (if you were to change it - for explanation):");
    for (var j = 0; j < 3; j++) { // Imagine 'let' changed to 'var' here
        setTimeout(() => {
            console.log(j);
        }, 100);
    }
    ```

**Challenge 4: Global Scope (Use with Caution!)**

*   Declare a variable without any keyword (`let`, `const`, or `var`) inside a function. What scope does it have?  Run the code and explain your observation.

    ```typescript
    function testGlobalImplicit() {
        implicitGlobal = "I am global"; // No 'let', 'const', or 'var'
    }
    testGlobalImplicit();
    console.log(implicitGlobal); // Can we access it here?
    ```
