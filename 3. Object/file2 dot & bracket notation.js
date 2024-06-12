const person = {
    name:"Krishna", 
    age:22,
    "person hobbies":["sleeping","coding"]
}

//dot -----> jb single word key ho
// console.log(person.age)

//bracket: multi word: jaise 'person hobbies'
// console.log(person["person hobbies"])


//variable 'key' se value fetch krke add krna!!

const key = "email"
person[key] = "krishnadev@gmail.com" //yha string me nhi pass krna hai
console.log(person)

