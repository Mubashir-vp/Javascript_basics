var read=require('readline-sync')
var mark=read.questionInt("Enter your mark ?")
if(mark>100){
    console.log("Enter a correct Mark")
}
else if(mark<50){
    console.log("Better luck next time")

}
else{
    console.log("Congratulations you passed")
}
