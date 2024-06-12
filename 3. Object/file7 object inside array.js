// object inside array : very usuful for real world application!!

const users = [
    {userId: 1, firstName: "Krishna", gender: "male"},
    {userId: 2, firstName: "Rohit", gender: "male"},
    {userId: 3, firstName: "Smriti", gender: "male"},
]

for ( let user of users){
    console.log(user)
    console.log(user.firstName)
}