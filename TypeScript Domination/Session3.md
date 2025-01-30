# 📚 TypeScript OOP: Classes and Objects Guide 🚀

Welcome to the comprehensive guide on **Classes and Objects** in TypeScript! This README will cover essential concepts such as class definitions, constructors, access modifiers, and more. Let’s dive into the world of Object-Oriented Programming (OOP) in TypeScript! 🌟

---

## 🏗️ 1. Classes and Objects

In TypeScript, a **class** is a blueprint for creating objects. An **object** is an instance of a class. Classes encapsulate data for the object and methods to manipulate that data.

### Example:
```typescript
class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }
}

const myCar = new Car("Toyota", 2020);
console.log(myCar); // Output: Car { model: 'Toyota', year: 2020 }
```

---

## 📜 2. Class Definition

A class is defined using the `class` keyword followed by the class name. The class can contain properties and methods.

### Syntax:
```typescript
class ClassName {
    // properties
    // methods
}
```

### Example:
```typescript
class Person {
    name: string;
    age: number;

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
```

---

## 🛠️ 3. Constructors

A **constructor** is a special method that is called when an object is created. It initializes the object's properties.

### Syntax:
```typescript
constructor(parameters) {
    // initialization code
}
```

### Example:
```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const dog = new Animal("Buddy");
console.log(dog.name); // Output: Buddy
```

---

## 🔒 4. Access Modifiers (Public, Private, Protected)

Access modifiers control the visibility of class members (properties and methods).

- **Public**: Members are accessible from anywhere.
- **Private**: Members are accessible only within the class.
- **Protected**: Members are accessible within the class and its subclasses.

### Example:
```typescript
class Employee {
    public name: string;
    private salary: number;
    protected position: string;

    constructor(name: string, salary: number, position: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }

    getSalary() {
        return this.salary; // Accessible within the class
    }
}
```


---

## 🔒 5. Readonly Practices

The `readonly` modifier makes a property immutable after initialization. It can only be assigned during declaration or in the constructor.

### Example:
```typescript
class Book {
    readonly title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const myBook = new Book("1984");
// myBook.title = "Animal Farm"; // Error: Cannot assign to 'title' because it is a read-only property.
```

---

## ⚙️ 6. Optional Properties

Optional properties can be defined using the `?` symbol. They may or may not be present in an object.

### Example:
```typescript
class User {
    username: string;
    email?: string; // Optional property

    constructor(username: string, email?: string) {
        this.username = username;
        this.email = email;
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob", "bob@example.com");
```

---

## 🏷️ 7. Parameter Properties

Parameter properties allow you to declare and initialize properties directly in the constructor parameters.

### Example:
```typescript
class Point {
    constructor(public x: number, public y: number) {} // Public properties

    display() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}

const point = new Point(10, 20);
point.display(); // Output: X: 10, Y: 20
```

---

## 🔍 8. Getters and Setters

Getters and setters allow you to define methods for getting and setting property values, providing a way to control access to properties.

### Example:
```typescript
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log("Radius must be positive.");
        }
    }
}

const circle = new Circle(5);
console.log(circle.radius); // Output: 5
circle.radius = 10; // Set new radius
console.log(circle.radius); // Output: 10
```

---

## 📏 9. Static Members

Static members belong to the class itself rather than to any specific instance. They can be accessed without creating an instance of the class.

### Example:
```typescript
class MathUtils {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14
console.log(MathUtils.areaOfCircle(5)); // Output: 78.5
```

---

## 🏛️ 10. Abstract Classes and Methods

An **abstract class** cannot be instantiated directly and is meant to be subclassed. It can contain abstract methods that must be implemented by derived classes.

### Example:
```typescript
abstract class Shape {
    abstract area(): number; // Abstract method

    display() {
        console.log("This is a shape.");
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area()); // Output: 200
```

---

## 🎉 Conclusion

Congratulations! You've just explored the fundamental concepts of **Classes and Objects** in TypeScript. With these tools, you can create robust and maintainable applications using Object-Oriented Programming principles. Happy coding! 💻✨

If you have any questions or need further clarification on any topic, feel free to ask! 😊