//memory:

const obj = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = obj 
const obj2 = {...obj}
obj.key3 = "value3"  //dono me add ho ja rha!! spread operator use
//another way!!
const obj3 = Object.assign({}, obj) //cloning!!
console.log(obj)
console.log(obj2)
console.log(obj3)