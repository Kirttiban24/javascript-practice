// LEVEL-1 QUESTIONS WITH ANSWERS

// Q1. Write a function sayHello() that prints "Hello Javascript".

// function abcd(){
//     console.log("Helloo Javascript");
// }
// abcd();

// Q2. Create a function add(a,b) that returns their sum and log the result.

// function abcd(a,b){
//     return a+b;
// }
// let ans = abcd(4,5);
// console.log(ans);

// Q3. Write a function with a default parameter name = "Guest" that prints "Hi <name>" .

// function names(Guest = "Guest"){
//     console.log(`Hi ${Guest}`);
// }
// names();

// Q4. Use rest parameter to make a function that adds unlimited numbers.

// // 1st way

// function add(...nums){
//     let ans = nums.reduce(function(acc, val){
//         return acc + val;
//     },0);
//     console.log(ans);
// }
// add(1,2,3);

// 2nd way

// function add(...nums){
    
//     let sum = 0;
//     for(let i=0; i<nums.length; i++){
//         sum = sum + nums[i];
//     }
//     console.log(sum);
    
// }
// add(1,2,3);


// Q5. Create an IIFE prints "I run instantly !".

// (function (){
//     console.log("I run instantly");
// })();

// Q6. Make a nested function where the inner one prints a variable from the outer one.

// function outer(){
//     let a = 24;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();

// Q7. Create an array of 5fruits. Add one at the end and remove one from the beginning.

// let arr = ["banana","apple","guava","kiwi","pineapple"];

//  arr.push("grapes");
//  arr.unshift("orange");

// Q8. Use a for loop to print all elements of an array.

// let arr = [1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// Q9. Create an object person with keys name, age, and city and print each key's value.

// let obj =
// {
//     name: "Kirttiban Sahu",
//     age: 20,
//     city: "Baleswar",
// };
// console.log(obj.name);

// Q10. Use setTimeout() to log "Time's up!" after 2 seconds.

// setTimeout(function(){
//     console.log("Time's Up!");
// },10000);



// LEVEL 2 QUESTIONS

// Q1. Write a higher-order function runTwice(fn) that takes another function and executes it two times.

// function runTwice(fn){

//     fn();
//     fn();
// }
// runTwice(function () {
//     console.log("run this");
// });

// Q2. Create one pure function that always returns the same output for given input, and one impure function using a global variable.


// function Pure(a,b){
//     console.log(a+b);
// }

// let global = 0;
// function impure(a){
//     global++;
//     console.log(a + global);
// }
// impure(2);
// impure(2);

// Pure(1,2);
// Pure(1,2);  // Pure

// Q3. Write a funcion that uses object destructuring inside parameters to extract and print name and age.

// function abcd({name, age}){
//     console.log(name, age);
// }
// abcd({name:"sonu", age:20});


// Q4. Demonstrate the difference between normal function and arrow function when used as object methods .

// let obj = {
//     name: "sonu",
//     fnc: function (){
//         let fnc2 = ()=>{
//             console.log(this);
//         }
//         fnc2();
//     },
// };
// obj.fnc();

// Q5. Given an array of numbers, use map() to create a new array where each number is squared. 

// let arr = [1,2,3,4,5];
// let newarr = arr.map((val)=> {
//     return val * val;
// });

// console.log(newarr);

// Q6. Use filter() to get only even numbers from an array.

// let arr = [1,2,3,4,5,6,7];
// let newarr = arr.filter((val)=> {
//     return val%2 === 0;
// });

// console.log(newarr);

// Q7. Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].

// let salary = [1000,2000,3000];
// let ans = salary.reduce((acc, val)=> {
//     return acc+val;
// },0);

// console.log(ans);

// Q8. Create an array of names and use some() and every() to test a condition (e.g. all names longer than 3 chars).

// let names = ["ajay","vishu","shreya","sonu","harsh"];

// let ans = names.some((val)=> {
//     return val.length > 3;
// });




