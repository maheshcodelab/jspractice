// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(fn) {
//     fn();
//     fn();
// }

// runTwice(function () {
//     console.log("Hello HoF");
// })


// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

// function pure(a,b){
//     console.log(a+b);
// }
// pure(10,20);

// let global = 0;
// function impure(a){
//     global++;
//     console.log(a+global);
// }
// impure(5);
// impure(5);

// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.

// function dest({name,age}){
//         console.log(name, age);
// }
// dest({name: "mahesh", age: 20});

// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).

// let obj = {
//     name: "mahesh",
//     fnc: function(){
//         console.log(this);
//         let fnc2 = ()=>{
//             console.log(this);
//         }
//         fnc2();
//     },
//    }
// obj.fnc();

// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.

// let arr = [2,4,6,8,10];
// let newarr = arr.map(function (val){
//  return(val+val);
// })
// console.log(newarr);

// 6. Use `filter()` to get only even numbers from an
// array.

// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(function(val){
//     return val%2 == 0 ;
// })
// console.log(newarr);

// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

// let arr = [1000, 2000, 2002];
// let total = arr.reduce(function (acc, val){
//     return acc + val;
// }, 0);
// console.log(total);

// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

// arr = [ "raj", "om ", "kashi", "yug"];
// let ans = arr.every(function(val){
//     return val.length > 3 ;
// })
// console.log(ans);

// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.

// let user = {
//     name: "raja",
//     age: 20,
//     email: "r@r.r",
// }

// Object.seal(user);
// user.name = " Mahesh"
// user.social="instagram"

// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.

// let obj = {
//     user : {
//         name: "mahesh",
//         address: {
//             city: "Umaria",
//         }

//     }
// }

// let {city} = obj.user.address;
// console.log(obj.user.address.city);