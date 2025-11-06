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

