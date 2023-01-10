var read = require('readline-sync')
var array1 = [15, 25, 35, 45, 55, 65]
var array2 = [10, 20, 30, 40, 50, 60]
var temp;
for (var i = 0; i < array1.length; i++) {
    temp = array1[i]
    array1[i]=array2[i]
    array2[i]=temp

}
console.log("Array 1  "+array1)
console.log("Array 2 "+array2)