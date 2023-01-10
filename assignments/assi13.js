var string = "mub"
console.log(string[0])
var flag = 0;
var length = string.length
for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
        flag = 1;
    }
}
if (flag === 1) {
    console.log("String is not palindrome")
}
else {
    console.log("String is  palindrome")

}
// while(string[i]===string[length]){

// }