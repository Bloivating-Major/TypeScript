// Challenge 1
// function calculateGrade(score: number): string {
//     let grade: string;
//     if (score >= 90) {
//         grade = "A+";
//     } else if (score >= 80) {
//         grade = "A";
//     } else if (score >= 70) {
//         grade = "B";
//     } else if (score >= 60) {
//         grade = "C";
//     } else if (score >= 50) {
//         grade = "D";
//     } else {
//         grade = "Fail";
//     }
//     return grade;
// }

// // Test cases
// let score1 = 92;
// let score2 = 85;
// let score3 = 72;
// let score4 = 65;
// let score5 = 55;
// let score6 = 40;

// console.log(`Score ${score1} - Grade: ${calculateGrade(score1)}`);
// console.log(`Score ${score2} - Grade: ${calculateGrade(score2)}`);
// console.log(`Score ${score3} - Grade: ${calculateGrade(score3)}`);
// console.log(`Score ${score4} - Grade: ${calculateGrade(score4)}`);
// console.log(`Score ${score5} - Grade: ${calculateGrade(score5)}`);
// console.log(`Score ${score6} - Grade: ${calculateGrade(score6)}`);

// Challenge 2
// function getDayName(dayNumber: number): string {
//     let dayName: string;
//     switch (dayNumber) {
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         case 7:
//             dayName = "Sunday";
//             break;
//         default:
//             dayName = "Invalid day number";
//     }
//     return dayName;
// }

// // Test cases
// console.log(`Day 1: ${getDayName(1)}`);
// console.log(`Day 3: ${getDayName(3)}`);
// console.log(`Day 7: ${getDayName(7)}`);
// console.log(`Day 0: ${getDayName(0)}`); // Invalid
// console.log(`Day 8: ${getDayName(8)}`); // Invalid

// Challenge 3
// let sum: number = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i; // Add the current number 'i' to the sum
// }
// console.log("Sum of numbers from 1 to 10:", sum);

// Challenge 4
// let countdown: number = 10;
// while (countdown >= 1) {
//     console.log(countdown);
//     countdown--; // Decrement countdown by 1
// }
// console.log("Blast off!");

// Challenge 5
// const secretNumber = 7;
// let guess: number;
// let attempts = 0;

// do {
//     attempts++;
//     // For simplicity in this example, we're hardcoding guesses in each iteration.
//     // In a real game, you would get user input here.
//     if (attempts === 1) guess = 5;
//     else if (attempts === 2) guess = 8;
//     else guess = 7; // Correct guess on 3rd attempt

//     console.log(`Attempt ${attempts}: You guessed ${guess}`);

//     if (guess === secretNumber) {
//         console.log("Congratulations! You guessed it!");
//     } else {
//         console.log("Try again.");
//     }
// } while (guess !== secretNumber);

// Challenge 6
// console.log("Numbers from 1 to 15, skipping multiples of 3 and breaking after 10:");
// for (let i = 1; i <= 15; i++) {
//     if (i % 3 === 0) {
//         continue; // Skip numbers divisible by 3
//     }
//     if (i > 10) {
//         break;    // Exit loop when number is greater than 10
//     }
//     console.log(i);
// }
// console.log("Loop finished.");