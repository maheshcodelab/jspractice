// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

// function sayHello(){
//     console.log("hello JS")
// };

// sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a, b) {
//     return a + b;
// }

// let sum = (add(2, 5));
// console.log(sum);


// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

// function guest(guest = "Guest"){
//     console.log(`Hi ${guest}`)
// }

// guest("Mahesh");


// 4. Use rest parameters to make a function that adds unlimited numbers.

// function addUntd(...val){
//     // let sum = 0;
//     // val.forEach(function(nums){
//     //     sum += nums;
//     // })

//     // for (let i=0; i<val.length; i++){
//     //     sum = sum + val[i];
//     // }
//     // console.log(sum);

//     // let ans = val.reduce(function(acc, num){
//     //     return acc + num;
//     // },0);
    
//     // console.log(ans);
// }

// addUntd(1,2,3,4,5,6,7,8,9);

// 5. Create an IIFE that prints `"I run instantly!"`.

// (function(){
//  console.log("I run instantly!");
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.

// function first(){
//     let a = 10;
//     function second(){
//         console.log(a);
//     }
//     second();
// }

// first();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr = ["Mango", "Apple", "Banana", "Orange", "Pineapple"]

// arr.push("Grapes");
// arr.unshift("Strawberry");

// 8. Use a `for` loop to print all elements of an array.

// let arr = [1,2,3,4,5,6,7,8];

// for ( let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

// let obj = {
//     name: "mahesh",
//     age: 20,
//     city: "Umaria",
// };

// for ( let key in obj){
//     console.log(`${key} :`, obj[key]);
// }

// 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

// setTimeout(function(){
//     console.log("its 3 seconds late");
// }, 3000);