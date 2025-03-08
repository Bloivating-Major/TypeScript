let numberOfStudents : number = 30;
let cityName : string = 'Bhopal';
let itsRaining : boolean = false;
let different : any = "Different Values";
let largeNumber : bigint = 8237467264328764n; // Not available lower than version es2020
let noValue : null = null;
let notAssigned : undefined = undefined;

console.log(`Number of Students : ${numberOfStudents}`);

console.log(`City Name : ${cityName}`);

console.log(`Is it Raining? : ${itsRaining}`);

console.log(`Different : ${different}`); // Type 'any'
different = 12;

console.log(`Different : ${different}`); // Type 'number'