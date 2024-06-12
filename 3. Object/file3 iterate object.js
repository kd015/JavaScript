const person = {
    name:"Krishna", 
    age:22,
    "person hobbies":["sleeping","coding"]
}

//for in loop!
// for ( let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// object.keys

// console.log(Object.keys(person))
// const val = Array.isArray(Object.keys(person))
// console.log(val)


for( let key of Object.keys(person)){        //yha 'for of' hai na ki 'for in' yaad se zra!
    console.log(person[key])
}
