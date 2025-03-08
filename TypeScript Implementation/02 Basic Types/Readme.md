# 2. Basic Types

**Concept:**

TypeScript is all about types!  Basic types are the fundamental building blocks for defining the kind of data your variables, function parameters, and return values will hold. TypeScript adds static typing to JavaScript, which means you specify the types explicitly, and the TypeScript compiler checks these types during development to catch errors early.

**Common Basic Types:**

1.  **`number`:** Represents numeric values, both integers and floating-point numbers.

    ```typescript
    let age: number = 30;
    let price: number = 99.99;
    let hex: number = 0xf00d; // hexadecimal
    let binary: number = 0b1010; // binary
    let octal: number = 0o744; // octal
    ```

2.  **`string`:** Represents textual data. You can use single quotes (`'`), double quotes (`"`), or backticks (\`) for template literals.

    ```typescript
    let firstName: string = "John";
    let lastName: string = 'Doe';
    let message: string = `Hello, ${firstName} ${lastName}!`; // template literal
    ```

3.  **`boolean`:** Represents logical values, either `true` or `false`.

    ```typescript
    let isAdult: boolean = true;
    let isStudent: boolean = false;
    ```

4.  **`any`:**  Represents a type that can be anything. It essentially turns off type checking for that variable. Use it sparingly as it defeats the purpose of TypeScript's type safety.

    ```typescript
    let flexibleVar: any = "Hello";
    flexibleVar = 123;
    flexibleVar = true;
    let myArray: any[] = [1, "hello", true]; // array of any
    ```

5.  **`void`:**  Represents the absence of a return value from a function. Functions that don't return anything explicitly usually have a `void` return type.

    ```typescript
    function greet(name: string): void {
        console.log(`Hello, ${name}`);
        // No return statement
    }
    ```

6.  **`null` and `undefined`:** These are types that each have only one value: `null` and `undefined` respectively. They often represent the intentional absence of a value (`null`) or a variable that has been declared but not yet assigned a value (`undefined`).

    ```typescript
    let absentValue: null = null;
    let unassignedVariable: undefined = undefined;
    let anotherUndefined: string | undefined = undefined; // Can be string or undefined
    ```

    *Note:* In TypeScript, `null` and `undefined` are subtypes of all other types by default. You can configure strict null checking in `tsconfig.json` to make them more distinct.

7.  **`symbol` (ES6):** Represents a unique and immutable value. Often used as keys for object properties to avoid naming collisions.

    ```typescript
    const uniqueKey: symbol = Symbol("description");
    let myObject = {
        [uniqueKey]: "This is a symbol property"
    };
    console.log(myObject[uniqueKey]); // Accessing symbol property
    ```

8.  **`bigint` (ES2020):** Represents whole numbers larger than the `number` type can reliably represent.

    ```typescript
    let largeNumber: bigint = 9007199254740991n; // Add 'n' at the end
    let anotherLargeNumber: bigint = BigInt(9007199254740995);
    ```

**Type Annotations vs. Type Inference:**

*   **Type Annotations:** Explicitly specifying the type of a variable using a colon `:` followed by the type name (e.g., `let age: number = 30;`).
*   **Type Inference:** TypeScript can often automatically infer the type of a variable based on its initial value.

    ```typescript
    let inferredAge = 30; // TypeScript infers 'inferredAge' to be of type 'number'
    let inferredName = "Alice"; // TypeScript infers 'inferredName' to be of type 'string'
    ```

**Best Practice:**  While type inference is convenient, it's generally good practice to use type annotations, especially in function signatures and complex object structures, to make your code more readable and maintainable.

---

**Challenges - Basic Types:**

**Challenge 1: Variable Declarations**

*   Declare variables for each of the following scenarios using appropriate TypeScript basic types and annotations:
    *   A variable to store the number of students in a class (integer).
    *   A variable to store the name of a city (string).
    *   A variable to indicate whether it is raining or not (boolean).
    *   A variable that might hold different types of values at different times (use with caution!).
    *   A variable to represent a very large integer (larger than JavaScript's standard `number` can safely handle).
    *   A variable that is intentionally set to have no value.
    *   A variable that is declared but not yet assigned a value.

**Challenge 2: Type Inference**

*   Declare variables without explicit type annotations and initialize them with the following values. Then, use your code editor or the TypeScript compiler to check the inferred types.  (You can hover over the variable name in many code editors to see the inferred type).
    *   `150`
    *   `"TypeScript is fun"`
    *   `false`
    *   `null`
    *   `undefined`
    *   `Symbol("uniqueID")`
    *   `12345678901234567890n`

**Challenge 3: Type Errors**

*   Write TypeScript code that intentionally tries to assign values of incorrect types to variables that have been explicitly typed. Observe the errors reported by the TypeScript compiler. For example:
    ```typescript
    let count: number = 10;
    count = "twenty"; // Try to assign a string to a number variable
    ```
    Experiment with different type mismatches (e.g., assigning a boolean to a string, a string to a boolean, etc.).

**Challenge 4: Function with `void`**

*   Write a function called `printMessage` that takes a string parameter `message` and prints it to the console. The function should not return any value. Explicitly specify the return type as `void`. Call the function with a string argument.

**Challenge 5: `any` type (Use Sparingly!)**

*   Declare a variable `dynamicValue` of type `any`.
*   Assign a number to `dynamicValue`, then assign a string to it, then assign a boolean.
*   Try to perform operations on `dynamicValue` that might be invalid for some of its potential types (e.g., `dynamicValue.toUpperCase()` when `dynamicValue` might be a number). Observe if TypeScript reports any errors (and why or why not).

---
