var read = require('readline-sync')
var limit = read.questionInt("Enter the limit ?")
var sum=0;
for(var i=1;i<=limit;i++){
    if(i%2!=0){
sum=sum+i;
    }
}
console.log(sum)