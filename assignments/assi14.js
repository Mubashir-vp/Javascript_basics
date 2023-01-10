
class NewClass {
    addiction(){
        console.log("Enter two numbers")
        var num1 = read.questionInt("")
        var num2 = read.questionInt("")
        var sum=num1+num2;
        console.log("Your sum is "+sum)

    }
    substraction(){
        console.log("Enter two numbers")
        var num1 = read.questionInt("")
        var num2 = read.questionInt("")
        var sum=num1-num2;
        console.log("Answer is "+sum)
    }
    multiplication(){
        console.log("Enter two numbers")
        var num1 = read.questionInt("")
        var num2 = read.questionInt("")
        var sum=num1*num2;
        console.log("Answer is "+sum)
    }
    division(){
        console.log("Enter two numbers")
        var num1 = read.questionInt("")
        var num2 = read.questionInt("")
        var sum=num1/num2;
        console.log("Answer is "+sum)
    }

}


var read = require('readline-sync')
console.log("Select the operation you want\n1.addition\n2.substraction\n3.multiplication\n4.division")
var selection = read.questionInt("")
var obj=new NewClass();
switch (selection) {
    case 1:
        obj.addiction();
        break
    case 2:
        obj.substraction();
        break
    case 3:
        obj.multiplication();
        break
    case 4:
        obj.division();
        break
   
    default:
        console.log("Default log")
}

