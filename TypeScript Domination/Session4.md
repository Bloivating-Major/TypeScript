# 📚 TypeScript Session 4: Object-Oriented Programming Concepts 🚀

Welcome to the summary of our fourth session on TypeScript! In this lecture, we explored various object-oriented programming concepts, focusing on classes, inheritance, access modifiers, and property management. Here’s a breakdown of the key topics we covered:

## 1. **Classes and Constructors** 🏗️
- We learned how to define classes in TypeScript and use constructors to initialize properties.
- Example:
  ```typescript
  class BottleMaker {
      constructor(public name: string) {
          this.name = name;
      }
  }
  ```

## 2. **Access Modifiers** 🔒
- We discussed the importance of access modifiers: `public`, `private`, and `protected`.
- **Private** properties are only accessible within the class.
- **Protected** properties can be accessed in derived classes.
- Example:
  ```typescript
  class BottleMaker {
      private halua: string = "halua"; // Only accessible within BottleMaker
  }
  ```

## 3. **Inheritance** 🌳
- We explored how to create subclasses using inheritance, allowing us to extend the functionality of existing classes.
- Example:
  ```typescript
  class MetalBottleMaker extends BottleMaker {
      constructor(name: string) {
          super(name);
      }
  }
  ```

## 4. **Read-only Properties** 🔒
- We learned about `readonly` properties, which cannot be modified after initialization.
- Example:
  ```typescript
  class User {
      constructor(public readonly name: string) {}
  }
  ```

## 5. **Getters and Setters** 🔄
- We discussed how to use getters and setters to control access to class properties.
- This allows for encapsulation and validation when modifying properties.
- Example:
  ```typescript
  class User {
      constructor(public _name: string) {}
      
      get name() {
          return this._name;
      }

      set name(value: string) {
          this._name = value;
      }
  }
  ```

## 6. **Practical Examples** 💻
- We implemented practical examples to illustrate the concepts, such as creating a `User` class with encapsulated properties and a `MetalBottleMaker` class that extends `BottleMaker`.

## Conclusion 🎉
In this session, we deepened our understanding of TypeScript's object-oriented features, which are essential for building scalable and maintainable applications. Keep practicing these concepts to enhance your TypeScript skills!

Happy coding! 💻✨