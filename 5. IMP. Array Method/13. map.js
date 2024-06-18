//map: key, value pair ko store krega


//object literal: key --> string ( 99 % ) and symbol ( 1% )

const person = {
    fName : "Krishna",
    age : 20,
    1 : "one"
}
// console.log(person["1"])

//map: key, value pair ko store krega
// : main different: map me kishi bhi type ko store kra skte hai 'key' me
// const person1 = new Map()
// person1.set('fName', 'Krishna')
// person1.set('age',20)
// person1.set(1,'one')
// console.log(person1)
// console.log(person1.get(1))

// for ( let key of person1.keys()){
//     console.log(key, typeof key)
// }

// for ( let key of person1){  //array dega!!
//     console.log(key)
// }

// for ( let [key, value] of person1){  //array ko destructure!!
//     console.log(key, value)
// }


//map: real example!!

const person2 = {
    id : 1,
    fName : "krishna"
}

const extraInfo = new Map()
extraInfo.set(person2,{age:20, gender : "male"})
console.log(person2.id)
console.log(extraInfo.get(person2).gender)




