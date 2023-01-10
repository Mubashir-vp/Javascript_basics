var read=require('readline-sync')
var value1=read.question("Enter your first number?")
var value2=read.question("Enter your second number?")
var sum=parseInt(value1)+parseInt(value2);
console.log("Sum is "+sum);
