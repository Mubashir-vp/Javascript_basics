var array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
var temp;
for (var i = 0; i < array1.length - 1; i++) {
    for(var j=i+1;j<=array1.length;j++){
        if (array1[i] > array1[j]) {
            temp = array1[i]
            array1[i] = array1[j]
            array1[j] = temp
        }

    }
  

}
console.log(array1)