
# 1. Installation and Setup

**Concept:**

Before you can write and run TypeScript code, you need to set up your development environment. This primarily involves installing Node.js and npm (Node Package Manager), and then installing the TypeScript compiler.

**Steps:**

1.  **Install Node.js and npm:**
    *   Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
    *   Download and install the LTS (Long-Term Support) version for your operating system. npm is included with Node.js.
    *   Verify installation by opening your terminal or command prompt and running:
        ```bash
        node -v
        npm -v
        ```
        You should see version numbers for both Node.js and npm.

2.  **Install TypeScript Compiler:**
    *   Open your terminal or command prompt and run the following command using npm:
        ```bash
        npm install -g typescript
        ```
        The `-g` flag installs TypeScript globally, making the `tsc` command available in your terminal.
    *   Verify TypeScript installation:
        ```bash
        tsc -v
        ```
        You should see the TypeScript compiler version.

**Explanation:**

*   **Node.js:**  A JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. We need it to run the TypeScript compiler and potentially execute JavaScript output.
*   **npm (Node Package Manager):**  A package manager for JavaScript. We use it to install TypeScript and other JavaScript tools and libraries.
*   **TypeScript Compiler (`tsc`):**  The core tool that takes your TypeScript code (.ts files) and compiles it into JavaScript code (.js files) that can be run by browsers or Node.js.

**Challenge 1:**

*   **Setup Verification:** Ensure you have Node.js, npm, and TypeScript installed correctly by running the version commands (`node -v`, `npm -v`, `tsc -v`) in your terminal and confirming you see version numbers for each.

**Challenge 2:**

*   **Create a TypeScript Project:**
    1.  Create a new folder for your TypeScript practice (e.g., `typescript-practice`).
    2.  Navigate into this folder in your terminal (`cd typescript-practice`).
    3.  Initialize a new npm project by running: `npm init -y` (This creates a `package.json` file).
    4.  Create a TypeScript file named `hello.ts` inside this folder.
    5.  Add the following code to `hello.ts`:
        ```typescript
        console.log("Hello, TypeScript!");
        ```
    6.  Compile the `hello.ts` file to JavaScript by running in your terminal: `tsc hello.ts`
    7.  This will create a `hello.js` file in the same folder. Run the JavaScript file using Node.js: `node hello.js`
    8.  You should see "Hello, TypeScript!" printed in your terminal.

**Challenge 3 (Optional):**

*   **TypeScript Configuration (`tsconfig.json`):**
    1.  Inside your `typescript-practice` folder, run: `tsc --init`
    2.  This will create a `tsconfig.json` file. Open it and examine its contents.  (We'll explore `tsconfig.json` in more detail later, but just notice it's there for project configuration).
    3.  Try compiling again just by running `tsc` in your terminal (without specifying `hello.ts`).  It should still compile `hello.ts` because `tsconfig.json` is present in the project.

Once you've completed these challenges, you'll have your TypeScript environment set up and be ready to move on to the next concepts. Let me know when you're ready for "Basic Types"!