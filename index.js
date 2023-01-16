// Iteration 1: Names and Input
console.log("I'm ready!")


// Iteration 2: Conditionals

let hacker1 = "Joao";
console.log("The driver's name is " + hacker1);

let hacker2 = "Maria"
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if(hacker2.length > hacker1.length){
   console.log("It seems that the navigator has the longest name, it has "+ hacker2.length +" characters.")
}
else if(hacker1.length == hacker2.length){
    console.log("Wow, you both have equally long names, "+ hacker1.length +" characters!.")
}


// Iteration 3: Loops

// 3.1 

let capitalizedHacker =""
for(letter in hacker1){
    capitalizedHacker += hacker1[letter] + " "
}
console.log(capitalizedHacker.toUpperCase());

// 3.2
let reversedHacker =""
for(let i = hacker2.length - 1;  i >= 0; i --){
    reversedHacker += hacker2[i]
}
console.log(reversedHacker);

// 3.3
if(hacker1 < hacker2){
    console.log(hacker1 + " goes first.");
}
else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("What?! You both have the same name?")
}