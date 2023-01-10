try{
    if(User==null){
        throw "User not found"
    }
}catch (e){
    console.log(e)
}finally {
    //whatever happen this will work if try works neither catch works
}