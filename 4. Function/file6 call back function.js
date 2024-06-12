//call back function

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`)
}

function myFunc(callback){
    console.log("Hello there I am func")
    callback("Krishna")
}

myFunc(myFunc2)