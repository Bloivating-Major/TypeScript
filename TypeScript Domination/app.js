"use strict";
let number = 12;
let string = "Sambhav";
let boolean = true;
let numArray = [1, 2, 3, 4, 5]; // Type Array
let array = [1, 2, 3, 4, "Sam"]; // Type is String or Number
let numArray2 = [1, 2, 3]; // Done Type Safety.
var Direction;
(function (Direction) {
  Direction["Up"] = "UP";
  Direction["Down"] = "DOWN";
  Direction["Left"] = "LEFT";
  Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
Direction.Up;
