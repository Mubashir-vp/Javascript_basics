var Person = { name: "Mubashir", age: "21", }
console.log(Person.age)
console.log(Person["name"])
for (x in Person) {
    console.log(Person[x])
}
//object inte ulllil functionionum declare cheyyam
var Func = {
    name: "Mub", fu: function () {
        console.log("Function called " + this.name)

    }
}
console.log(Func.fu())