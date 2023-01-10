function Person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.display=function (){
        console.log("Name :"+this.name +"\nAge :"+this.age +"\nPlace :"+this.place)
    }

}
var mubashir = new Person("Mubashir",21,"MLP");
mubashir.display()