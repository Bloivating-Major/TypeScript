"use strict";
let numberOfStudents = 30;
let cityName = 'Bhopal';
let itsRaining = false;
let different = "Different Values";
let largeNumber = 8237467264328764n; // Not available lower than version es2020
let noValue = null;
let notAssigned = undefined;
console.log(`Number of Students : ${numberOfStudents}`);
console.log(`City Name : ${cityName}`);
console.log(`Is it Raining? : ${itsRaining}`);
console.log(`Different : ${different}`); // Type 'any'
different = 12;
console.log(`Different : ${different}`); // Type 'number'
