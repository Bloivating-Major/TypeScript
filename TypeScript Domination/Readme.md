
# 🚀 TypeScript Domination

Welcome to your journey of mastering TypeScript! Let's get started with the basics and explore the powerful features that TypeScript has to offer! 🌟

---

## 🛠️ Setup TypeScript

1. **Install TypeScript globally**
    ```bash
    npm i typescript -g
    ```

2. **Set up a TypeScript project**
    - We will create a configuration file using `tsconfig.json`
    - Run `tsc --init` to generate the TypeScript configuration file.
   
3. **Auto-compiling with `--watch`**
    - Use the command below to automatically compile your TypeScript files whenever you save them:
    ```bash
    tsc --watch
    ```

---

## 📚 Introduction to Basic Types

TypeScript provides strong typing to help us avoid errors and write more reliable code. Let's dive into the basic types that TypeScript offers! 🎯

### 🏷️ Basic Types

- **Primitive Types**: These include numbers, strings, and booleans.
- **Arrays**: A collection of elements.
- **Tuples**: Arrays with fixed sizes and different types of elements.
- **Enums**: A way to define a set of named constants.
- **Other Types**: `any`, `unknown`, `void`, `null`, `undefined`, and `never`.

---

### 🔢 Primitive Types

Primitive types are the most basic form of data, and they include:
- Numbers (`12`, `23.3`)
- Strings (`"Sambhav"`)
- Booleans (`true`, `false`)

#### 🧑‍💻 Code Example:

```typescript
let age: number = 30; // Integer
let price: number = 25.99; // Float

let name: string = "Alice";
let greeting: string = `Hello, ${name}!`; // Using template literals

let isActive: boolean = true;
let isComplete: boolean = false;
```

---

### 🗂️ Arrays

Arrays are collections of items that can be of the same type.

```typescript
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "cherry"];
```

You can specify the type of elements that the array will contain using `type[]`.

---

### 🔢 Tuples

Tuples are similar to arrays, but they can hold values of different types and have a fixed size.

```typescript
let user: [string, number] = ["Alice", 25]; // A tuple with a string and a number
let point: [number, number] = [10, 20]; // A tuple with two numbers
```

The types and the number of elements in a tuple are fixed. You can access them by their index:

```typescript
console.log(user[0]); // Alice
console.log(user[1]); // 25
```

---

### 📊 Enums

Enums are a way to define a set of named constants, making your code more readable and avoiding "magic numbers" or strings.

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

You can access enum values by their name:
```typescript
console.log(Direction.Up); // Output: UP
```

---

## 🚀 Ready to Go?

That's it for the basics! With TypeScript, you'll be able to write cleaner, more maintainable code. 🌱

Keep learning and building with TypeScript! 💻✨

---

### 🌍 Follow Me:

- GitHub: [@Bloivating Major](https://github.com/Bloivating-Major)

---

#### 💡 Fun Fact:
TypeScript was created by Microsoft in 2012 and adds static typing to JavaScript. It helps catch errors early, improving the development experience. 🛠️

