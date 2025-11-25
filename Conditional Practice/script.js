// Q1. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = prompt("enter your age :");

if (age > 18){
    console.log("Adult");
}else{
    console.log("Minor");
}

// Q2. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let mark = prompt("enter your marks: ");
if(mark >= 90){
    console.log("A grade");
}else if(mark >= 75){
    console.log("B grade");
}else if(mark >= 50){
    console.log("C grade");
}else{
    console.log("Fail");
}

// Q3. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

var city = "Bhopal";

if(city === "Bhopal"){
    console.log("MP");
}else if(city === "Delhi"){
    console.log("Capital");
}else{
    console.log("Unknown City");
}

// Q5. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

let result = (score>35) ? "Pass" : "Fail";

console.log(result);

// Q6. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temprature = prompt("Enter your temprature : ");

let weather = (temprature > 30) ? "Hot" : "Pleasant"

console.log(weather);


// Q7. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = prompt(" enter day 1 to 7 :");

day = Number(day);

switch(day){
    case 1: 
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;
    
    case 3:
        console.log("Tuesday");
        break;
    
    case 4:
        console.log("Wednesday");
        break;
            
    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;
                     
    default:
        console.log("Invalid day");
         
}

// Q8. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age = prompt("Enter your age : ");
let country = "India";

if (age > 18 && country == "India"){
    console.log("Eligible for Vote");
}else{
    console.log("Not eligible");
}