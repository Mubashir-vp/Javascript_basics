var read=require('readline-sync')
var p=read.questionInt("Enter the principle amount ?")
var r=read.questionFloat("Enter the interest rate ?")
var n=read.questionFloat("Enter number of years ?")
var si=(p*r*n)/100;
console.log("Simple intrest is " +si);

