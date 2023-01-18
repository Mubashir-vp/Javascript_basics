class  Hoi{
    sampleMethod(){
        console.log("This is from hoi")
    }
}

class Hello extends Hoi{
    constructor (num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log("Numbers are "+ (this.num1+this.num2))
    }
}
let hel=new Hello(50,50)
hel.hello()
hel.sampleMethod()