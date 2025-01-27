// let number = 12;

// let string = "Sambhav";

// let boolean = true;

// let numArray = [1, 2, 3, 4, 5] // Type Array

// let array = [1, 2, 3, 4, "Sam"]; // Type is String or Number

// let numArray2: Number[] = [1,2,3]; // Done Type Safety.

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
//   }
  
// Direction.Up;

// // 
// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("Hello World");


// function throwError(message: string): never {
//   throw new Error(message);
// }

interface CanFly {
  fly(): void;
}

interface CanSwim {
  swim(): void;
}

interface Bird extends CanFly, CanSwim {}

const duck: Bird = {
  fly() {
    console.log("Flying...");
  },
  swim() {
    console.log("Swimming...");
  },
};

duck.fly(); // Output: Flying...
duck.swim();
  