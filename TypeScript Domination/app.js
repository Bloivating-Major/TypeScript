"use strict";
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
// interface CanFly {
//   fly(): void;
// }
// interface CanSwim {
//   swim(): void;
// }
// interface Bird extends CanFly, CanSwim {}
// const duck: Bird = {
//   fly() {
//     console.log("Flying...");
//   },
//   swim() {
//     console.log("Swimming...");
//   },
// };
// duck.fly(); // Output: Flying...
// duck.swim();
// class BottleMaker {
//     constructor (public name : string){
//         this.name = name;
//     }
//     private halua : string = "halua";
// }
// class MetalBottleMaker extends BottleMaker {
//     constructor (name : string){
//         super(name);
//     }
//     getValue(){
//         console.log(this.name , this.halua); // this is wrong        
//     }
// }
// let b1 = new MetalBottleMaker("milton");
// b1.getValue();
class BottleMaker {
    constructor() {
        this.name = "Sambhav";
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor() {
        super(...arguments);
        this.meterial = "metal";
    }
    changeName() {
        this.name = "Some other Name";
    }
}
let b1 = new MetalBottleMaker();
// class User{
//     constructor (public readonly name : string){}
//     changeName(){
//         this.name = "New Name";
//     }
// }
// let u1 = new User("Sambhav");
// class User {
//     constructor(public name : string, public age : number){}
//     getName(){
//         return this.name;
//     }
//     setName(value : string){
//         this.name = value;
//     }
//     // getter -> it is a method which will extract value from class
//     // setter -> it is a method which will take value from user and set in class.
// }
// class User {
//     constructor(public _name : string, public age : number){}
//     // getter
//     get name(){
//         return this._name;
//     }
//     set name(value : string){
//         this._name = value;
//     }
// }
// let u1 = new User("Sambhav", 20);
// Static Members
// class Shery{
//     static version = 1.0;
//     static getRandom(){
//         return (Math.random()*100).toFixed(2);
//     }
// }
