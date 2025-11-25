// Q1. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b =3;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a*b);

// Q2. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x += 3;
x -= 3;
x *= 3;
x /= 3;
console.log(x);

// Q3. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

let count = 5;
count++;
console.log(count);

let count1 = 5;
count1--;
console.log(count1);

// Q4. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

let val = 5;
let val1 = "5";

if(val === val1){
    console.log("hey");    
}
else{
    console.log("wrong");
}

// Q5. Check if 10 is greater than 5, less than 20, and equal to 10.

let p = 10;

if(p>5 && p < 20 && p === 10){
    console.log("true");
}

// Q6. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

// Q7. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).







