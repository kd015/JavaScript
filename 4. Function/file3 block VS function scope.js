//let and const are block scope

{
    let fName = "Krishna"
    console.log(fName)

    const num = 99
    console.log(num)

    //block ke bahar nhi access kr skte  --> block scope
}

//var is function scope!

{
    var fName = "Krishna"
    var num = 99
    //block ke bahar  access kr skte  --> function scope
}
console.log(fName)
console.log(num)




//default parameter:

function addTwo( a, b = 13 ){
    return a + b
}
// const ans = addTwo(6,4)
const ans = addTwo(6)  //ye because of default parameter
// const ans = addTwo(6,12) // default hai but apna de skte hai
console.log(ans)
