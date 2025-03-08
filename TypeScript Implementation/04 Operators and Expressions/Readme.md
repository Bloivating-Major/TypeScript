
# 4. Operators and Expressions

**Concepts:**

*   **Operators:** Special symbols or keywords that perform operations on operands (values or variables). TypeScript, being based on JavaScript, uses a wide range of operators.

*   **Expressions:**  Combinations of operands and operators that evaluate to a value. Expressions are fundamental building blocks for performing calculations, making decisions, and manipulating data in your programs.

**Types of Operators in TypeScript:**

1.  **Arithmetic Operators:** Perform mathematical calculations.

    | Operator | Description                     | Example         | Result |
    | :------- | :------------------------------ | :-------------- | :----- |
    | `+`      | Addition                        | `5 + 2`         | `7`    |
    | `-`      | Subtraction                     | `5 - 2`         | `3`    |
    | `*`      | Multiplication                  | `5 * 2`         | `10`   |
    | `/`      | Division                        | `5 / 2`         | `2.5`  |
    | `%`      | Modulus (remainder of division) | `5 % 2`         | `1`    |
    | `**`     | Exponentiation (ES2016)         | `5 ** 2`        | `25`   |
    | `++`     | Increment (prefix/postfix)      | `let x = 5; x++;` | `x` becomes `6` |
    | `--`     | Decrement (prefix/postfix)      | `let x = 5; x--;` | `x` becomes `4` |

    ```typescript
    let sum: number = 10 + 5;
    let difference: number = 20 - 8;
    let product: number = 6 * 7;
    let quotient: number = 15 / 4;
    let remainder: number = 17 % 5;
    let power: number = 2 ** 3;
    let counter: number = 0;
    counter++; // counter is now 1
    counter--; // counter is now 0 again
    ```

2.  **Assignment Operators:** Assign values to variables.

    | Operator | Description             | Example       | Equivalent to |
    | :------- | :---------------------- | :------------ | :-------------- |
    | `=`      | Assignment              | `x = 10`      | `x = 10`        |
    | `+=`     | Addition assignment     | `x += 5`      | `x = x + 5`     |
    | `-=`     | Subtraction assignment  | `x -= 5`      | `x = x - 5`     |
    | `*=`     | Multiplication assignment | `x *= 5`      | `x = x * 5`     |
    | `/=`     | Division assignment     | `x /= 5`      | `x = x / 5`     |
    | `%=`     | Modulus assignment      | `x %= 5`      | `x = x % 5`     |
    | `**=`    | Exponentiation assignment | `x **= 5`     | `x = x ** 5`    |

    ```typescript
    let score: number = 50;
    score += 10; // score is now 60
    score -= 5;  // score is now 55
    score *= 2;  // score is now 110
    score /= 11; // score is now 10
    score %= 3;  // score is now 1
    score **= 2; // score is now 1
    ```

3.  **Comparison Operators:** Compare values and return a boolean result (`true` or `false`).

    | Operator | Description               | Example       | Result (if x=5, y=10) |
    | :------- | :------------------------ | :------------ | :-------------------- |
    | `==`     | Equal to (value equality)   | `x == 5`      | `true`                |
    | `===`    | Strict equal to (value and type equality) | `x === 5`     | `true`                |
    | `!=`     | Not equal to (value inequality) | `x != 5`      | `false`               |
    | `!==`    | Strict not equal to (value or type inequality) | `x !== 5`    | `false`               |
    | `>`      | Greater than                | `y > x`       | `true`                |
    | `<`      | Less than                   | `x < y`       | `true`                |
    | `>=`     | Greater than or equal to    | `y >= 10`     | `true`                |
    | `<=`     | Less than or equal to       | `x <= 5`      | `true`                |

    *   **`==` vs. `===` and `!=` vs. `!==`**:
        *   `==` and `!=` perform type coercion (they try to convert operands to the same type before comparison).
        *   `===` and `!==` are strict equality and inequality operators. They do *not* perform type coercion. They check if both the value and the type are the same. **It's generally recommended to use `===` and `!==` to avoid unexpected type coercion issues.**

    ```typescript
    let isEqual: boolean = 5 == '5';      // true (because of type coercion)
    let isStrictEqual: boolean = 5 === '5'; // false (different types)
    let notEqual: boolean = 10 != '10';    // false (type coercion)
    let strictNotEqual: boolean = 10 !== '10'; // true (different types)
    let greaterThan: boolean = 15 > 8;
    let lessThan: boolean = 3 < 7;
    let greaterOrEqual: boolean = 10 >= 10;
    let lessOrEqual: boolean = 4 <= 5;
    ```

4.  **Logical Operators:** Combine boolean expressions.

    | Operator | Description | Example           | Result (if x=true, y=false) |
    | :------- | :---------- | :---------------- | :-------------------------- |
    | `&&`     | Logical AND | `x && y`          | `false`                     |
    | `||`     | Logical OR  | `x || y`          | `true`                      |
    | `!`      | Logical NOT | `!x`              | `false`                     |

    ```typescript
    let condition1: boolean = true;
    let condition2: boolean = false;

    let andResult: boolean = condition1 && condition2; // false (both must be true)
    let orResult: boolean = condition1 || condition2;  // true (at least one is true)
    let notResult: boolean = !condition1;            // false (negation of true)
    ```

5.  **String Operator:** Concatenation (`+`) can be used to join strings.

    ```typescript
    let greeting: string = "Hello, ";
    let name: string = "Alice";
    let fullGreeting: string = greeting + name; // "Hello, Alice"
    let message: string = "Age: " + 30;        // "Age: 30" (number 30 is coerced to string)
    ```

6.  **Type Operators:**

    *   **`typeof`**: Returns a string indicating the type of an operand.

        ```typescript
        let value: number = 42;
        let typeString: string = typeof value; // "number"
        let nameVar: string = "Bob";
        let typeName: string = typeof nameVar; // "string"
        let isTrue: boolean = true;
        let typeBoolean: string = typeof isTrue; // "boolean"
        let nothing: null = null;
        let typeNull: string = typeof nothing; // "object" (historical quirk of JavaScript)
        let notDefined: undefined;
        let typeUndefined: string = typeof notDefined; // "undefined"
        ```

    *   **`instanceof`**: Checks if an object is an instance of a particular class or constructor function. (More relevant when you learn about classes).

7.  **Conditional (Ternary) Operator (`?:`)**: A shorthand for `if-else` in some cases.

    ```typescript
    let age: number = 20;
    let isAdult: boolean = age >= 18 ? true : false; // true (if age >= 18, then true, else false)
    let messageText: string = age >= 18 ? "Adult" : "Minor"; // "Adult"
    ```

8.  **Nullish Coalescing Operator (`??`) (ES2020):** Returns the right-hand side operand when its left-hand side operand is `null` or `undefined`, otherwise returns the left-hand side operand.

    ```typescript
    let userName: string | null = null;
    let defaultName: string = "Guest";
    let displayName: string = userName ?? defaultName; // displayName will be "Guest" because userName is null

    let providedValue: string | undefined = "User123";
    let backupValue: string = "Default User";
    let actualValue: string = providedValue ?? backupValue; // actualValue will be "User123" because providedValue is not null or undefined

    let count: number | null = null;
    let validCount: number = count ?? 0; // validCount will be 0 because count is null
    ```

9.  **Optional Chaining Operator (`?.`) (ES2020):** Allows you to safely access properties of an object that might be `null` or `undefined`. If the object is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.

    ```typescript
    interface User {
        address?: {
            city?: string;
        };
    }

    let user1: User = { address: { city: "New York" } };
    let user2: User = {}; // No address
    let user3: User = { address: {} }; // address exists but no city
    let user4: User = null; // User is null

    let city1: string | undefined = user1?.address?.city; // "New York"
    let city2: string | undefined = user2?.address?.city; // undefined (user2.address is undefined)
    let city3: string | undefined = user3?.address?.city; // undefined (user3.address.city is undefined)
    let city4: string | undefined = user4?.address?.city; // undefined (user4 is null)
    ```

**Expressions:**

*   An expression is any valid unit of code that resolves to a value.
*   Expressions can be simple (like a literal value or a variable) or complex (combinations of operators and operands).
*   Examples of expressions:

    ```typescript
    5;                 // Literal expression (value is 5)
    x;                 // Variable expression (value is the value of x)
    5 + 3;             // Arithmetic expression (value is 8)
    x > 10;            // Comparison expression (value is true or false)
    "Hello" + "World"; // String expression (value is "HelloWorld")
    age >= 18 ? "Adult" : "Minor"; // Conditional expression (value is "Adult" or "Minor")
    userName ?? "Guest"; // Nullish coalescing expression
    user?.address?.city; // Optional chaining expression
    ```

**Operator Precedence:** Operators have precedence that determines the order in which operations are performed in an expression (e.g., multiplication and division have higher precedence than addition and subtraction). You can use parentheses `()` to override precedence and control the order of evaluation.

---

**Challenges - Operators and Expressions:**

**Challenge 1: Arithmetic Operations**

*   Write TypeScript code to perform the following calculations and store the results in variables with appropriate type annotations. Then, print the results to the console.
    *   Calculate the sum of 123 and 456.
    *   Calculate the difference between 100 and 37.
    *   Calculate the product of 8 and 9.
    *   Calculate the quotient of 25 divided by 4.
    *   Calculate the remainder when 30 is divided by 7.
    *   Calculate 2 raised to the power of 5.

**Challenge 2: Comparison Operators**

*   Write TypeScript code to compare the following pairs of values using comparison operators and store the boolean results in variables. Print the results.
    *   Is 10 greater than 5?
    *   Is 20 less than or equal to 20?
    *   Is "hello" strictly equal to "Hello"?
    *   Is 5 not equal to 3?
    *   Is 7 equal to '7' (using loose equality `==`)?
    *   Is 7 strictly equal to '7' (using strict equality `===`)?

**Challenge 3: Logical Operators**

*   Given two boolean variables, `isRaining` (set to `true`) and `hasUmbrella` (set to `false`), write expressions using logical operators to determine and print:
    *   Is it raining AND do you have an umbrella?
    *   Is it raining OR do you have an umbrella?
    *   Is it NOT raining?
    *   Is it raining AND NOT having an umbrella?

**Challenge 4: Conditional (Ternary) Operator**

*   Write a TypeScript expression using the ternary operator to determine if a number variable `score` is passing (score >= 60). If passing, the expression should evaluate to the string "Pass", otherwise "Fail". Store the result in a variable and print it. Test with `score = 75` and `score = 50`.

**Challenge 5: Nullish Coalescing and Optional Chaining**

*   **Nullish Coalescing:** You have a variable `config` that might be `null` or an object with a `timeout` property (which could also be `null` or `undefined`). Write an expression using the nullish coalescing operator to get the `config.timeout` value if it's not `null` or `undefined`, otherwise, use a default timeout value of 3000 (milliseconds).
*   **Optional Chaining:** You have an object `user` which might have nested properties like `profile.settings.theme`. Use optional chaining to safely access `user.profile.settings.theme` and get `undefined` if any of the intermediate properties (`profile`, `settings`) are `null` or `undefined`, or if `user` itself is `null` or `undefined`.
