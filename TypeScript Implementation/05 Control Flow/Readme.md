
# 5. Control Flow

**Concept:**

Control flow statements determine the order in which instructions in your program are executed. Without control flow, code would execute sequentially, line by line, from top to bottom. Control flow statements allow you to:

*   **Make decisions:** Execute different blocks of code based on conditions (`if`, `else if`, `else`, `switch`).
*   **Repeat actions:** Execute a block of code multiple times (`for`, `while`, `do-while` loops).

**Types of Control Flow Statements in TypeScript:**

1.  **`if` Statements (Conditional Execution)**

    *   **`if` statement:** Executes a block of code if a condition is true.

        ```typescript
        let age: number = 25;
        if (age >= 18) {
            console.log("You are an adult.");
        }
        ```

    *   **`if...else` statement:** Executes one block of code if the condition is true, and another block if it's false.

        ```typescript
        let temperature: number = 15;
        if (temperature > 20) {
            console.log("It's warm.");
        } else {
            console.log("It's cool.");
        }
        ```

    *   **`if...else if...else` statement:**  Allows you to check multiple conditions in sequence. If the first `if` condition is false, it checks the `else if` condition, and so on. If none of the `if` or `else if` conditions are true, the `else` block (if present) is executed.

        ```typescript
        let grade: number = 85;
        if (grade >= 90) {
            console.log("A Grade");
        } else if (grade >= 80) {
            console.log("B Grade");
        } else if (grade >= 70) {
            console.log("C Grade");
        } else {
            console.log("Below C Grade");
        }
        ```

2.  **`switch` Statement (Multi-way Branching)**

    *   Provides a more structured way to handle multiple conditions based on the value of a single expression.
    *   Compares the value of an expression against multiple `case` values. If a match is found, the code block associated with that `case` is executed.
    *   `break` statement is usually used at the end of each `case` block to prevent "fall-through" to the next case.
    *   `default` case (optional) is executed if none of the `case` values match the expression.

        ```typescript
        let dayOfWeek: number = 3; // 1=Monday, 2=Tuesday, ..., 7=Sunday
        let dayName: string;

        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        }
        console.log(`Day ${dayOfWeek} is ${dayName}`);
        ```

3.  **`for` Loop (Iteration with Known Count)**

    *   Used to repeat a block of code a specific number of times or to iterate over a sequence (like an array).
    *   Consists of three parts (optional but commonly used):
        *   **Initialization:** Executed only once at the beginning of the loop (e.g., `let i = 0`).
        *   **Condition:** Evaluated before each iteration. If true, the loop body executes; if false, the loop terminates (e.g., `i < 10`).
        *   **Increment/Decrement (Final Expression):** Executed after each iteration (e.g., `i++`).

        ```typescript
        for (let i = 0; i < 5; i++) {
            console.log(`Iteration number: ${i}`);
        }

        let colors: string[] = ["red", "green", "blue"];
        for (let i = 0; i < colors.length; i++) {
            console.log(`Color at index ${i}: ${colors[i]}`);
        }
        ```

4.  **`while` Loop (Iteration with Condition Check at the Beginning)**

    *   Repeatedly executes a block of code as long as a specified condition is true.
    *   The condition is checked *before* each iteration. If the condition is initially false, the loop body might not execute at all.

        ```typescript
        let count: number = 0;
        while (count < 3) {
            console.log(`Count is: ${count}`);
            count++;
        }
        ```

5.  **`do...while` Loop (Iteration with Condition Check at the End)**

    *   Similar to `while` loop, but the condition is checked *after* each iteration.
    *   This guarantees that the loop body will execute at least once, even if the condition is initially false.

        ```typescript
        let gameScore: number = 0;
        let playAgain: boolean;

        do {
            gameScore += 10; // Play the game (at least once)
            console.log(`Game score: ${gameScore}`);
            playAgain = gameScore < 50; // Condition to continue playing
        } while (playAgain);

        console.log("Game over!");
        ```

**`break` and `continue` Statements (Loop Control)**

*   **`break`:** Immediately terminates the loop (or `switch` statement) and transfers control to the statement following the loop (or `switch`).
*   **`continue`:** Skips the rest of the current iteration of a loop and proceeds to the next iteration.

    ```typescript
    // Example of 'break'
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // Exit the loop when i is 5
        }
        console.log(`i is ${i}`); // Will print 0, 1, 2, 3, 4
    }

    // Example of 'continue'
    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            continue; // Skip iteration when i is 2
        }
        console.log(`Current i is ${i}`); // Will print 0, 1, 3, 4 (skips 2)
    }
    ```

---

**Challenges - Control Flow:**

**Challenge 1: `if...else if...else` - Grade Calculator**

*   Write a TypeScript program that takes a student's score (as a number) and assigns a grade based on the following criteria:
    *   90 or above: "A+"
    *   80-89: "A"
    *   70-79: "B"
    *   60-69: "C"
    *   50-59: "D"
    *   Below 50: "Fail"
*   Use `if...else if...else` statements to determine the grade and print the grade to the console. Test with different scores.

**Challenge 2: `switch` - Day of the Week**

*   Write a TypeScript program that takes a number representing a day of the week (1 for Monday, 2 for Tuesday, ..., 7 for Sunday).
*   Use a `switch` statement to print the name of the day for the given number.
*   Include a `default` case to handle invalid day numbers (e.g., numbers less than 1 or greater than 7).

**Challenge 3: `for` loop - Sum of Numbers**

*   Write a `for` loop that calculates the sum of numbers from 1 to 10 (inclusive).
*   Print the final sum to the console.

**Challenge 4: `while` loop - Countdown**

*   Write a `while` loop that starts a countdown from 10 to 1.
*   In each iteration, print the current countdown number.
*   After the loop finishes (when the count reaches 0 or less), print "Blast off!".

**Challenge 5: `do...while` loop - Number Guessing Game (Simple)**

*   Create a simple number guessing game.
    *   Declare a secret number (e.g., `const secretNumber = 7;`).
    *   Use a `do...while` loop to repeatedly:
        *   Prompt the user to guess a number (you can simulate this with `prompt()` in a browser environment, or use `readline-sync` in Node.js for console input - for now, you can just hardcode a guess in each iteration for simplicity, like `let guess = 5;` and change it in each iteration to simulate different guesses).
        *   Check if the guess is equal to the `secretNumber`.
        *   If the guess is correct, print "Congratulations! You guessed it!" and set a flag to exit the loop.
        *   If the guess is incorrect, print "Try again."
    *   The loop should continue as long as the guess is not correct.

**Challenge 6: `break` and `continue` in `for` loop**

*   Write a `for` loop that iterates from 1 to 15.
*   Inside the loop:
    *   If the current number is divisible by 3, use `continue` to skip to the next iteration (don't print numbers divisible by 3).
    *   If the current number is greater than 10, use `break` to exit the loop entirely.
    *   Otherwise, print the current number.
*   Explain what output you expect and why.

