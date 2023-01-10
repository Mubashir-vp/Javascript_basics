var array1 = [11, 33, 87, 15, 33]
var sum=0;
for(var i=0;i<array1.length;i++){
    if(array1[i]%2!=0){
        sum=sum+1;
    }
}
console.log(sum)