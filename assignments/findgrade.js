var read = require('readline-sync')
var mark = read.questionInt("Enter your mark ?")
var result;
console.log(typeof (mark))


if (mark > 100) {
    console.log("Enter a correct mark")
} else if (mark >= 90) {
    console.log("Your grade is  A")
} else if (mark >= 80 && mark <= 89) {
    console.log("Your grade is  B")
} else if (mark >= 70 && mark <= 79) {
    console.log("Your grade is  C")
} else if (mark >= 60 && mark <= 69) {
    console.log("Your grade is  D")
} else if (mark >= 50 && mark <= 59) {
    console.log("Your grade is  E")
} else if (mark >= 40 && mark <= 49) {
    console.log("Your grade is  F")
} else if (mark < 30) {
    console.log("Your failed")
}


