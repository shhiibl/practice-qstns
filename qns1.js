
// Write a program that does the following using array methods:

// Filter out all numbers less than 10.

// Sort the remaining numbers in descending order.

// Map the numbers to their squared value.

// Calculate the sum of the squared numbers using reduce.


let arr=[3,5,32,4,45,67,43,8]

let ten=arr.filter((a,b)=>a>10)
console.log(ten);
let sorted=ten.sort((a,b)=>b-a)
console.log(sorted);
let squared=sorted.map(num=>num*num)
console.log(squared);
let total=squared.reduce((a,b)=>a+b)
console.log(total);



