var dt=new Date()
console.log('Hello ' + dt)
for(i=0;i<100;i++){
}
console.log('End')
var diff=new Date()-dt
console.log(diff)
function showEnd(num){
    console.log("Ended"+num)
}
console.log("Started")
setTimeout(()=>showEnd(1),1000)
console.log("Started")
setTimeout(showEnd,1000)
console.log("Started")
setTimeout(showEnd,1000)