let num1 = 0;
let num2; 
num2 = num2 ?? "was Undefined";

console.log(num1 || 100); // 100
console.log(num1 ?? 100); // 0
console.log(num2);