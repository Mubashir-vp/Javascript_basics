var read=require('readline-sync')
var firstVal=read.question('Enter first number')
var secondVal=read.question('Enter second number')
console.log(firstVal>secondVal)
if(parseInt(firstVal)>parseInt(secondVal)){
    console.log(firstVal +"is Great")
}
else if(firstVal===secondVal){
    console.log("Values are equal")
}
else{
    console.log(secondVal +"is great")
}
