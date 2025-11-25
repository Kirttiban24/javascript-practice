// Q1. Print numbers from 1 to 10.
// Loop from 1 to 10 and print each number

// let i = 11;

// for(i=1;i<=10;i++){
//     console.log(i);
// }

// Q2. Print only even numbers from 1 to 20 use a loop and condition to print only even ones.

// let i = 20;

// for(i=1; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// Q3. print numbers from 10 to 1 reverse loop with a decrement.


// for(let i=10;i>0;i--){
//     console.log(i);
// }

// Q4. print the word "Yes" 5 times Repeat using loop.

// for(let i=1;i<=5;i++){
//     console.log("yes");
// }

// Q5. Print whether numbers from 1 to 10 are even or odd. 

// for(let i=1; i<=10; i++){
//     if(i%2 == 0){
//         console.log(`${i} - Even`);
//     }else{
//         console.log(`${i} - Odd`);
//     }
// }


// Q6. Ask user for a number and say if it's positive or negative Use prompt() and a conditional.

// let num = prompt("enter a number:")
// num = parseInt(num);

// if(num>=0){
//     console.log("it is a positive number");
// }else{
//     console.log("it is a negative number");
// }


// Q7. print multiplication table of 5 Use loop to print 5 x 1 to 5 x 10.

// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// Q8. Count how many numbers between 1 and 15 are greater than 8 loop and count conditionally.

// let count = 0;

// for(let i = 1; i<=15; i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count);

// Q9. Ask user for password and print access status Hardcoded correct password. Compare with user input.

// let password = "kirttiban";

// let pass = prompt("tell the password: ");

// if(password === null){
//     console.error("you couldn't write the password");
// }else{
//     if(pass === password){
//         console.log("password is matched");
//     }else{
//         console.log("password is not matched");
//     }
// }

// LEVEL 2

// Q1. Allow only 3 attempts to enter correct password. If user gets it right early,stop if not " Account Locked".

//1st trick 

let attempt = 0;
let opened = false;
let pass = "kirttiban"

let password = prompt("Tell me the password");
attempt++;

if(password === pass) opened = true;

while (password != pass) {
    if (attempt === 3) {
        console.error("Account Locked");
        break;
    }
    password = prompt("Tell me the password");
    if(password === pass) opened = true;
    attempt++;
}

if(opened === true) console.log("Account opened");


// 2nd trick

// let attempt = 0;
// let rightpass = "kirttiban";

// let userpassword = prompt("enter the password");
// attempt++;

// while(attempt < 3 && rightpass !== userpassword){
//      userpassword = prompt("enter the password");
//      attempt++;
// }
// if(attempt === 3 && rightpass !== userpassword){
//     console.error("Account Locked");
// }else{
//     console.log("Done");
// }

// 3rd trick

// let attempt = 0;
// let rightpass = "kirttiban";

// let userpassword = prompt("enter the password");
// attempt++;

// for(i=1;i<=3;i++){
//     userpassword = prompt("enter the password");
//     attempt++;
    
// } try karo

// Q2. Ask user for words until they type "stop" count how many times they "yes" Loop until "stop is typed. Count "yes.

// let words = prompt("Tell the word: ");
// let counter = 0;

// while(words !== "stop"){
//     if(words === "yes") counter++;
//     words = prompt("Tell  the word");
// }
// console.log(`total times yes count : ${counter}`);


// Q3. print numbers divisible by 7 from 1 to 50 use ,modulo % and loop.

for(let i=1;i<51;i++){
    if(i%7 === 0){
        console.log(i);    
    } 
}

// Q4. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

let sum = 0;

for(let i=1;i<=30;i++){
    if (i%2 !== 0){
        sum += i;
        console.log(sum);
    }
}

// Q5. Keep asking number until user enters an even number Use while loop. Stop only if input is even.

let num = prompt("Tell the number");
num = Number(num);

while(num%2 !== 0 ){
    num = prompt("Tell the number");
    num = Number(num);
}

// Q6. print numbers between two user inputs input start and end using prompt() -> print all between.

let start = prompt("enter start: ");
start = Number(start);

let end = prompt("enter end:");
end = Number(end);

if(start > end) console.error("start can not be bigger than the end");


for(let i = start; i<=end; i++){
    console.log(i);
}

// Q7. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

// let count = 0;

// for(let i=1; i<=20; i++){
//     if(count === 3) break;
//     if(i%2 !== 0){
//         console.log(i);
//         count++;
//     }
// }

// Q8. Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

let count = 0;

for(let i=1; i<=5; i++){
    let num = +prompt("enter number");
    if(num>=0) count++;       
    
}
console.log(count);

// Q9. ATM simulator - Allow 3 withdrawls Start with 1000rs balance. Ask withdrawl amount 3 times. If enough balance -> deduct Else -> print "Insufficient balance".

let balance = 1000;
let flag = false;

let counter = 0;
while(balance > 0 && counter !== 3 ){
    let withdraw = +prompt("withdraw money");
    counter++;
    if(withdraw <= balance) balance -= withdraw;
    else{
        flag = true;
        break;
    }
}
if (flag === true){
    console.log("Insufficient Balance");
}
console.log(`Required Balance is: ${balance}`);

