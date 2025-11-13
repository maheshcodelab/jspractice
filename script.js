// 1  Print Number from 1 to 10  
// for (let i = 1; i <11; i++) {
//     console.log(i);
// }

// 2  Print Even Number from 1 to 20
// for( let i = 1; i  < 21; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//  Print Odd Number from 1 to 20
// for( let i = 1; i  < 21; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 3 print Numbers from 10 to 1
// for ( let i = 10; i >0 ; i--){
//     console.log(i);
// }

// 4 print word "hello" 5 times
//  for(let i = 1; i<6; i++){
//     console.log("hello");
//  }

// 5 print whether Numbers from 1 to 10 are even or odd
// for( let i = 1; i < 11; i++){
//     if(i % 2 === 0){ 
//         console.log(i + " is even");
//     }
//     else{
//         console.log(`${i} is odd`); 
//     }
// }

// 6 Ask user for a number and say it's positive or negative
// let num = +prompt("Enter a number:");
// if (num >= 0) {
//     console.log(`${num} is positive`);
// }
// else { console.log(`${num} is negative`); }

// 7 Ask user’s age and check if eligible to vote
// let age = +prompt("Enter your age:");
// if (age >= 18){
//     console.log("vote de sakte ho.");
// }
// else {
//     console.log("vote nahi de sakte ho.");
// }


// Handlaing Invalid Input by user 
// let age = prompt("Enter your age:");
// if (age === null) {
//     console.error(" you pressed cancel");
// }
// else if (age.trim() === "") {
//     console.error("Bhaiya sahi se likh le");
// }
// else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//         console.error(" Bhai number likh le");
//     }
//     else {
//         console.log(`Your age is ${age}`);
//     }
// }

//  8 Print multiplication table of 5
//  for (let i = 1; i < 11; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
//  }

// 9 Count how many numbers between 1 and 15 are greater than 8  //Loop and count conditionally.
// let count = 0;
// for ( let i = 1; i < 16; i++) {
//     if (i > 8) {
//         count++;
//         console.log(i);
//     }
// }
// console.log(`${count} numbers are greater than 8 between 1 and 15.`);


//10. Ask user for password and print access status

// let password = "harsh"
// let pasInput = prompt("Enter your password:");

// if (pasInput === null) {
//     console.erroe("you cencelles it");
// }
// else if(pasInput === password ){
//     console.log("matched");
// }
// else {
//     console.log("not matched");
// }


// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let attempts = 0;
// let password = "harsh";
// let pasInput = prompt("Enter your password:");
// attempts++;

// while (attempts < 3 && pasInput !== password) {

//     pasInput = prompt("Enter your password:");
//     attempts++;   
// }

// if (attempts === 3 && pasInput !== password) {
//     console.error("Account locked");
// }
// else{
//     console.log ("Access granted");
// }


//12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let count = 0;
// let input = prompt("enter a words:");
// while (input !== "stop") {
//     input = prompt("enter a words:");
//  if (input === "yes") count++;

// }
// console.log(`You typed "yes" ${count} times.`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i < 51; i++){
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

//14. Sum of all odd numbers from 1 to 100
// Add only odd numbers. Print final sum.

// let sum = 0;

//     for (let i = 1; i < 31; i++) {
//         if (i % 2 !== 0) {
//             sum = sum + i;

//         }
//     }
//     console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = +prompt("Enter a number:");
// while (num % 2 !== 0) {
//     num = +prompt("Enter a number:");

//     if (num % 2 === 0) {
//         console.log(`${num} is even number`);
//     }
//     else {
//         console.log(`${num} is odd number`);
//     }

// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = +prompt("Enter starting number:");
// let end = +prompt("Enter ending number:");

// this is for both increasing and decreasing order
// if (start > end) {
//     for (let i = start; i >= end; i--) {
//         console.log(i);
//     }
// }
// else if (start < end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// else {
//     console.log("Both numbers are equal.");
// }
//  This is for only increasing order
// if (start > end) {
//     console.log("Starting number should be less than or equal to ending number.");
// }
//  for (let i = start; i <= end; i++) {
//         console.log(i);
//     }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for (let i = 1; i < 21; i++) {
//     if (i % 2 !== 0  && count < 3) {
//         console.log(i);
//         count++;
//     }
// }

//18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let count = 0;
// for (let i = 1; i <= 5; i++) {
//     let num = +prompt("Enter number ");
//     if (i >= 0) count++;

// }
// console.log(count);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000;
// let attempts = 0;
// let flag = false;

// while (balance > 0 && attempts !== 3) {
//     let withdrawal = +prompt("Enter withdrawal amount:");
//     if (withdrawal <= balance) balance -= withdrawal;

//     else {
//         flag = true;
//     }
//     attempts++;
// }

// if (flag === true) {
//     console.log("insufficient balance.");
// }

// console.log(` Remaining balance: ₹${balance}`);
